// Sélectionner les éléments nécessaires
const image = document.querySelector('.image-au-dessus');
const startText = document.querySelector('.start-text');
const rectangle = document.querySelector('.rectangle');
const informationsRectangle = document.querySelectorAll('.informations-rectangle');
const commencerRectangle = document.querySelectorAll('.commencer-rectangle');
const souhaiteRectangle = document.querySelectorAll('.souhaite-rectangle');
const donnerRectangle = document.querySelectorAll('.donner-rectangle');
const prendreRectangle = document.querySelectorAll('.prendre-rectangle');
const retourcommencerRectangle = document.querySelectorAll('.retour-commencer-rectangle');
const retourinformationsRectangle = document.querySelectorAll('.retour-informations-rectangle');
const suivantPage1 = document.querySelectorAll('.suivant-page-1');
const pageinfo1rectangle = document.querySelectorAll('.page-info-1-rectangle');
const pageinfo2rectangle = document.querySelectorAll('.page-info-2-rectangle');
const retourPage2Rectangle = document.querySelectorAll('.retour-page-2-rectangle');
const suivantPage2 = document.querySelectorAll('.suivant-page-2');
const pageinfo3rectangle = document.querySelectorAll('.page-info-3-rectangle');
const retourPage3Rectangle = document.querySelectorAll('.retour-page-3-rectangle');
const suivantPage3 = document.querySelectorAll('.suivant-page-3');
const pageinfo4rectangle = document.querySelectorAll('.page-info-4-rectangle');
const retourPage4Rectangle = document.querySelectorAll('.retour-page-4-rectangle');
const suivantPage4 = document.querySelectorAll('.suivant-page-4');
const pageinfo5rectangle = document.querySelectorAll('.page-info-5-rectangle');
const retourPage5Rectangle = document.querySelectorAll('.retour-page-5-rectangle');
const suivantPage5 = document.querySelectorAll('.suivant-page-5');

// Variable pour vérifier si l'événement a déjà eu lieu
let isFirstClick = true;

// Attendre 2 secondes pour afficher le texte
setTimeout(() => {
    startText.classList.add('visible'); // Ajoute la classe pour permettre le clic
    document.body.style.pointerEvents = 'auto'; // Permet les clics sur la page
}, 2000); // 2 secondes après le début de l'animation du texte

// Ajouter un événement pour détecter un clic sur la page
document.body.addEventListener('click', function() {
    if (isFirstClick) { // Vérifie si c'est le premier clic
        // Masquer le texte "cliquer pour commencer"
        startText.style.display = 'none';

        // Ajouter la classe "moved-up" pour animer le déplacement du rectangle
        rectangle.classList.add('moved-up');

        setTimeout(() => {
            // Afficher les rectangles "Inscrire" et "Connecter"
            informationsRectangle.forEach(rect => rect.classList.add('visible'));
            commencerRectangle.forEach(rect => rect.classList.add('visible'));
            image.forEach(rect => rect.classList.remove('visible'));
        }, 500); // 1 seconde après le début de l'animation du rectangle

        // Une fois le clic effectué, on marque que l'événement a eu lieu
        isFirstClick = false;
    }
});

// Ajouter un événement de clic sur le rectangle "S'inscrire"
commencerRectangle.forEach(rect => {
    rect.addEventListener('click', function() {
        // Masquer les rectangles "S'inscrire" et "Se connecter" dès qu'ils sont cliqués
        informationsRectangle.forEach(r => r.classList.remove('visible'));
        commencerRectangle.forEach(r => r.classList.remove('visible'));  // Masque définitivement "Se connecter"

        // Ajouter un délai avant d'afficher les autres rectangles
        setTimeout(() => {
            // Afficher les autres rectangles
            souhaiteRectangle.forEach(r => r.classList.add('visible'));
            donnerRectangle.forEach(r => r.classList.add('visible'));
            prendreRectangle.forEach(r => r.classList.add('visible'));
            retourcommencerRectangle.forEach(r => r.classList.add('visible'));
        }, 500); // 1 seconde après le clic
    });
});

