import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  link: string;
  icon: React.ElementType;
  entreprise: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  projectsInView: boolean;
  projectsRef: React.RefObject<HTMLDivElement | null>;
}

function ProjectImagesCarousel({
  images,
  onImageClick,
}: {
  images: string[];
  onImageClick: (idx: number) => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div>
      <div className="relative group">
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {images.map((img, idx) => (
              <div
                className="min-w-0 flex-[0_0_100%] cursor-pointer"
                key={img}
                onClick={() => onImageClick(idx)}
              >
                <Image
                  src={img}
                  alt={`Image du projet ${idx + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
        {images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-1 shadow hover:bg-background z-10 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200"
              onClick={scrollPrev}
              aria-label="Image précédente"
              type="button"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-1 shadow hover:bg-background z-10 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200"
              onClick={scrollNext}
              aria-label="Image suivante"
              type="button"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </>
        )}
      </div>
      {/* Pagination */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === selectedIndex ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              aria-label={`Aller à l'image ${idx + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection({
  projects,
  projectsInView,
  projectsRef,
}: ProjectsSectionProps) {
  // État global du modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);

  // Fonction pour ouvrir le modal avec les images d'un projet
  const handleImageClick = (images: string[], idx: number) => {
    setModalImages(images);
    setModalIndex(idx);
    setModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="py-24 transition-colors duration-300"
      ref={projectsRef}
    >
      <div className="container max-w-7xl mx-auto">
        <div
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            projectsInView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <Badge variant="outline">Portfolio</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Projets Remarquables
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Découvrez quelques-uns de mes projets les plus significatifs,
            démontrant mon expertise en développement d'application.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-1">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-1000 ${
                projectsInView
                  ? "translate-x-0 opacity-100"
                  : index % 2 === 0
                  ? "-translate-x-8 opacity-0"
                  : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <CardContent className="p-8">
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                          <project.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {project.title}
                          </h3>
                          <Badge variant="secondary" className="mt-1">
                            {project.entreprise}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-foreground"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 text-foreground" />
                        <span className="text-foreground">Voir le projet</span>
                      </Button>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className={`transition-all duration-500 ${
                            projectsInView
                              ? "translate-y-0 opacity-100"
                              : "translate-y-4 opacity-0"
                          }`}
                          style={{
                            transitionDelay: `${
                              index * 300 + techIndex * 100 + 500
                            }ms`,
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      Aperçu du projet
                    </h4>
                    <ProjectImagesCarousel
                      images={project.images}
                      onImageClick={(idx) =>
                        handleImageClick(project.images, idx)
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Modal global */}
      {modalOpen && (
        <div className="fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center bg-black/80">
          <button
            className="absolute top-4 right-4 bg-background/80 rounded-full p-2"
            onClick={() => setModalOpen(false)}
            aria-label="Fermer"
            type="button"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2"
            onClick={() =>
              setModalIndex(
                (modalIndex - 1 + modalImages.length) % modalImages.length
              )
            }
            aria-label="Image précédente"
            type="button"
          >
            <ChevronLeft className="w-8 h-8 text-foreground" />
          </button>
          <Image
            src={modalImages[modalIndex]}
            alt={`Image du projet agrandie ${modalIndex + 1}`}
            width={900}
            height={700}
            className="max-h-[80vh] w-auto rounded-lg shadow-lg"
          />
          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2"
            onClick={() => setModalIndex((modalIndex + 1) % modalImages.length)}
            aria-label="Image suivante"
            type="button"
          >
            <ChevronRight className="w-8 h-8 text-foreground" />
          </button>
        </div>
      )}
    </section>
  );
}
