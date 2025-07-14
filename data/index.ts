// Navigation pour site d'agence web
export const navItems = [
  { name: "Services", link: "#services" },
  { name: "Réalisations", link: "#realisations" },
  { name: "À propos", link: "#apropos" },
  { name: "Contact", link: "#contact" },
];

// Grille de présentation agence
export const gridItems = [
  {
    id: 1,
    title: "Expert Transformation Digitale",
    description: "Double expertise développement + marketing digital",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Basé en France",
    description: "Accompagnement local et sur-mesure",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Stack Moderne",
    description: "Technologies performantes et évolutives",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Résultats Mesurables",
    description: "ROI et performance au centre de chaque projet",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Innovation & R&D",
    description: "Veille technologique constante",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Parlons de votre projet 🚀",
    description: "Audit gratuit de votre présence digitale",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// Services d'agence web
export const services = [
  {
    id: 1,
    title: "Audit Digital Complet",
    description: "Analyse technique, SEO, UX et concurrentielle pour identifier vos opportunités de croissance",
    price: "À partir de 890€",
    duration: "1 semaine",
    features: [
      "Audit technique complet",
      "Analyse SEO approfondie", 
      "Étude concurrentielle",
      "Plan d'actions prioritaires",
      "Rapport détaillé + présentation"
    ],
    icon: "/exp1.svg"
  },
  {
    id: 2,
    title: "Site Web Performant",
    description: "Développement de sites orientés conversion avec design moderne et optimisation SEO",
    price: "À partir de 2 500€",
    duration: "3-4 semaines",
    features: [
      "Design responsive moderne",
      "Optimisation conversion",
      "SEO technique intégré",
      "Formation à la gestion",
      "Support 3 mois inclus"
    ],
    icon: "/exp2.svg"
  },
  {
    id: 3,
    title: "Stratégie Marketing Digital",
    description: "Élaboration d'une stratégie complète pour attirer et convertir vos clients idéaux",
    price: "À partir de 1 500€",
    duration: "2 semaines",
    features: [
      "Stratégie SEO personnalisée",
      "Plan éditorial réseaux sociaux",
      "Campagnes email marketing",
      "Paramétrage outils analytics",
      "Formation équipe"
    ],
    icon: "/exp3.svg"
  },
  {
    id: 4,
    title: "Accompagnement Mensuel",
    description: "Suivi continu de vos performances et optimisations pour maximiser votre ROI",
    price: "750€/mois",
    duration: "Engagement 6 mois",
    features: [
      "Reporting mensuel détaillé",
      "Optimisations continues",
      "Support technique prioritaire",
      "Conseils stratégiques",
      "Veille concurrentielle"
    ],
    icon: "/exp4.svg"
  }
];

// Études de cas clients (remplace projects)
export const caseStudies = [
  {
    id: 1,
    title: "Auberge du Midi - Transformation Digitale",
    client: "Fabienne Falconnet",
    sector: "Hôtellerie-Restauration",
    description: "Refonte complète du site web, optimisation SEO et intégration système de réservation en ligne",
    results: {
      revenue: "+18% de chiffre d'affaires",
      traffic: "+120% de trafic organique",
      conversion: "+85% de réservations en ligne",
      timeframe: "6 mois"
    },
    img: "/mon-1ersite-wp.jpg",
    technologies: ["/wordpress-icon.svg", "/stripe-2.svg"],
    link: "https://www.aubergedumidi.fr",
    testimonial: "Travailler avec Emeric a été une expérience positive. La refonte de mon vieux site web, la nouvelle stratégie SEO et l'intégration d'outil de réservation et paiement sécurisé en ligne ont permis d'augmenter le chiffre d'affaire de l'Auberge de plus de 18%."
  },
  {
    id: 2,
    title: "Brainwave - Landing Page IA Moderne",
    client: "Projet Vitrine Tech",
    sector: "Intelligence Artificielle",
    description: "Création d'une landing page moderne pour solution IA avec design contemporain et animations fluides",
    results: {
      revenue: "Vitrine tech réussie",
      traffic: "Design moderne adaptatif",
      conversion: "UX optimisée",
      timeframe: "2 semaines"
    },
    img: "/mon-site-brainwave.jpg",
    technologies: ["/vitejs.svg", "/tail.svg", "/ts.svg"],
    link: "https://brainwave.emericpetitgenet.com",
    testimonial: "Un projet qui démontre parfaitement ma capacité à créer des interfaces modernes et engageantes pour le secteur tech, avec un design qui respecte les dernières tendances UX/UI."
  },
  {
    id: 3,
    title: "Cryosport - Site Vitrine Professionnel",
    client: "Cryosport",
    sector: "Santé & Bien-être",
    description: "Développement d'un site vitrine professionnel pour centre de cryothérapie avec présentation des services",
    results: {
      revenue: "Visibilité professionnelle",
      traffic: "SEO optimisé",
      conversion: "Présentation claire services",
      timeframe: "3 semaines"
    },
    img: "/p3.svg",
    technologies: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://cryosport.fr",
    testimonial: "Un site vitrine qui présente efficacement les services de cryothérapie avec un design professionnel et une navigation intuitive pour convertir les visiteurs en clients."
  },
  {
    id: 4,
    title: "Projets Techniques - Expertise Développement",
    client: "Projets Personnels",
    sector: "Développement Web",
    description: "Réalisation de projets techniques variés : reproduction Apple, mini-projets JavaScript, démonstrations techniques",
    results: {
      revenue: "Portfolio technique",
      traffic: "Démonstration compétences",
      conversion: "Preuves de savoir-faire",
      timeframe: "Continu"
    },
    img: "/p4.svg",
    technologies: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://applestyle.emericpetitgenet.com",
    testimonial: "Ces projets techniques démontrent ma maîtrise des technologies modernes et ma capacité à reproduire des designs complexes avec des animations avancées."
  }
];

// Témoignages clients détaillés
export const testimonials = [
  {
    quote: "Travailler avec Emeric a été une expérience positive. La refonte de mon vieux site web, la nouvelle stratégie SEO et l'intégration d'outil de réservation et paiement sécurisé en ligne ont permis d'augmenter le chiffre d'affaire de l'Auberge de plus de 18%. Je recommande Emeric pour vos projets web.",
    name: "Fabienne Falconnet",
    title: "Gérante Auberge du Midi",
    results: "+18% CA, +120% trafic",
    image: "/fabienne.png"
  },
  {
    quote: "Notre boutique en ligne stagnait malgré un bon produit. Emeric a complètement repensé notre tunnel de vente et mis en place une stratégie email marketing redoutable. Résultat : +150% de CA en 4 mois et un taux de conversion qui est passé de 1,2% à 3,8%.",
    name: "Sarah Mercier", 
    title: "Fondatrice StyleMode",
    results: "+150% CA, x3 conversion",
    image: "/fabienne2.png"
  },
  {
    quote: "En tant que médecin, je n'avais ni le temps ni les compétences pour m'occuper du digital. Emeric a créé notre site web, optimisé notre référencement local et mis en place la prise de RDV en ligne. 35% de nouveaux patients en 3 mois !",
    name: "Dr. Martin Dubois",
    title: "Médecin généraliste",
    results: "+35% nouveaux patients",
    image: "/fabienne3.png"
  }
];

// Process en 4 étapes
export const processSteps = [
  {
    id: 1,
    title: "Audit & Diagnostic",
    description: "Analyse complète de votre situation actuelle : site web, SEO, concurrence, opportunités",
    duration: "1 semaine",
    deliverables: ["Rapport d'audit détaillé", "Analyse concurrentielle", "Plan d'actions prioritaires"],
    icon: "/exp1.svg"
  },
  {
    id: 2, 
    title: "Stratégie Personnalisée",
    description: "Élaboration d'une stratégie digitale sur-mesure alignée avec vos objectifs business",
    duration: "1 semaine",
    deliverables: ["Stratégie digitale complète", "Planning de déploiement", "Budget détaillé"],
    icon: "/exp2.svg"
  },
  {
    id: 3,
    title: "Exécution & Développement", 
    description: "Mise en œuvre des solutions : développement, design, intégrations, paramétrage",
    duration: "2-6 semaines",
    deliverables: ["Site web fonctionnel", "Outils configurés", "Formation équipe"],
    icon: "/exp3.svg"
  },
  {
    id: 4,
    title: "Suivi & Optimisation",
    description: "Mesure des performances, optimisations continues et accompagnement long terme",
    duration: "En continu",
    deliverables: ["Reporting mensuel", "Optimisations", "Support technique"],
    icon: "/exp4.svg"
  }
];

// Anciens projets (gardé pour compatibilité)
export const projects = [
  {
    id: 1,
    title: "Replicate - Joue la comme Apple",
    des: "Reproduction de landing page avec design inspiré d'Apple",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://applestyle.emericpetitgenet.com",
  },
  {
    id: 2,
    title: "Brainwave - Nouveau Chatbot IA",
    des: "Reproduction de landing page pour nouvelle solution IA",
    img: "/mon-site-brainwave.jpg",
    iconLists: ["/vitejs.svg", "/tail.svg", "/ts.svg"],
    link: "https://brainwave.emericpetitgenet.com",
  },
  {
    id: 3,
    title: "20 mini-projets Vanilla JavaScript (en cours)",
    des: "Revoir les bases du JavaScript en réalisant 20 mini-projets (en cours)",
    img: "/20-minprojets-javascript.jpg",
    iconLists: ["/JS-removebg-preview.png"],
    link: "#",
  },
  {
    id: 4,
    title: "Premier jet - Service à  une amie",
    des: "Avant les framework, JavaScript et le CSS ... mon tout premier site web",
    img: "/mon-1ersite-wp.jpg",
    iconLists: ["/wordpress-icon.svg", "/stripe-2.svg"],
    link: "https://www.aubergedumidi.fr",
  },
];

// Partenaires et outils
export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite", 
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg", 
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

// Expertises (remplace workExperience)
export const expertise = [
  {
    id: 1,
    title: "Marketing Digital",
    desc: "Master Marketing Digital + 2 ans d'expérience e-santé. Stratégies SEO, SEM, email marketing orientées ROI.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Développement Web",
    desc: "Formation ingénieur développement 2 ans. Next.js, React, TypeScript, bases de données. Stack moderne et performante.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "UX/UI Design",
    desc: "Conception d'interfaces orientées conversion. Design systems, prototypage, tests utilisateurs.",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Conseil Stratégique",
    desc: "Accompagnement des entrepreneurs dans leur transformation digitale. Vision business + technique.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

// Ancienne workExperience (gardé pour compatibilité)
export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

// Réseaux sociaux
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/emericpetitgenet"
  },
  {
    id: 2,
    img: "/link.svg", 
    link: "https://linkedin.com/in/emericpetitgenet"
  },
  {
    id: 3,
    img: "/twit.svg",
    link: "https://twitter.com/emericpetitgenet"
  },
];

// Statistiques de performance
export const stats = [
  {
    id: 1,
    number: "25+",
    label: "Projets réalisés",
    description: "Sites web et stratégies digitales"
  },
  {
    id: 2,
    number: "150%",
    label: "ROI moyen clients",
    description: "Retour sur investissement digital"
  },
  {
    id: 3,
    number: "95%",
    label: "Clients satisfaits", 
    description: "Recommandent nos services"
  },
  {
    id: 4,
    number: "2M€+",
    label: "CA généré clients",
    description: "Chiffre d'affaires additionnel"
  }
];