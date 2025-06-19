# Portfolio – Alexandre Dubois

Bienvenue sur le portfolio d’Alexandre Dubois, développeur backend expert.

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
├── components/
│   ├── sections/         # Sections du portfolio (About, Skills, Projects, ...)
│   └── ui/               # Composants UI réutilisables (Button, Modal, ...)
├── lib/
│   └── sectionsData.ts   # Données centralisées (navigation, projets, etc.)
├── public/
│   ├── images/           # Images du portfolio
│   └── cv.pdf            # CV à afficher/télécharger
├── portfolio.tsx         # Page principale
└── ...
```

## 🚀 Installation & Lancement

1. **Cloner le repo**
   ```bash
   git clone https://github.com/votre-utilisateur/portfolio.git
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
4. **Accéder à l’application**
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

**Alexandre Dubois**  
Développeur Backend & Fullstack  
[LinkedIn](https://linkedin.com/in/...)  
[Email](mailto:...)

---

> Ce portfolio est open source. N’hésitez pas à le forker, l’adapter ou me contacter pour toute collaboration !
