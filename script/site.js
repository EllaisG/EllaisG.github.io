// Liste des événements
const events = [
  {
      year: "Novembre 2023",
      title: "Jeu de Wythoff",
      description: "Jeu codé en Java et en Python. De plus, Il inclus un jeu humain-humain et humain-ordinateur.",
      image: "../document/Jeu_De_Wythoff.jpg",
  },
  {
      year: "Octobre 2023 & Octobre 2024",
      title: "SportTrack",
      description: "Réalisation d’un site web de suivi de sport, en Octobre 2023 il y a eu le codage des pages (html/css) puis en Octobre 2024, création du site web en php puis en javascript en réutilisant les pages précédemment réalisées.",
      image: "../document/Sporttrack.png",
  },
  {
      year: "Janvier-Juin 2024",
      title: "Commune Bretonne",
      description: "Réalisation d'une application sur les communes bretonnes, cette application présente les facteurs d'attractivité d'une commune, notamment son nombre d'habitant, si elle possède un aéroport, etc... ",
      image: "../document/commune_bretonne.jpg",
  },
  {
      year: "Septembre 2024 - Janvier 2025",
      title: "Building Devis",
      description: "Réalisation d'une application (site web, android et IOS) de prise de rendez-vous d'artisans à proximité, codé en Node.js (back-end), Ionic (front-end) et PostGreSQL (base de donnée). Toujours en cours de réalisation",
      image: "../document/building_devis.png",
  },
  {
      year: "Novembre 2024",
      title: "Portfolio personnel",
      description: "J'ai lancé mon projet de portfolio personnel pour présenter mes compétences et projets.",
      image: "../document/favicon.png",
  },
];

let currentIndex = 0; // Suivi de l'événement actif

function updateTimeline(direction) {
    // Vérifier si on atteint les limites
    if ((currentIndex === 0 && direction === -1) || (currentIndex === events.length - 1 && direction === 1)) {
        // Ne rien faire si on est au début ou à la fin
        return;
    }

    // Mettre à jour l'index de l'événement actif
    currentIndex += direction;

    // Gérer l'élément sélectionné dans la timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => item.classList.remove('selected')); // Retirer la classe 'selected' de tous les événements

    // Ajouter la classe 'selected' à l'événement actuel
    const selectedItem = timelineItems[currentIndex];
    selectedItem.classList.add('selected');

    // Faire défiler la timeline pour centrer l'élément sélectionné
    const timeline = document.querySelector('.timeline');
    const itemWidth = selectedItem.offsetWidth;
    const timelineWidth = timeline.offsetWidth;
    const offset = selectedItem.offsetLeft + itemWidth / 2 - timelineWidth / 2;

    timeline.scrollTo({
        left: offset,
        behavior: 'smooth'
    });

    // Mettre à jour les détails de l'événement
    const event = events[currentIndex];
    const detailsContainer = document.getElementById("event-details");
    detailsContainer.innerHTML = `
        <h3>${event.year}: ${event.title}</h3>
        <p>${event.description}</p>
    `;

    // Mettre à jour l'image de l'événement
    const imageElement = document.querySelector("#event-details-container img");
    imageElement.src = event.image;
}

// Initialisation : afficher les détails du premier événement
updateTimeline(0);
