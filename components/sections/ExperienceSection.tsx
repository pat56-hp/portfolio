import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Terminal, Calendar, MapPin } from "lucide-react";
import React from "react";

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

interface ExperienceSectionProps {
  experience: Experience[];
  experienceInView: boolean;
  experienceRef: React.RefObject<HTMLDivElement | null>;
}

export default function ExperienceSection({
  experience,
  experienceInView,
  experienceRef,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="py-24 bg-muted/30 dark:bg-muted/10 transition-colors duration-300 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
      ref={experienceRef}
    >
      <div className="container max-w-7xl mx-auto">
        <div
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            experienceInView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <Badge variant="outline">Parcours</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Expérience Professionnelle
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              {index !== experience.length - 1 && (
                <div
                  className={`absolute left-6 top-16 w-px h-full bg-border transition-all duration-1000 ${
                    experienceInView ? "scale-y-100" : "scale-y-0"
                  } origin-top`}
                  style={{ transitionDelay: `${index * 400}ms` }}
                />
              )}

              <Card
                className={`mb-8 ml-16 hover:shadow-lg transition-all duration-1000 ${
                  experienceInView
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 400 + 200}ms` }}
              >
                <CardHeader>
                  <div
                    className={`absolute -left-10 top-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center transition-all duration-1000 ${
                      experienceInView
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 400 + 400}ms` }}
                  >
                    <Terminal className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-foreground">
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className={`flex items-start gap-3 transition-all duration-700 ${
                          experienceInView
                            ? "translate-x-0 opacity-100"
                            : "translate-x-4 opacity-0"
                        }`}
                        style={{
                          transitionDelay: `${
                            index * 400 + achIndex * 100 + 600
                          }ms`,
                        }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