// Ajouter un événement de clic sur chaque rectangle "informationsRectangle"
informationsRectangle.forEach(rect => {
    rect.addEventListener('click', function() {
        // Ajouter un délai avant d'afficher les autres rectangles
        setTimeout(() => {
            // Afficher les autres rectangles
            pageinfo1rectangle.forEach(r => r.classList.add('visible'));
            suivantPage1.forEach(r => r.classList.add('visible'));
            retourinformationsRectangle.forEach(r => r.classList.add('visible'));
        }, 100); // 1 seconde après le clic
    });
});



// Ajouter un événement de clic sur le rectangle "S'inscrire"
retourcommencerRectangle.forEach(rect => {
    rect.addEventListener('click', function() {
        // Masquer les rectangles "S'inscrire" et "Se connecter" dès qu'ils sont cliqués
        souhaiteRectangle.forEach(r => r.classList.remove('visible'));
        donnerRectangle.forEach(r => r.classList.remove('visible'));  
        prendreRectangle.forEach(r => r.classList.remove('visible'));
        retourcommencerRectangle.forEach(r => r.classList.remove('visible'));  

        // Ajouter un délai avant d'afficher les autres rectangles
        setTimeout(() => {
            // Afficher les autres rectangles
            informationsRectangle.forEach(r => r.classList.add('visible'));
            commencerRectangle.forEach(r => r.classList.add('visible'));
        }, 100); // 1 seconde après le clic
    });
});

// Ajouter un événement de clic sur le rectangle "S'inscrire"
suivantPage1.forEach(rect => {
    rect.addEventListener('click', function() {
        // Masquer les rectangles "S'inscrire" et "Se connecter" dès qu'ils sont cliqués
        suivantPage1.forEach(r => r.classList.remove('visible'));
        retourinformationsRectangle.forEach(r => r.classList.remove('visible'));
        // Ajouter un délai avant d'afficher les autres rectangles
        setTimeout(() => {
            // Afficher les autres rectangles
            pageinfo2rectangle.forEach(r => r.classList.add('visible'));
            retourPage2Rectangle.forEach(r => r.classList.add('visible'));
            suivantPage2.forEach(r => r.classList.add('visible'));
        }, 100); // 1 seconde après le clic
    });
});

// Ajouter un événement de clic sur le rectangle "S'inscrire"
retourinformationsRectangle.forEach(rect => {
    rect.addEventListener('click', function() {
        // Masquer les rectangles "S'inscrire" et "Se connecter" dès qu'ils sont cliqués
        pageinfo1rectangle.forEach(r => r.classList.remove('visible'));
        suivantPage1.forEach(r => r.classList.remove('visible'));
        retourinformationsRectangle.forEach(r => r.classList.remove('visible'));
        // Ajouter un délai avant d'afficher les autres rectangles
        setTimeout(() => {
            // Afficher les autres rectangles
            commencerRectangle.forEach(r => r.classList.add('visible'));
        }, 100); // 1 seconde après le clic
    });
});

// Ajouter un événement de clic sur le rectangle "S'inscrire"
retourPage2Rectangle.forEach(rect => {
    rect.addEventListener('click', function() {
        // Masquer les rectangles "S'inscrire" et "Se connecter" dès qu'ils sont cliqués
        retourPage2Rectangle.forEach(r => r.classList.remove('visible'));
        suivantPage2.forEach(r => r.classList.remove('visible'));
        pageinfo2rectangle.forEach(r => r.classList.remove('visible'));
        // Ajouter un délai avant d'afficher les autres rectangles
        setTimeout(() => {
            // Afficher les autres rectangles
            pageinfo1rectangle.forEach(r => r.classList.add('visible'));
            suivantPage1.forEach(r => r.classList.add('visible'));
            retourinformationsRectangle.forEach(r => r.classList.add('visible'));
        }, 100); // 1 seconde après le clic
    });
});

