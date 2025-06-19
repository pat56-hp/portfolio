"use client";

import { Button } from "@/components/ui/button";

import { ChevronUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import {
  navigationItems,
  about,
  skills,
  projects,
  experience,
} from "@/lib/sectionsData";

// Hook pour détecter quand un élément est visible
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView] as const;
}

// Hook pour tracker la section active
function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["about", "skills", "projects", "experience", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          },
          {
            threshold: 0.2,
            rootMargin: "-10% 0px -10% 0px",
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return activeSection;
}

export default function Component() {
  const [heroRef, heroInView] = useInView(0.2);
  const [skillsRef, skillsInView] = useInView(0.2);
  const [projectsRef, projectsInView] = useInView(0.2);
  const [experienceRef, experienceInView] = useInView(0.2);
  const [contactRef, contactInView] = useInView(0.2);

  const [typedText, setTypedText] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const activeSection = useActiveSection();

  // Gestion du scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Calculer la progression du scroll
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestion du mode sombre
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = window.innerWidth >= 768 ? 64 : 56; // 64px sur desktop, 56px sur mobile
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false); // Fermer le menu mobile après navigation
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (heroInView) {
      const title = about.title;
      let i = 0;
      const timer = setInterval(() => {
        if (i < title.length) {
          setTypedText(title.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [heroInView]);

  // Fermer le menu mobile si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="overflow-hidden min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300 px-4 sm:px-6 lg:px-8">
      {/* Header - Pleine largeur */}
      <Header
        scrollProgress={scrollProgress}
        activeSection={activeSection}
        navigationItems={navigationItems}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        scrollToSection={scrollToSection}
      />
      <div className="max-w-7xl mx-auto pt-14 md:pt-16">
        {/* Hero Section */}
        <AboutSection
          heroRef={heroRef}
          heroInView={heroInView}
          typedText={typedText}
          about={about}
        />
        {/* Skills Section */}
        <SkillsSection
          skills={skills}
          skillsInView={skillsInView}
          skillsRef={skillsRef}
        />
        {/* Projects Section */}
        <ProjectsSection
          projects={projects}
          projectsInView={projectsInView}
          projectsRef={projectsRef}
        />
        {/* Experience Section */}
        <ExperienceSection
          experience={experience}
          experienceInView={experienceInView}
          experienceRef={experienceRef}
        />
        {/* Contact Section */}
        <ContactSection contactInView={contactInView} contactRef={contactRef} />
      </div>
      {/* Footer */}
      <Footer />
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg transition-all duration-300 ${
          showScrollTop
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-0 pointer-events-none"
        }`}
        aria-label="Retour en haut"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
