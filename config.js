// Configuration de l'événement - Personnalisez ces informations
const eventConfig = {
    // Informations sur l'événement
    eventName: "Journée de la Créativité Emigoise",
    eventDate: "Samedi 14 Fevier 2026", // Exemple: "15 Décembre 2024"
    eventTime: "20h30", // Exemple: "09h00 - 17h00"
    eventLocation: "Ecole des Mines de L'industrie Et de la Geologie(EMIG)", // Exemple: "Campus Principal, Salle de Conférence"
    eventFullAddress: "Adresse complète à définir",
    
    // Informations de contact
    contactEmail: "seydou...abdoulaziz@gmail.com",
    contactPhone: "+227 87 55 59 88",
    contactAddress: "Harobanda,Emig Niamey-Niger",
    
    // Organisateurs
    organisateurs: "Comité d'organisation de la Journée de la Créativité Emigoise",
    
    // Description de l'événement
    eventDescription: "Un espace dédié à l'innovation, au leadership et à la créativité de la communauté emigoise",
    
    // Objectif de l'événement
    eventObjective: "Promouvoir l'innovation et la créativité au sein de la communauté emigoise en offrant une plateforme d'échange et de partage d'idées.",
    
    // Programme
    eventProgram: "Présentations, ateliers créatifs, expositions de projets innovants et moments d'échange entre participants.",
    
    // Liens sociaux (laissez "#" si non disponibles)
    socialLinks: {
        facebook: "https://www.linkedin.com/in/seydou-dangande-abdoul-aziz",
        twitter: "https://www.linkedin.com/in/seydou-dangande-abdoul-aziz",
        instagram: "https://www.linkedin.com/in/seydou-dangande-abdoul-aziz",
        linkedin: "https://www.linkedin.com/in/seydou-dangande-abdoul-aziz"
    },
    
    // Couleurs personnalisées (optionnel - pour personnalisation avancée)
    colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#ec4899"
    },
    
    // Configuration administrateur - CHANGEZ CE MOT DE PASSE !
    admin: {
        password: "admin123" // ⚠️ CHANGEZ CE MOT DE PASSE pour votre sécurité !
    }
};

// Fonction pour initialiser la configuration
function initializeEventConfig() {
    // Date de l'événement
    const eventDateElement = document.getElementById('eventDate');
    if (eventDateElement) {
        eventDateElement.textContent = eventConfig.eventDate;
    }
    
    // Détails de l'événement
    const eventDetailsElement = document.getElementById('eventDetails');
    if (eventDetailsElement) {
        eventDetailsElement.innerHTML = `
            <strong>Date :</strong> ${eventConfig.eventDate}<br>
            <strong>Lieu :</strong> ${eventConfig.eventLocation}<br>
            <strong>Heure :</strong> ${eventConfig.eventTime}
        `;
    }
    
    // Organisateurs
    const organisateursElement = document.getElementById('organisateurs');
    if (organisateursElement) {
        organisateursElement.textContent = eventConfig.organisateurs;
    }
    
    // Contact
    const contactEmailElement = document.getElementById('contactEmail');
    if (contactEmailElement) {
        contactEmailElement.textContent = eventConfig.contactEmail;
    }
    
    const contactPhoneElement = document.getElementById('contactPhone');
    if (contactPhoneElement) {
        contactPhoneElement.textContent = eventConfig.contactPhone;
    }
    
    const contactAddressElement = document.getElementById('contactAddress');
    if (contactAddressElement) {
        contactAddressElement.textContent = eventConfig.contactAddress;
    }
    
    // Liens sociaux
    const socialLinks = document.querySelectorAll('.social-links a');
    if (socialLinks.length >= 4) {
        socialLinks[0].href = eventConfig.socialLinks.facebook;
        socialLinks[1].href = eventConfig.socialLinks.twitter;
        socialLinks[2].href = eventConfig.socialLinks.instagram;
        socialLinks[3].href = eventConfig.socialLinks.linkedin;
    }
}

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEventConfig);
} else {
    initializeEventConfig();
}

