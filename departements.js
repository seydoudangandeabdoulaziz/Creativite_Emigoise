// Données des départements, filières et matières
const departementsData = [
    {
        id: 'informatique',
        nom: 'Informatique',
        description: 'Département dédié aux sciences informatiques et technologies de l\'information',
        icon: 'fas fa-laptop-code',
        filieres: [
            {
                id: 'Informatoque genie-logiciel(OIGL)',
                nom: 'Génie Logiciel',
                description: 'Formation en développement logiciel et ingénierie des systèmes',
                matieres: [
                    { nom: 'Algorithmique et Structures de Données', credits: 3 },
                    { nom: 'Initiation au logiciel MAtlab', credits: 4 },
                    { nom: 'Bases de Données', credits: 5 },
                    { nom: 'Mathématique Appliquée', credits: 5 },
                    { nom: 'Systèmes d\'exploitation 1', credits: 5 },
                    { nom: 'Electronique Numerique', credits: 4 },
                    { nom: 'Initiation au Web et Internet', credits: 3 },
                    { nom: 'Langage a Balise', credits: 3 },
                    { nom: 'Systemes d\'information', credits: 5 },
                    { nom: 'Anglais Technique', credits: 2 },
                    { nom: 'Langage C', credits: 2 },
                    { nom: 'Economie', credits: 2 }
                ]
            },
            
        ]
    },
    {
        id: 'mathematiques',
        nom: 'Automatique et informatoque industrielle ',
        description: 'Département de mathématiques appliquées et théoriques',
        icon: 'fas fa-calculator',
        filieres: [
            {
                id: 'mathematiques-pures',
                nom: 'Mathématiques Pures',
                description: 'Formation en mathématiques fondamentales',
                matieres: [
                    { nom: 'Algèbre Linéaire', credits: 6 },
                    { nom: 'Analyse Mathématique', credits: 6 },
                    { nom: 'Géométrie', credits: 4 },
                    { nom: 'Théorie des Nombres', credits: 4 },
                    { nom: 'Topologie', credits: 5 }
                ]
            },
            {
                id: 'mathematiques-appliquees',
                nom: 'Mathématiques Appliquées',
                description: 'Formation en mathématiques pour l\'ingénierie',
                matieres: [
                    { nom: 'Analyse Numérique', credits: 5 },
                    { nom: 'Probabilités et Statistiques', credits: 6 },
                    { nom: 'Recherche Opérationnelle', credits: 5 },
                    { nom: 'Modélisation Mathématique', credits: 5 },
                    { nom: 'Simulation Numérique', credits: 4 }
                ]
            }
        ]
    },
    {
        id: 'Energie Renouvelables(OER)',
        nom: 'Electromecanique',
        description: 'Département d\'économie et gestion',
        icon: 'fas fa-chart-line',
        filieres: [
            {
                id: 'economie-generale',
                nom: 'Économie Générale',
                description: 'Formation en économie théorique et appliquée',
                matieres: [
                    { nom: 'Microéconomie', credits: 6 },
                    { nom: 'Macroéconomie', credits: 6 },
                    { nom: 'Économétrie', credits: 5 },
                    { nom: 'Politique Économique', credits: 4 },
                    { nom: 'Économie du Développement', credits: 4 }
                ]
            },
            {
                id: 'gestion',
                nom: 'Energie Renouvelables(OER)',
                description: 'Formation en gestion d\'entreprise',
                matieres: [
                    { nom: 'Comptabilité Générale', credits: 5 },
                    { nom: 'Gestion Financière', credits: 5 },
                    { nom: 'Marketing', credits: 4 },
                    { nom: 'Ressources Humaines', credits: 4 },
                    { nom: 'Stratégie d\'Entreprise', credits: 4 }
                ]
            }
        ]
    },
    
];

// Fonction pour initialiser l'affichage des départements
function initializeDepartements() {
    const tabsContainer = document.getElementById('departmentsTabs');
    const contentContainer = document.getElementById('departmentsContent');

    if (!tabsContainer || !contentContainer) return;

    // Créer les onglets
    tabsContainer.innerHTML = departementsData.map((dept, index) => `
        <button class="nav-tab ${index === 0 ? 'active' : ''}" data-dept="${dept.id}">
            <i class="${dept.icon}"></i>
            <span>${dept.nom}</span>
        </button>
    `).join('');

    // Afficher le premier département par défaut
    displayDepartment(departementsData[0].id);

    // Ajouter les écouteurs d'événements
    tabsContainer.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            // Retirer la classe active de tous les onglets
            tabsContainer.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            // Ajouter la classe active à l'onglet cliqué
            tab.classList.add('active');
            // Afficher le département correspondant
            displayDepartment(tab.dataset.dept);
        });
    });

    // Mettre à jour les statistiques
    updateDepartmentStats();
}

// Fonction pour afficher un département
function displayDepartment(deptId) {
    const dept = departementsData.find(d => d.id === deptId);
    if (!dept) return;

    const contentContainer = document.getElementById('departmentsContent');
    if (!contentContainer) return;

    contentContainer.innerHTML = `
        <div class="department-header">
            <div class="department-icon">
                <i class="${dept.icon}"></i>
            </div>
            <div class="department-info">
                <h3>${dept.nom}</h3>
                <p>${dept.description}</p>
            </div>
        </div>
        <div class="filieres-container">
            ${dept.filieres.map(filiere => createFiliereCard(filiere)).join('')}
        </div>
    `;
}

// Fonction pour créer une carte de filière
function createFiliereCard(filiere) {
    const totalCredits = filiere.matieres.reduce((sum, m) => sum + m.credits, 0);
    
    return `
        <div class="filiere-card">
            <div class="filiere-header">
                <h4>${filiere.nom}</h4>
                <span class="credits-badge">${totalCredits} crédits</span>
            </div>
            <p class="filiere-description">${filiere.description}</p>
            <div class="matieres-section">
                <h5><i class="fas fa-book-open"></i> Matières</h5>
                <div class="matieres-list">
                    ${filiere.matieres.map(matiere => `
                        <div class="matiere-item">
                            <div class="matiere-info">
                                <i class="fas fa-book"></i>
                                <span class="matiere-nom">${matiere.nom}</span>
                            </div>
                            <span class="matiere-credits">${matiere.credits} crédits</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Fonction pour mettre à jour les statistiques
function updateDepartmentStats() {
    const totalDepartements = departementsData.length;
    const totalFilieres = departementsData.reduce((sum, d) => sum + d.filieres.length, 0);
    const totalMatieres = departementsData.reduce((sum, d) => 
        sum + d.filieres.reduce((s, f) => s + f.matieres.length, 0), 0
    );

    const deptElement = document.getElementById('totalDepartements');
    const filElement = document.getElementById('totalFilieres');
    const matElement = document.getElementById('totalMatieres');

    if (deptElement) deptElement.textContent = totalDepartements;
    if (filElement) filElement.textContent = totalFilieres;
    if (matElement) matElement.textContent = totalMatieres;
}

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDepartements);
} else {
    initializeDepartements();
}

