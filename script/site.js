// Données des projets
const projects = {
  wythoff: {
    title: "Jeu de Wythoff",
    date: "Novembre 2023",
    description: "Mon premier jeu codé en Java et Python.",
    outil: "Outils : Java, Python",
    image: "../document/Jeu_De_Wythoff.jpg",
    link: "https://gitlab.com/but614141/jeu-de-wythoff"
  },
  sporttrack: {
    title: "SportTrack",
    date: "Octobre 2023 & Octobre 2024",
    description: "Réalisation d'un site web de suivi de sport. En Octobre 2023, codage des pages (HTML/CSS), puis en Octobre 2024, création du site web en PHP puis en JavaScript en réutilisant les pages précédemment réalisées.",
    outil: "Outils : HTML, CSS, PHP, Javascript",
    image: "../document/Sporttrack.png",
    link: "https://gitlab.com/but614141/sporttrack"
  },
  commune: {
    title: "Commune Bretonne",
    date: "Janvier-Juin 2024",
    description: "Réalisation d'une application sur les communes bretonnes. Cette application présente les facteurs d'attractivité d'une commune, notamment son nombre d'habitants, si elle possède un aéroport, etc.",
    outil: "Outils : Java, JavaFX, MySQL",
    image: "../document/commune_bretonne.jpg",
    link: "https://gitlab.com/but614141/commune-bretonne"
  },
  building: {
    title: "Building Devis",
    date: "Septembre 2024 - Janvier 2025",
    description: "Réalisation d'une application (site web, Android et iOS) de prise de rendez-vous d'artisans à proximité, codée en Node.js (back-end), Ionic (front-end) et PostgreSQL (base de données). Mise en production en mai 2025 et arrêté en juillet 2025.",
    outil: "Outils : PostgreSQL, Node.js, Ionic avec Vue.js, Gitlab",
    image: "../document/building_devis.png",
    link: "https://gitlab.com/but614141/building-devis"
  },
  portfolio: {
    title: "Portfolio",
    date: "Novembre 2024",
    description: "J'ai lancé mon projet de portfolio personnel pour présenter mes compétences et projets.",
    outil: "Outils : HTML, CSS, Javascript, GitHub",
    image: "../document/favicon.png",
    link: "https://github.com/EllaisG/EllaisG.github.io"
  }
};

// Gestion du modal
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.querySelector('.close');
  const projectCards = document.querySelectorAll('.project-card');
  
  // Ouvre le modal au clic sur un projet
  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project');
      const project = projects[projectId];
      
      document.getElementById('modal-body').innerHTML = `
        <h2>${project.title}</h2>
        <p><img src=${project.image} class="Image-projet">
        <p><strong>${project.date}</strong></p>
        <p>${project.description}</p>
        <p>${project.outil}</p>
        <p><a href="${project.link}" target="_blank" rel="noopener noreferrer">→ Voir plus sur GitLab</a></p>
      `;
      
      modal.style.display = 'block';
    });
  });
  
  // Ferme le modal
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
