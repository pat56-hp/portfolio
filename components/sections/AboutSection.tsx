import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Globe,
  Server,
  Code2,
} from "lucide-react";
import Image from "next/image";
import React from "react";

interface About {
  title: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  adresse: string;
  teletravail: string;
}

interface AboutSectionProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
  heroInView: boolean;
  typedText: string;
  about: About;
}

export default function AboutSection({
  heroRef,
  heroInView,
  typedText,
  about,
}: AboutSectionProps) {
  return (
    <section id="about" className="py-24 md:py-32" ref={heroRef}>
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              heroInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className={`w-fit transition-all duration-700 delay-300 ${
                  heroInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <Zap className="mr-1 h-3 w-3" />
                {about.subtitle}
              </Badge>
              <h1
                className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground transition-all duration-1000 delay-500 ${
                  heroInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {typedText}
                <span className="animate-pulse">|</span>
              </h1>
              <p
                className={`text-xl text-muted-foreground max-w-[600px] transition-all duration-1000 delay-700 ${
                  heroInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {about.description}
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-1000 ${
                heroInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <Button size="lg" className="gap-2" asChild>
                <a
                  href={`mailto:${about.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-foreground border-border"
                asChild
              >
                <a
                  href={`https://github.com/${about.github.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 text-foreground" />
                  <span className="text-foreground">GitHub</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-foreground border-border"
                asChild
              >
                <a
                  href={`https://linkedin.com${about.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 text-foreground" />
                  <span className="text-foreground">LinkedIn</span>
                </a>
              </Button>
            </div>

            <div
              className={`flex items-center gap-6 text-sm text-muted-foreground transition-all duration-1000 delay-1200 ${
                heroInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {about.adresse}
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                {about.teletravail}
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              heroInView
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative mx-auto w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-blue-600/20 p-1">
              <div className="w-full h-full rounded-xl bg-background flex items-center justify-center p-2">
                <Image
                  src={`${about.image}?height=300&width=300`}
                  alt={`Portrait de ${about.name}`}
                  width={300}
                  height={300}
                  className="rounded-md object-cover h-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-xl shadow-lg">
              <Server className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
