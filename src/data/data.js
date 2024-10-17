// data.js
import Ohmyfood from "/images/ohmyfood.webp";
import Booki from "/images/booki.webp";
import Sophiebluel from "/images/sophiebluel.webp";
import Kasa from "/images/kaza.webp";
import Event724 from "/images/724events.webp";
import Ninacarducci from "/images/nina.carducci.webp";
import Argentbank from "/images/argentbank.webp";
import Printit from "/images/Print-It.webp";
import Menumaker from "/images/menumaker.webp";

export const portfolio = [
  {
    id: 0,
    title: "Menu Maker by Qwenta",
    image: Menumaker,
    description: "Outil en ligne pour créer et publier des menus.",
    context:
      "Vous êtes développeur front-end au sein de l’agence Webgencia. Votre client Qwenta souhaite faire développer un “Menu Maker” : un site permettant aux restaurateurs d’afficher et de mettre en page leurs menus facilement, en quelques clics. ",
    challenge:
      "Ce projet vous implique dans la planification du développement d'un site web. Votre rôle consistera à planifier le développement du site web, sans intervenir directement dans le codage. Vous aurez accès à la maquette, aux spécifications fonctionnelles et aux User Stories du site.Vous entreprendrez une veille technologique pour rester informé des dernières tendances et technologies pertinentes pour le projet. Cela implique l'utilisation d'un système de veille pour suivre les évolutions dans le domaine du développement web.Vous serez chargé de rédiger les spécifications techniques du projet. Cela comprendra l'identification des besoins fonctionnels et la décomposition des fonctionnalités en tâches spécifiques.Vous utiliserez un outil de gestion de projet, comme Notion, pour organiser le projet et créer un tableau Kanban. Cela vous aidera à suivre le déroulement du projet de manière structurée et efficace.Enfin, vous présenterez la solution technique.",
    technologies: ["Gestion de projet"],
  },
  {
    id: 1,
    title: "Argent Bank",
    image: Argentbank,
    description: "Application bancaire en ligne.",
    context:
      "Vous venez d’intégrer Argent Bank comme développeur front-end.Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire.",
    challenge:
      "Dans ce projet, vous travaillerez sur le développement front-end d’une application bancaire en utilisant React et Redux pour créer une expérience utilisateur dynamique et réactive.Votre mission principale sera d'intégrer le front-end avec le back-end via des appels API.Vous écrirez des appels à l'API REST pour connecter les deux parties de l'application, assurant une communication fluide entre le client et le serveur.Vous utiliserez React pour développer l'interface utilisateur de l'application bancaire, en vous concentrant sur la création d'un tableau de bord complet et responsive pour les utilisateurs. Redux sera utilisé pour gérer les données de l'application. Cela vous permettra de maintenir un état global cohérent à travers l'application.Pour définir les points d'accès de l'API et modéliser les interactions avec les données des transactions, vous utiliserez Swagger. Cet outil vous aidera à décrire les différentes routes et actions nécessaires pour l'API.Vous utiliserez Node.js pour exécuter le code JavaScript côté serveur. Cela vous donnera une expérience pratique de la gestion d'une application full-stack.",

    github: "https://github.com/9junko9/P9-724Events",

    technologies: ["React"],
  },

  {
    id: 2,
    title: "724 Events",
    image: Event724,
    description: "Agence d'évenementiels.",
    context:
      "L’agence 724events souhaite publier la nouvelle version de son site vitrine. Il s’agit d’un site one-page. Le design a été validé, et un premier développeur freelance a commencé l’intégration il y a quelques semaines. Malheureusement, ce freelance a dû abandonner le projet pour raisons personnelles. Le site est fonctionnel, mais quelques bugs entravent le bon usage par les visiteurs. 724events fait donc appel à vous pour finaliser le travail.",
    challenge:
      "Votre premier objectif sera d'examiner le code existant. Vous utiliserez les Chrome DevTools pour identifier et comprendre les problèmes et bugs signalés dans le site web actuel.Après avoir identifié les problèmes, vous serez chargé de résoudre ces bugs et problèmes.Cela impliquera l'utilisation de vos compétences en JavaScript, ainsi que des outils spécifiques à React, comme React Developer Tools.Vous devrez également compléter le cahier de recette. Ce document détaillera tous les scénarios de test nécessaires pour vérifier le bon fonctionnement du site, incluant des tests unitaires et fonctionnels.Pour la gestion du projet, vous utiliserez Yarn comme gestionnaire de packages et Node.js pour exécuter du code JavaScript côté serveur. Ces outils vous aideront à gérer les dépendances et à exécuter des tests localement.",
    github: "https://github.com/9junko9/P9-724Events",
    link: "hhttps://p9-724-events.vercel.app/",
    technologies: ["html", "css", "javascript"],
  },
  {
    id: 3,
    title: "Nina Carducci",
    image: Ninacarducci,
    description: "Portfolio en ligne de la photographe, Nina Carducci.",
    context:
      "Vous êtes développeur freelance et vous décidez de proposer vos services d’optimisation SEO à de nouveaux clients. ",
    challenge:
      "Dans ce projet, vous travaillerez en tant que développeur freelance pour optimiser le référencement d’un site, en améliorant sa performance et son accessibilité.Votre première tâche sera d'identifier les problèmes de chargement et de référencement. Vous proposerez ensuite des recommandations pour améliorer la vitesse de chargement, la structure du code, et le référencement. Vous appliquerez les améliorations qui ont été proposées en modifiant le code du site.Votre objectif sera d'améliorer les performances et l'accessibilité du site pour un meilleur référencement sur les moteurs de recherche.Vous utiliserez des outils tels que Lighthouse et Wave.Enfin, vous créerez un rapport illustrant les résultats avant et après les modifications. Ce rapport comprendra des captures d'écran des audits, ainsi que des explications sur les changements apportés et leur impact sur le référencement et l'accessibilité du site.",
    github: "https://github.com/9junko9/P8-Nina-Carducci",
    link: "https://9junko9.github.io/P8-Nina-Carducci/",
    technologies: ["html", "css", "javascript"],
  },
  {
    id: 4,
    title: "Kasa",
    image: Kasa,
    description: "Site de location d'appartements.",
    context:
      "Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. ",
    challenge:
      "Dans ce projet, vous allez implémenter le front-end d’une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive.Vous travaillerez sur la logique de présentation des données et les composants React, une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur.Vous utiliserez React Router pour configurer la navigation entre les différentes pages de l'application. Cela vous permettra de comprendre comment gérer efficacement le routage dans une application web moderne.Le projet se concentrera exclusivement sur le développement front-end, en se basant sur les maquettes fournies et en utilisant des données simulées extraites d'un fichier JSON.Vous utiliserez également Node.js pour exécuter du code JavaScript en dehors du navigateur.",

    github: "https://github.com/9junko9/P7-Kasa",
    link: "https://p7-kasa-theta.vercel.app/",
    technologies: ["react", "html", "sass"],
  },
  {
    id: 5,
    title: "Sophie Bluel",
    image: Sophiebluel,
    description: "Portfolio de Sophie Bluel, architècte.",
    context:
      "Vous travaillez comme développeur front-end pour l’agence ArchiWebos qui comprend 50 salariés. Ayant terminé votre dernier projet avec un peu d'avance, vous êtes envoyé en renfort comme développeur front-end d’une équipe qui travaille sur la conception du site portfolio d’une architecte d’intérieur.",
    challenge:
      "Ce projet vous engage à créer une page web dynamique pour le site internet d'une architecte d'intérieur en utilisant JavaScript et en communiquant avec une API.Vous travaillerez sur la partie Front-End du site, où vous développerez la page de présentation des travaux de l'architecte à partir du HTML fourni. Cela impliquera la gestion des événements utilisateurs et la manipulation des éléments du DOM avec JavaScript.Vous créerez également une page de connexion pour l'administrateur du site ainsi qu'une modale permettant d'uploader de nouveaux médias. Ces éléments seront développés from scratch, vous offrant l'opportunité de mettre en pratique vos compétences en JavaScript de manière approfondie.Pour la première fois, vous aurez accès à un code back-end pour tester les fonctionnalités. Vous apprendrez à communiquer avec une API, ce qui est crucial pour les applications web modernes.Vous utiliserez Figma pour accéder aux maquettes, Visual Studio Code pour le développement, et GitHub pour la gestion de version de votre projet.",
    github: "https://github.com/9junko9/P6-Sophie-Bluel",
    link: "https://p6-sophie-bluel-blue.vercel.app/",
    technologies: ["javascript", "html", "css"],
  },
  {
    id: 6,
    title: "Print-it !",
    image: Printit,
    description: "Site de l'imprimerie familiale : Print-it !",
    context:
      "Vous débutez comme développeur front-end en freelance, et venez de décrocher une offre pour dynamiser le site Internet statique d’une petite imprimerie familiale nommée Print it !",
    challenge:
      "Ce projet vous initiera au langage JavaScript en vous chargeant de dynamiser le site internet statique d'une imprimerie en y ajoutant un carrousel interactif.Vous commencerez par explorer les fondamentaux de JavaScript, un langage de programmation clé pour le développement web interactif. Vous apprendrez à rendre un site web plus dynamique et engageant en intégrant des fonctionnalités interactives telles qu'un carrousel.Votre tâche consistera à mettre à jour le code HTML existant et à ajouter un carrousel en JavaScript.",
    github: "https://github.com/9junko9/P5-Print-it-OCR",
    link: "https://9junko9.github.io/P5-Print-it-OCR/",
    technologies: ["javascript", "html", "css", "sass"],
  },
  {
    id: 7,
    title: "Oh My Food",
    image: Ohmyfood,
    description: "Application pour la plateforme Oh My Food",
    context:
      "Votre mission est de développer un site mobile first qui répertorie les menus de restaurants gastronomiques",
    challenge:
      "Ce projet vous amène à travailler sur l'interface mobile-first du site d’une start-up. Vous utiliserez Sass, implémenterez des animations CSS et versionnerez votre projet avec Git et GitHub.tre tâche principale sera d'intégrer une maquette en mobile-first. Vous disposerez des maquettes pour mobile et desktop, du prototype sur Figma, ainsi que des images et textes nécessaires. Cette approche mobile-first vous permettra de comprendre l'importance de concevoir des sites web adaptatifs et réactifs.Vous apprendrez à mettre en œuvre des animations CSS pour enrichir l'expérience utilisateur du site. Ces animations donneront vie à l'interface et rendront la navigation plus interactive et engageante.L'utilisation de SASS, un pré-processeur CSS, sera essentielle pour étendre les fonctionnalités de base du CSS. Cela vous aidera à écrire des styles plus organisés et maintenables.Enfin, vous versionnerez votre projet avec Git et GitHub, vous familiarisant ainsi avec ces outils essentiels pour la gestion et la collaboration sur des projets de développement web.",
    github: "https://github.com/9junko9/P4-Oh-My-Food",
    link: "https://9junko9.github.io/P4-Oh-My-Food/",
    technologies: ["html", "css", "sass"],
  },
  {
    id: 8,
    title: "Booki",
    image: Booki,
    description:
      "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
    context:
      "L'entreprise Booki souhaite développer un site internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. J'ai été chargée d'intégrer l'interface du site avec du code HTML et CSS.",
    challenge:
      "Dans ce projet, vous créerez la page d'accueil d'une agence de voyage en utilisant HTML et CSS. Votre mission principale sera d'intégrer l'interface responsive de leur site. Vous aurez à disposition les maquettes Figma pour mobile, tablette et desktop, ainsi que les images et une note de synthèse sur les spécificités du projet.us serez amenez à créer vos propres composants d'interface avec HTML et CSS afin d'avoir un rendu correspondant à la maquetteCela vous donnera une compréhension plus profonde de la manière dont le code est structuré et stylisé pour répondre aux exigences de design.En travaillant sur ce projet, vous développerez des compétences essentielles en design responsive, assurant que la page d'accueil fonctionne bien sur tous les appareils et tailles d'écran.",
    github: "https://github.com/9junko9/P3-Booki",
    link: "https://9junko9.github.io/P3-Booki/",
    technologies: ["html", "css"],
  },
];

export default portfolio; //
