// Gestion des données
let ideas = JSON.parse(localStorage.getItem('creativiteIdees')) || [];

// Vérifier si l'administrateur est connecté
function isAdminLoggedIn() {
    return localStorage.getItem('adminLoggedIn') === 'true';
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    checkAdminStatus();
});

function initializeApp() {
    setupEventListeners();
    loadIdeas();
    setupMobileMenu();
    setupAdminAuth();
}

// Configuration de l'authentification admin
function setupAdminAuth() {
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');
    const adminModal = document.getElementById('adminModal');
    const adminLoginForm = document.getElementById('adminLoginForm');
    
    if (!adminModal || !adminLoginForm) return;
    
    const closeAdminModal = adminModal.querySelector('.close-modal');

    // Ouvrir la modal de connexion
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', () => {
            adminModal.style.display = 'block';
        });
    }

    // Fermer la modal
    if (closeAdminModal) {
        closeAdminModal.addEventListener('click', () => {
            adminModal.style.display = 'none';
            adminLoginForm.reset();
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === adminModal) {
            adminModal.style.display = 'none';
            adminLoginForm.reset();
        }
    });

    // Gestion de la connexion
    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const passwordInput = document.getElementById('adminPassword');
        if (!passwordInput) return;
        
        const password = passwordInput.value;
        
        if (password === eventConfig.admin.password) {
            localStorage.setItem('adminLoggedIn', 'true');
            adminModal.style.display = 'none';
            adminLoginForm.reset();
            checkAdminStatus();
            showToast('Connexion réussie ! Vous pouvez maintenant supprimer les idées.', 'success');
        } else {
            showToast('Mot de passe incorrect', 'error');
        }
    });

    // Gestion de la déconnexion
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', () => {
            if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
                localStorage.setItem('adminLoggedIn', 'false');
                checkAdminStatus();
                showToast('Déconnexion réussie', 'success');
            }
        });
    }
}

// Vérifier et mettre à jour le statut admin
function checkAdminStatus() {
    const isAdmin = isAdminLoggedIn();
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');
    const clearAllBtn = document.getElementById('clearAllIdeas');

    if (adminLoginBtn) {
        adminLoginBtn.style.display = isAdmin ? 'none' : 'block';
    }
    if (adminLogoutBtn) {
        adminLogoutBtn.style.display = isAdmin ? 'block' : 'none';
    }
    if (clearAllBtn) {
        clearAllBtn.style.display = isAdmin ? 'inline-block' : 'none';
    }

    // Recharger les idées pour afficher/masquer les boutons de suppression
    loadIdeas();
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Formulaire de publication
    const form = document.getElementById('ideaForm');
    form.addEventListener('submit', handleSubmit);

    // Recherche
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    // Filtres de catégorie
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        if (btn.id !== 'clearAllIdeas') {
            btn.addEventListener('click', () => handleFilter(btn.dataset.category));
        }
    });

    // Bouton pour effacer toutes les idées
    const clearAllBtn = document.getElementById('clearAllIdeas');
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', handleClearAllIdeas);
    }

    // Tri (si l'élément existe)
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }

    // Modal
    const modal = document.getElementById('ideaModal');
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Menu mobile
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Gestion du formulaire
function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const idea = {
        id: Date.now(),
        auteur: formData.get('auteur'),
        titre: formData.get('titre'),
        categorie: formData.get('categorie'),
        description: formData.get('description'),
        impact: formData.get('impact') || '',
        date: new Date().toISOString(),
        likes: 0,
        likedBy: []
    };

    ideas.unshift(idea);
    saveIdeas();
    loadIdeas();
    e.target.reset();
    
    showToast('Idée publiée avec succès !', 'success');
    // Scroll vers la liste des idées dans la section esprit créatif
    const ideasContainer = document.getElementById('ideasContainer');
    if (ideasContainer) {
        ideasContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Sauvegarde des idées
function saveIdeas() {
    localStorage.setItem('creativiteIdees', JSON.stringify(ideas));
}

// Chargement et affichage des idées
function loadIdeas(filteredIdeas = null) {
    const container = document.getElementById('ideasContainer');
    const noIdeas = document.getElementById('noIdeas');
    const ideasToShow = filteredIdeas || ideas;

    if (ideasToShow.length === 0) {
        container.innerHTML = '';
        noIdeas.style.display = 'block';
        return;
    }

    noIdeas.style.display = 'none';
    container.innerHTML = ideasToShow.map(idea => createIdeaCard(idea)).join('');
    
    // Ajouter les écouteurs pour les boutons like
    container.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            handleLike(parseInt(btn.dataset.id));
        });
    });

    // Ajouter les écouteurs pour les boutons de suppression
    container.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            handleDeleteIdea(parseInt(btn.dataset.id));
        });
    });

    // Ajouter les écouteurs pour ouvrir le modal
    container.querySelectorAll('.idea-card').forEach(card => {
        card.addEventListener('click', () => {
            const ideaId = parseInt(card.dataset.id);
            openModal(ideaId);
        });
    });
}