// Ajouter un événement de clic sur le rectangle "S'inscrire"
suivantPage2.forEach(rect => {
    rect.addEventListener('click', function() {
        // Masquer les rectangles "S'inscrire" et "Se connecter" dès qu'ils sont cliqués
        suivantPage2.forEach(r => r.classList.remove('visible'));
        retourPage2Rectangle.forEach(r => r.classList.remove('visible'));
        // Ajouter un délai avant d'afficher les autres rectangles
        setTimeout(() => {
            // Afficher les autres rectangles
            pageinfo3rectangle.forEach(r => r.classList.add('visible'));
            retourPage3Rectangle.forEach(r => r.classList.add('visible'));
            suivantPage3.forEach(r => r.classList.add('visible'));
        }, 100); // 1 seconde après le clic
    });
});

// Ajouter un événement de clic sur le rectangle "S'inscrire"
retourPage3Rectangle.forEach(rect => {
    rect.addEventListener('click', function() {
        // Masquer les rectangles "S'inscrire" et "Se connecter" dès qu'ils sont cliqués
        retourPage3Rectangle.forEach(r => r.classList.remove('visible'));
        suivantPage3.forEach(r => r.classList.remove('visible'));
        pageinfo3rectangle.forEach(r => r.classList.remove('visible'));
        // Ajouter un délai avant d'afficher les autres rectangles
        setTimeout(() => {
            // Afficher les autres rectangles
            pageinfo2rectangle.forEach(r => r.classList.add('visible'));
            suivantPage2.forEach(r => r.classList.add('visible'));
            retourPage2Rectangle.forEach(r => r.classList.add('visible'));
        }, 100); // 1 seconde après le clic
    });
});

// Ajouter un événement de clic sur le rectangle "S'inscrire"
suivantPage3.forEach(rect => {
    rect.addEventListener('click', function() {
        // Masquer les rectangles "S'inscrire" et "Se connecter" dès qu'ils sont cliqués
        suivantPage3.forEach(r => r.classList.remove('visible'));
        retourPage3Rectangle.forEach(r => r.classList.remove('visible'));
        // Ajouter un délai avant d'afficher les autres rectangles
        setTimeout(() => {
            // Afficher les autres rectangles
            pageinfo4rectangle.forEach(r => r.classList.add('visible'));
            retourPage4Rectangle.forEach(r => r.classList.add('visible'));
            suivantPage4.forEach(r => r.classList.add('visible'));
        }, 100); // 1 seconde après le clic
    });
});

// Ajouter un événement de clic sur le rectangle "S'inscrire"
retourPage4Rectangle.forEach(rect => {
    rect.addEventListener('click', function() {
        // Masquer les rectangles "S'inscrire" et "Se connecter" dès qu'ils sont cliqués
        retourPage4Rectangle.forEach(r => r.classList.remove('visible'));
        suivantPage4.forEach(r => r.classList.remove('visible'));
        pageinfo4rectangle.forEach(r => r.classList.remove('visible'));
        // Ajouter un délai avant d'afficher les autres rectangles
        setTimeout(() => {
            // Afficher les autres rectangles
            pageinfo3rectangle.forEach(r => r.classList.add('visible'));
            suivantPage3.forEach(r => r.classList.add('visible'));
            retourPage3Rectangle.forEach(r => r.classList.add('visible'));
        }, 100); // 1 seconde après le clic
    });
});

// Ajouter un événement de clic sur le rectangle "S'inscrire"
suivantPage4.forEach(rect => {
    rect.addEventListener('click', function() {
        // Masquer les rectangles "S'inscrire" et "Se connecter" dès qu'ils sont cliqués
        retourPage4Rectangle.forEach(r => r.classList.remove('visible'));
        suivantPage4.forEach(r => r.classList.remove('visible'));
        // Ajouter un délai avant d'afficher les autres rectangles
        setTimeout(() => {
            // Afficher les autres rectangles
            pageinfo5rectangle.forEach(r => r.classList.add('visible'));
            retourPage5Rectangle.forEach(r => r.classList.add('visible'));
            suivantPage5.forEach(r => r.classList.add('visible'));
        }, 100); // 1 seconde après le clic
    });
});

