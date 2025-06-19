import { Button } from "@/components/ui/button";
import {
  Code2,
  Sun,
  Moon,
  Download,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import React, { useState } from "react";
import PdfModal from "@/components/ui/PdfModal";
import { about } from "@/lib/sectionsData";

interface NavigationItem {
  id: string;
  label: string;
}

interface HeaderProps {
  scrollProgress: number;
  activeSection: string;
  navigationItems: NavigationItem[];
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({
  scrollProgress,
  activeSection,
  navigationItems,
  isDarkMode,
  toggleDarkMode,
  isMobileMenuOpen,
  toggleMobileMenu,
  scrollToSection,
}: HeaderProps) => {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300 shadow-sm">
      {/* Barre de progression */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary/20">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="container flex h-14 md:h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-lg bg-primary shadow-sm transition-transform duration-300 hover:scale-105">
            <Code2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground text-sm md:text-base">
            {about.name}
          </span>
        </div>
        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative transition-all duration-300 hover:text-primary ${
                activeSection === item.id
                  ? "text-primary font-semibold"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300 animate-in slide-in-from-bottom-1"></span>
              )}
            </button>
          ))}
        </nav>
        {/* Actions Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDarkMode}
            className="p-2 hover:bg-accent transition-colors duration-200 text-foreground"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4 text-foreground rotate-0 scale-100 transition-all duration-300" />
            ) : (
              <Moon className="h-4 w-4 text-foreground rotate-0 scale-100 transition-all duration-300" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-foreground border-border"
            onClick={() => setCvModalOpen(true)}
          >
            <Download className="mr-2 h-4 w-4 text-foreground" />
            <span className="text-foreground">CV</span>
          </Button>
        </div>
        {/* Actions Mobile */}
        <div className="flex md:hidden items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="h-8 w-8 rounded-full hover:bg-accent transition-all duration-200 text-foreground"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4 text-foreground" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="mobile-menu-button h-8 w-8 rounded-full hover:bg-accent transition-all duration-200 text-foreground relative"
            aria-label="Toggle menu"
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              <Menu className="h-4 w-4 text-foreground" />
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <X className="h-4 w-4 text-foreground" />
            </div>
          </Button>
        </div>
      </div>
      {/* Menu Mobile Déroulant */}
      <div
        className={`mobile-menu md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-[calc(100vh-3.5rem)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-inner">
          <div className="container max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2.5">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2.5 px-4 rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-primary font-semibold bg-primary/10 border border-primary/20"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 50}ms`
                      : "0ms",
                    transform: isMobileMenuOpen
                      ? "translateY(0)"
                      : "translateY(-8px)",
                    opacity: isMobileMenuOpen ? 1 : 0,
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-foreground border-border rounded-xl py-2.5 h-auto transition-all duration-300"
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${navigationItems.length * 50 + 50}ms`
                      : "0ms",
                    transform: isMobileMenuOpen
                      ? "translateY(0)"
                      : "translateY(-8px)",
                    opacity: isMobileMenuOpen ? 1 : 0,
                  }}
                >
                  <Download className="mr-2 h-4 w-4 text-foreground" />
                  <span className="text-foreground">Télécharger CV</span>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Modal PDF CV commun */}
      <PdfModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </header>
  );
};

export default Header;
