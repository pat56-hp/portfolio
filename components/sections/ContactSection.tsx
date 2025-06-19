import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { about } from "@/lib/sectionsData";
import { Mail, Linkedin, Download, X } from "lucide-react";
import React, { useState } from "react";
import PdfModal from "@/components/ui/PdfModal";

interface ContactSectionProps {
  contactInView: boolean;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export default function ContactSection({
  contactInView,
  contactRef,
}: ContactSectionProps) {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  return (
    <section
      id="contact"
      className="py-24 transition-colors duration-300"
      ref={contactRef}
    >
      <div
        className={`max-w-2xl mx-auto text-center space-y-8 transition-all duration-1000 ${
          contactInView
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div className="space-y-4">
          <Badge variant="outline">Contact</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Travaillons Ensemble
          </h2>
          <p className="text-muted-foreground text-lg">
            Intéressé par mes services ? N'hésitez pas à me contacter pour
            discuter de votre projet.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: Mail,
              title: "Email",
              desc: about.email,
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              desc: about.linkedin,
            },
          ].map((contact, index) => (
            <Card
              key={index}
              className={`p-6 text-center hover:shadow-lg transition-all duration-1000 ${
                contactInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              <contact.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-foreground">
                {contact.title}
              </h3>
              <p className="text-muted-foreground">
                <a
                  href={`https://linkedin.com${about.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.desc}
                </a>
              </p>
            </Card>
          ))}
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
            contactInView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <Button size="lg" className="gap-2" asChild>
            <a
              href={`mailto:${about.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-4 w-4" />
              Envoyer un message
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 text-foreground border-border"
            onClick={() => setCvModalOpen(true)}
          >
            <Download className="h-4 w-4 text-foreground" />
            <span className="text-foreground">Télécharger mon CV</span>
          </Button>
        </div>
      </div>
      {/* Modal CV */}
      <PdfModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </section>
  );
}
