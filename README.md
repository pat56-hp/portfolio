# Portfolio – Patrick Aimé Kouassi

Bienvenue sur le portfolio de Patrick Aimé Kouassi, développeur web backend.

Ce projet met en avant mes compétences, expériences et réalisations à travers une interface moderne, responsive et animée, développée avec Next.js, React, TypeScript et Tailwind CSS.

## ✨ Fonctionnalités principales

- **Navigation fluide** avec menu fixe et surbrillance automatique de la section active
- **Sections modulaires** : À propos, Compétences, Projets, Expérience, Contact
- **Affichage et téléchargement du CV** dans un modal élégant
- **Animations et transitions** pour une expérience utilisateur dynamique
- **Responsive** : design adapté à tous les écrans
- **Mode sombre/clair** avec mémorisation du choix utilisateur

## 🛠️ Technologies utilisées

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Embla Carousel](https://www.embla-carousel.com/) (pour les galeries de projets)

## 📁 Structure du projet

```
├── app/
│   ├── globals.css           # Styles globaux
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Page d'entrée (redirige vers portfolio.tsx)
├── components/
│   ├── sections/             # Sections du portfolio (About, Skills, Projects, Experience, Contact, Header, Footer)
│   └── ui/                   # Composants UI réutilisables (Button, Modal, Dialog, etc.)
│   └── theme-provider.tsx    # Provider pour le thème
├── hooks/                    # Hooks personnalisés (use-mobile, use-toast)
├── lib/
│   └── sectionsData.ts       # Données centralisées (navigation, projets, etc.)
│   └── utils.ts              # Fonctions utilitaires
├── public/
│   ├── images/               # Images du portfolio et des projets
│   └── cv.pdf                # CV à afficher/télécharger
├── styles/
│   └── globals.css           # Styles additionnels
├── portfolio.tsx             # Page principale du portfolio
├── package.json              # Dépendances et scripts
├── tailwind.config.ts        # Configuration Tailwind
├── tsconfig.json             # Configuration TypeScript
└── ...
```

## 🚀 Installation & Lancement

1. **Cloner le repo**
   ```bash
   git clone https://github.com/pat56-hp/portfolio.git
   cd portfolio
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```
3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
4. **Accéder à l'application**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## ⚙️ Personnalisation

- Modifiez les données dans `lib/sectionsData.ts` pour adapter le contenu (projets, compétences, liens, etc.).
- Remplacez le fichier `public/cv.pdf` par votre propre CV.
- Les images de projets sont à placer dans `public/images/`.

## 🖥️ Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com/) ou toute plateforme compatible Next.js.

1. Poussez votre code sur GitHub
2. Connectez le repo à Vercel
3. Déployez en un clic

## 👤 Auteur

**Patrick Aimé Kouassi**  
Développeur web backend & Fullstack  
[LinkedIn](https://linkedin.com/in/Patrick-aime)  
[Email](mailto:patrickkouassi7@gmail.com)

---

> Ce portfolio est open source. N'hésitez pas à le forker, l'adapter ou me contacter pour toute collaboration !