// Création d'une carte d'idée
function createIdeaCard(idea) {
    const date = new Date(idea.date);
    const formattedDate = date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const isLiked = idea.likedBy && idea.likedBy.includes(getUserIdentifier());

    return `
        <div class="idea-card" data-id="${idea.id}">
            <div class="idea-header">
                <span class="idea-category ${idea.categorie}">${getCategoryLabel(idea.categorie)}</span>
            </div>
            <h3 class="idea-title">${escapeHtml(idea.titre)}</h3>
            <div class="idea-author">
                <i class="fas fa-user"></i>
                ${escapeHtml(idea.auteur)}
            </div>
            <p class="idea-description">${escapeHtml(idea.description)}</p>
            <div class="idea-footer">
                <span class="idea-date">
                    <i class="fas fa-calendar"></i> ${formattedDate}
                </span>
                <div class="idea-actions">
                    <button class="like-btn ${isLiked ? 'liked' : ''}" data-id="${idea.id}">
                        <i class="fas fa-heart"></i>
                        <span class="like-count">${idea.likes || 0}</span>
                    </button>
                    ${isAdminLoggedIn() ? `
                    <button class="delete-btn" data-id="${idea.id}" title="Supprimer cette idée">
                        <i class="fas fa-trash"></i>
                    </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Gestion des likes
function handleLike(ideaId) {
    const idea = ideas.find(i => i.id === ideaId);
    if (!idea) return;

    const userIdentifier = getUserIdentifier();
    
    if (!idea.likedBy) {
        idea.likedBy = [];
    }

    const isLiked = idea.likedBy.includes(userIdentifier);

    if (isLiked) {
        idea.likes = Math.max(0, (idea.likes || 0) - 1);
        idea.likedBy = idea.likedBy.filter(id => id !== userIdentifier);
    } else {
        idea.likes = (idea.likes || 0) + 1;
        idea.likedBy.push(userIdentifier);
    }

    saveIdeas();
    loadIdeas();
}

// Supprimer une idée individuelle
function handleDeleteIdea(ideaId) {
    if (!isAdminLoggedIn()) {
        showToast('Accès refusé. Veuillez vous connecter en tant qu\'administrateur.', 'error');
        return;
    }

    if (confirm('Êtes-vous sûr de vouloir supprimer cette idée ?')) {
        ideas = ideas.filter(i => i.id !== ideaId);
        saveIdeas();
        loadIdeas();
        showToast('Idée supprimée avec succès', 'success');
    }
}

// Effacer toutes les idées
function handleClearAllIdeas() {
    if (!isAdminLoggedIn()) {
        showToast('Accès refusé. Veuillez vous connecter en tant qu\'administrateur.', 'error');
        return;
    }

    if (ideas.length === 0) {
        showToast('Aucune idée à supprimer', 'info');
        return;
    }

    if (confirm(`Êtes-vous sûr de vouloir supprimer toutes les ${ideas.length} idée(s) ? Cette action est irréversible.`)) {
        ideas = [];
        saveIdeas();
        loadIdeas();
        showToast('Toutes les idées ont été supprimées', 'success');
    }
}

// Obtenir un identifiant unique pour l'utilisateur
function getUserIdentifier() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('userId', userId);
    }
    return userId;
}

// Recherche
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = ideas.filter(idea => 
        idea.titre.toLowerCase().includes(searchTerm) ||
        idea.description.toLowerCase().includes(searchTerm) ||
        idea.auteur.toLowerCase().includes(searchTerm)
    );
    loadIdeas(filtered);
}

// Filtrage par catégorie
function handleFilter(category) {
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });

    if (category === 'all') {
        loadIdeas();
    } else {
        const filtered = ideas.filter(idea => idea.categorie === category);
        loadIdeas(filtered);
    }
}

// Tri
function handleSort(e) {
    const sortBy = e.target.value;
    let sorted = [...ideas];

    switch(sortBy) {
        case 'recent':
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'ancien':
            sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'likes':
            sorted.sort((a, b) => (b.likes || 0) - (a.likes || 0));
            break;
    }

    loadIdeas(sorted);
}

// Ouvrir le modal avec les détails
function openModal(ideaId) {
    const idea = ideas.find(i => i.id === ideaId);
    if (!idea) return;

    const date = new Date(idea.date);
    const formattedDate = date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="idea-detail">
            <div class="idea-header">
                <span class="idea-category ${idea.categorie}">${getCategoryLabel(idea.categorie)}</span>
            </div>
            <h2 class="idea-title">${escapeHtml(idea.titre)}</h2>
            <div class="idea-author">
                <i class="fas fa-user"></i>
                ${escapeHtml(idea.auteur)}
            </div>
            <div class="idea-date">
                <i class="fas fa-calendar"></i> ${formattedDate}
            </div>
            <div class="idea-description-full">
                <h3>Description</h3>
                <p>${escapeHtml(idea.description).replace(/\n/g, '<br>')}</p>
            </div>
            ${idea.impact ? `
                <div class="idea-impact">
                    <h3>Impact potentiel</h3>
                    <p>${escapeHtml(idea.impact).replace(/\n/g, '<br>')}</p>
                </div>
            ` : ''}
            <div class="idea-stats">
                <div class="stat-item">
                    <i class="fas fa-heart"></i>
                    <span>${idea.likes || 0} appréciations</span>
                </div>
            </div>
        </div>
    `;

    document.getElementById('ideaModal').style.display = 'block';
}

// Fonction supprimée - les statistiques sont maintenant gérées par departements.js

// Labels des catégories
function getCategoryLabel(category) {
    const labels = {
        'technologie': 'Technologie',
        'education': 'Éducation',
        'art': 'Art & Design',
        'innovation': 'Innovation',
        'social': 'Social',
        'autre': 'Autre'
    };
    return labels[category] || category;
}

// Utilitaires
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Mettre à jour le lien actif
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

