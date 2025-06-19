import { Button } from "@/components/ui/button";
import { about } from "@/lib/sectionsData";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-background/50 transition-colors duration-300 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Code2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">{about.name}</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {about.name}. Tous droits réservés.
          </p>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground hover:text-foreground"
              asChild
            >
              <a
                href={`https://github.com/${about.github.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground hover:text-foreground"
              asChild
            >
              <a
                href={`https://linkedin.com${about.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground hover:text-foreground"
            >
              <a
                href={`mailto:${about.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