// Ajouter un événement de clic sur le rectangle "S'inscrire"
retourPage5Rectangle.forEach(rect => {
    rect.addEventListener('click', function() {
        // Masquer les rectangles "S'inscrire" et "Se connecter" dès qu'ils sont cliqués
        retourPage5Rectangle.forEach(r => r.classList.remove('visible'));
        suivantPage5.forEach(r => r.classList.remove('visible'));
        pageinfo5rectangle.forEach(r => r.classList.remove('visible'));
        // Ajouter un délai avant d'afficher les autres rectangles
        setTimeout(() => {
            // Afficher les autres rectangles
            pageinfo4rectangle.forEach(r => r.classList.add('visible'));
            suivantPage4.forEach(r => r.classList.add('visible'));
            retourPage4Rectangle.forEach(r => r.classList.add('visible'));
        }, 100); // 1 seconde après le clic
    });
});

// Ajouter un événement de clic sur le rectangle "S'inscrire"
suivantPage5.forEach(rect => {
    rect.addEventListener('click', function() {
        // Masquer les rectangles "S'inscrire" et "Se connecter" dès qu'ils sont cliqués
        retourPage5Rectangle.forEach(r => r.classList.remove('visible'));
        suivantPage5.forEach(r => r.classList.remove('visible'));
        pageinfo5rectangle.forEach(r => r.classList.remove('visible'));
        pageinfo4rectangle.forEach(r => r.classList.remove('visible'));
        pageinfo3rectangle.forEach(r => r.classList.remove('visible'));
        pageinfo2rectangle.forEach(r => r.classList.remove('visible'));
        pageinfo1rectangle.forEach(r => r.classList.remove('visible'));
        informationsRectangle.forEach(r => r.classList.remove('visible'));
        commencerRectangle.forEach(r => r.classList.remove('visible'));
        // Ajouter un délai avant d'afficher les autres rectangles
        setTimeout(() => {
            // Afficher les autres rectangles
            souhaiteRectangle.forEach(r => r.classList.add('visible'));
            donnerRectangle.forEach(r => r.classList.add('visible'));
            prendreRectangle.forEach(r => r.classList.add('visible'));
            retourcommencerRectangle.forEach(r => r.classList.add('visible'));
        }, 500); // 1 seconde après le clic
    });
});

// Fonction pour changer la couleur du fond
function changerFondCouleur(couleur) {
    document.body.style.backgroundColor = couleur;
}

// Ajouter des événements de survol pour les rectangles "donner" et "prendre"
donnerRectangle.forEach(rect => {
    rect.addEventListener('mouseover', function() {
        changerFondCouleur('#f5be49'); // Changez cette couleur pour ce que vous préférez
    });
    rect.addEventListener('mouseout', function() {
        changerFondCouleur('#d9d9d9'); // Réinitialise la couleur de fond par défaut
    });
});

// Ajouter des événements de survol pour les rectangles "inscrire" et "connecter"
informationsRectangle.forEach(rect => {
    rect.addEventListener('mouseover', function() {
        changerFondCouleur('#f5be49'); // Changez cette couleur pour ce que vous préférez
    });
    rect.addEventListener('mouseout', function() {
        changerFondCouleur('#d9d9d9'); // Réinitialise la couleur de fond par défaut
    });
});

prendreRectangle.forEach(rect => {
    rect.addEventListener('mouseover', function() {
        changerFondCouleur('#5271ff'); // Changez cette couleur pour ce que vous préférez
    });
    rect.addEventListener('mouseout', function() {
        changerFondCouleur('#d9d9d9'); // Réinitialise la couleur de fond par défaut
    });
});

commencerRectangle.forEach(rect => {
    rect.addEventListener('mouseover', function() {
        changerFondCouleur('#5271ff'); // Changez cette couleur pour ce que vous préférez
    });
    rect.addEventListener('mouseout', function() {
        changerFondCouleur('#d9d9d9'); // Réinitialise la couleur de fond par défaut
    });
});
