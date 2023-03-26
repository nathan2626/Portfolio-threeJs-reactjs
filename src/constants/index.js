import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    vuejs,
    html,
    css,
    reactjs,
    laravel,
    tailwind,
    nodejs,
    ionic,
    php,
    figma,
    docker,
    bokertov,
    capf,
    levcrea,
    yellow,
    wordpress,
    chatapp,
    influencenow,
    levcreaImage,
} from "../assets";
  
export const navLinks = [
    {
      id: "about",
      title: "Présentation",
    },
    {
      id: "work",
      title: "Réalisations",
    },
    {
      id: "contact",
      title: "Contact",
    },
];
  
const services = [
    {
      title: "Développeur Web",
      icon: web,
    },
    {
      title: "Développeur mobile",
      icon: mobile,
    },
    {
      title: "UX et UI Design",
      icon: backend,
    },
    {
      title: "Référencement naturel SEO",
      icon: creator,
    },
];
  
const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Php",
      icon: php,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
    {
      name: "Vue JS",
      icon: vuejs,
    },
    {
      name: "ionic",
      icon: ionic,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
];
  
const experiences = [
    {
      title: "Co-Fondateur de Boker Tov Agency",
      company_name: "Boker Tov Agency",
      icon: bokertov,
      iconBg: "#E6DEDD",
      date: "Octobre 2020 - Janvier 2023",
      points: [
        "Proposer des services sur mesure aux clients pour répondre à leurs besoins en matière de marketing, de conception web et de développement.",
        "Gestion de la relation client permettant de renforcer les liens avec les clients en répondant à leurs besoins en assurant une communication fluide.",
        "Différentes formations données sur les fondammentaux du développement web.",
      ],
    },
    {
      title: "Full-stack & formation",
      company_name: "CAPF Formations",
      icon: capf,
      iconBg: "#383E56",
      date: "Juillet 2021 - Septembre 2022 - freelance",
      points: [
        "Création d'un CRM interne sur mesure pour optimiser la gestion des relations clients et prospects de l'entreprise.",
        "Développement d'un site web personnalisé en transformant les maquettes fournies en une interface fonctionnelle et attrayante",
        "Maintenance du site web et du CRM.",
        "Formation donnée couvrant les fondamentaux du développement informatique (HTML, CSS, PHP, JS), l'UX Design et le SEO pour une approche complète de la création web.",
      ],
    },
    {
      title: "Front-end",
      company_name: "Yellow Serrures",
      icon: yellow,
      iconBg: "#fff",
      date: "Décembre 2021 - Janvier 2022 - freelance",
      points: [
        "Création d'un site vitrine multi-pages intégrant une connexion entre les formulaires et un CRM.",
        "Optimisation du référencement naturel (SEO) pour chacune des pages du site, améliorant ainsi sa visibilité sur les moteurs de recherche.",
      ],
    },
    {
      title: "WordPress & formation",
      company_name: "LévCréa Paris",
      icon: levcrea,
      iconBg: "#E6DEDD",
      date: "Juin 2021 - freelance",
      points: [
        "Création d'un site e-commerce sur mesure avec Woocommerce.",
        "Formation donnée à l'entreprise pour être autonome dans la modification et la maintenance du site E-commerce.",
      ],
    },
];
  
const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];
  
const projects = [
    {
      name: "Influence Now",
      description:
        "Création d'un site vitrine pour l'entreprise InfluenceNow ! Animations, Popup et génération de pages.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "green-text-gradient",
        },
        {
          name: "Ionos",
          color: "pink-text-gradient",
        },
      ],
      image: influencenow,
      source_code_link: "https://influencenow.fr",
    },
    {
      name: "Application de live chat",
      description:
        "Application web offrant aux utilisateurs la possibilité de rechercher d'autres personnes pour échanger avec elles en temps réel, partager des images et vidéos, et créer des groupes de discussion pour faciliter les interactions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ChatEngine.io",
          color: "green-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/nathan2626/chat-app-reactJs",
    },
    {
      name: "Lév Créa Paris",
      description:
        "Création d'un site E-commerce pour l'entreprise LévCréa Paris. Mailing, relance automatique et connexion avec Google Sheet.",
      tags: [
        {
          name: "woocommerce",
          color: "blue-text-gradient",
        },
        {
          name: "mailing",
          color: "green-text-gradient",
        },
        {
          name: "OVH",
          color: "pink-text-gradient",
        },
      ],
      image: levcreaImage,
      source_code_link: "https://levcreaparis.com",
    },
];
  
export { services, technologies, experiences, testimonials, projects };