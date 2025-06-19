import {
  Server,
  Code2,
  Database,
  Cloud,
  GitBranch,
  BarChart3,
  Monitor,
  Smartphone,
  FileCode,
  Palette,
  ShoppingCart,
  Truck,
  MapPin,
} from "lucide-react";

export const navigationItems = [
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "experience", label: "Expérience" },
  { id: "contact", label: "Contact" },
];

export const about = {
  name: "Patrick Aimé Kouassi",
  title: "Développeur Web Backend",
  subtitle: "Disponible pour nouveaux projets",
  image: "/images/me.jpeg",
  description:
    "Je suis un développeur web orienté back-end avec une ouverture sur le front-end et le mobile, passionné par les technologies et l'innovation. Curieux, adaptable et rigoureux, je mets mes compétences au service de projets ambitieux, en alliant performance technique et esprit d'équipe.",
  email: "patrickkouassi7@gmail.com",
  github: "@Pat56-hp",
  linkedin: "/in/Patrick-aime",
  adresse: "Abidjan, Côte d'Ivoire",
  teletravail: "Télétravail possible",
};

export const skills = {
  frontend: [
    { name: "HTML5/CSS3", icon: FileCode, level: 95 },
    { name: "JavaScript", icon: Code2, level: 90 },
    { name: "React.js", icon: Monitor, level: 85 },
    { name: "Bootstrap", icon: Palette, level: 88 },
    { name: "Tailwind CSS", icon: Palette, level: 85 },
    { name: "jQuery", icon: Code2, level: 80 },
    { name: "Inertia.js", icon: Monitor, level: 75 },
  ],
  backend: [
    { name: "PHP", icon: Server, level: 95 },
    { name: "Laravel", icon: Server, level: 92 },
    { name: "Node.js", icon: Server, level: 85 },
    { name: "Express.js", icon: Server, level: 80 },
    { name: "MySQL", icon: Database, level: 90 },
    { name: "SQL", icon: Database, level: 88 },
    { name: "REST API", icon: GitBranch, level: 92 },
    { name: "Git/GitHub", icon: GitBranch, level: 90 },
  ],
  mobile: [
    { name: "Flutter", icon: Smartphone, level: 85 },
    { name: "Dart", icon: Smartphone, level: 80 },
    { name: "React Native", icon: Smartphone, level: 75 },
    { name: "Mobile UI/UX", icon: Monitor, level: 80 },
    { name: "Firebase", icon: Cloud, level: 75 },
  ],
};

export const projects = [
  {
    title: "Gestion des dépenses",
    description:
      "Application mobile de gestion financière développée avec Flutter offrant un tableau de bord intuitif pour le suivi des entrées et sorties. L'interface permet de filtrer les transactions par date et affiche un récapitulatif détaillé des mouvements financiers. L'API REST Laravel gère la persistance des données, l'authentification utilisateur et assure la synchronisation entre l'application mobile et la base de données.",
    tech: [
      "Php",
      "Laravel",
      "Flutter",
      "Firebase",
      "Github",
      "VS Code",
      "Insomnia",
    ],
    link: "https://github.com/pat56-hp/depenses_app",
    images: ["/images/projects/depense.jpeg"],
    icon: BarChart3,
    entreprise: "Personnel",
  },
  {
    title: "Les bons plans",
    description:
      "Plateforme web et mobile complète de découverte des bons plans de divertissement en Côte d'Ivoire. L'application propose un système de filtrage avancé pour trouver des lieux selon les préférences, une carte interactive affichant géolocalisation des endroits, et un tableau de bord dual pour les utilisateurs et les propriétaires d'établissements. Les utilisateurs peuvent découvrir et évaluer les lieux, tandis que les propriétaires peuvent gérer leur présence et leurs offres.",
    tech: [
      "Php",
      "Laravel",
      "Bootstrap",
      "React Js",
      "Flutter",
      "VS Code",
      "Insomnia",
      "Github",
    ],
    link: "https://github.com/pat56-hp/bonplan",
    images: [
      "/images/projects/bonplan2.jpeg",
      "/images/projects/bonplan1.jpeg",
    ],
    icon: MapPin,
    entreprise: "Personnel",
  },
  {
    title: "Gestion des collectes & des courses",
    description:
      "Plateforme complète de gestion logistique comprenant une application web d'administration, un site web client et deux applications mobiles (client et agents). Le système permet la gestion des demandes de courses, l'affectation des courses aux agents et le suivi des livraisons de colis. J'ai participé à l'élaboration des APIs REST, au développement du site web client et à la création de l'interface d'administration pour optimiser le processus de livraison.",
    tech: [
      "Laravel",
      "Bootstrap",
      "Javascript",
      "Jquery",
      "Firebase",
      "VS Code",
      "Electron",
      "Insomnia",
    ],
    link: "https://coditrans.ci",
    images: [
      "/images/projects/courses3.jpeg",
      "/images/projects/courses1.jpeg",
      "/images/projects/courses2.jpeg",
    ],
    icon: Truck,
    entreprise: "Coditrans",
  },
  {
    title: "Gestion de stock, Inventaire, POS, E-commerce",
    description:
      "Solution complète de gestion commerciale intégrant un système de gestion de stock et d'inventaire, un point de vente (POS) et une plateforme e-commerce avec système d'administration. L'application permet le suivi en temps réel des stocks, la gestion des inventaires, les ventes en magasin via le POS et les ventes en ligne via l'e-commerce. Le système d'administration centralisé offre un contrôle total sur les produits, les prix, les utilisateurs et les rapports de vente.",
    tech: ["Laravel", "Jquery", "Ajax", "Javascript"],
    link: "https://goaoutlets.com/",
    images: [
      "/images/projects/stock1.jpeg",
      "/images/projects/stock2.jpeg",
      "/images/projects/stock3.jpeg",
    ],
    icon: ShoppingCart,
    entreprise: "GOA Outlet",
  },
];

export const experience = [
  {
    role: "Lead Développeur",
    company: "Tinitz",
    period: "2023 - Présent",
    location: "Cocody, Abidjan, Côte d'Ivoire",
    achievements: [
      "Conception technique des projets, encadrement de l'équipe dev",
      "Revues de code & bonnes pratiques de développeur",
      "Coordination avec l'équipe produit & design",
      "Veille au respect des délais et objectifs métier",
    ],
  },
  {
    role: "Développeur Web FullStack",
    company: "Tinitz",
    period: "2021 - 2023",
    location: "Cocody, Abidjan, Côte d'Ivoire",
    achievements: [
      "Développé les APIs REST des applications (Php/Laravel)",
      "Conçu et optimisé la base de données PostgreSQL, MySql",
      "Intégré des services tiers (Stripe, Cinetpay, Paypal, Jobs)",
      "Contribué à la formation des utilisateurs",
    ],
  },
  {
    role: "Stagiaire Développeur Desktop",
    company: "Direction Générale des Hydrocarbures",
    period: "2019 - 2020",
    location: "Vridi, Abidjan, Côte d'Ivoire",
    achievements: [
      "Développé des applications desktop (Windev 20)",
      "Mise en relation et l'exploitation de fichier Excel pour le codage des stations",
    ],
  },
];
