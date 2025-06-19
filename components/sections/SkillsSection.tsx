import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  Shield,
  Users,
  Monitor,
  Server,
  Smartphone,
} from "lucide-react";
import React from "react";

interface Skill {
  name: string;
  icon: React.ElementType;
  level: number;
}

interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  mobile: Skill[];
}

interface SkillsSectionProps {
  skills: SkillsData;
  skillsInView: boolean;
  skillsRef: React.RefObject<HTMLDivElement | null>;
}

export default function SkillsSection({
  skills,
  skillsInView,
  skillsRef,
}: SkillsSectionProps) {
  const skillCategories = [
    {
      title: "Frontend",
      subtitle: "Interfaces utilisateur",
      icon: Monitor,
      skills: skills.frontend,
    },
    {
      title: "Backend",
      subtitle: "Architecture serveur",
      icon: Server,
      skills: skills.backend,
    },
    {
      title: "Mobile",
      subtitle: "Applications mobiles",
      icon: Smartphone,
      skills: skills.mobile,
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30" ref={skillsRef}>
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center space-y-6 mb-20 transition-all duration-1000 ${
            skillsInView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <Badge variant="outline">Expertise Technique</Badge>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
            Compétences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Maîtrise approfondie des technologies modernes réparties sur trois
            domaines d'expertise complémentaires.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group transition-all duration-1000 ${
                skillsInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]">
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="text-foreground leading-relaxed">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <React.Fragment key={skill.name}>
                          <span className="inline-flex items-center gap-2">
                            <SkillIcon className="h-4 w-4 text-primary" />
                            <span className="font-medium">{skill.name}</span>
                          </span>
                          {skillIndex < category.skills.length - 1 && (
                            <span className="text-muted-foreground">, </span>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Expertise Highlights */}
        {/* <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: BarChart3,
              title: "Performance",
              desc: "Optimisation des requêtes et architecture haute performance",
            },
            {
              icon: Shield,
              title: "Sécurité",
              desc: "Implémentation de mesures de sécurité robustes",
            },
            {
              icon: Users,
              title: "Scalabilité",
              desc: "Conception d'architectures évolutives et distribuées",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className={`text-center group hover:shadow-xl transition-all duration-700 border border-border/50 bg-card/50 backdrop-blur-sm ${
                skillsInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200 + 800}ms` }}
            >
              <CardContent className="p-8">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
}
