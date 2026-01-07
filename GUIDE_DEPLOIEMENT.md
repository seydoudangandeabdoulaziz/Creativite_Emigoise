# 🚀 Guide de Déploiement sur GitHub

Ce guide vous explique comment mettre votre site en ligne sur GitHub et l'héberger gratuitement avec GitHub Pages.

## 📋 Prérequis

- Un compte GitHub (gratuit) : [github.com/signup](https://github.com/signup)
- Git installé sur votre ordinateur
- Votre projet prêt (déjà initialisé avec Git)

---

## Étape 1 : Créer un dépôt sur GitHub

1. **Connectez-vous à GitHub**
   - Allez sur [github.com](https://github.com)
   - Connectez-vous avec votre compte

2. **Créer un nouveau dépôt**
   - Cliquez sur le bouton **"+"** en haut à droite
   - Sélectionnez **"New repository"**

3. **Configurer le dépôt**
   - **Repository name** : `creativite-emigoise` (ou le nom de votre choix)
   - **Description** : "Site web pour la Journée de la Créativité Emigoise"
   - **Visibilité** : Choisissez **Public** (nécessaire pour GitHub Pages gratuit)
   - ⚠️ **NE COCHEZ PAS** "Add a README file" (vous en avez déjà un)
   - ⚠️ **NE COCHEZ PAS** "Add .gitignore" (vous en avez déjà un)
   - ⚠️ **NE COCHEZ PAS** "Choose a license"
   - Cliquez sur **"Create repository"**

4. **Copier l'URL du dépôt**
   - GitHub vous affichera une page avec des instructions
   - **Copiez l'URL HTTPS** (exemple : `https://github.com/VOTRE-USERNAME/creativite-emigoise.git`)
   - Vous en aurez besoin pour l'étape suivante

---

## Étape 2 : Connecter votre dépôt local à GitHub

Ouvrez un terminal dans le dossier de votre projet et exécutez ces commandes :

```bash
# 1. Ajouter le dépôt distant GitHub (remplacez l'URL par la vôtre)
git remote add origin https://github.com/VOTRE-USERNAME/creativite-emigoise.git

# 2. Vérifier que la connexion est bien établie
git remote -v

# 3. Pousser votre code sur GitHub
git push -u origin main
```

**Si vous êtes demandé de vous authentifier :**
- GitHub peut demander votre nom d'utilisateur et un token d'accès personnel
- Pour créer un token : GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
- Donnez-lui les permissions `repo`

---

## Étape 3 : Activer GitHub Pages

1. **Aller dans les paramètres du dépôt**
   - Sur la page de votre dépôt GitHub
   - Cliquez sur l'onglet **"Settings"** (en haut)

2. **Configurer GitHub Pages**
   - Dans le menu de gauche, cliquez sur **"Pages"**
   - Sous **"Source"**, sélectionnez :
     - **Branch** : `main`
     - **Folder** : `/ (root)`
   - Cliquez sur **"Save"**

3. **Attendre le déploiement**
   - GitHub va déployer votre site (cela prend 1-2 minutes)
   - Vous verrez un message vert avec l'URL de votre site
   - Votre site sera disponible à : `https://VOTRE-USERNAME.github.io/creativite-emigoise`

---

## Étape 4 : Vérifier que le site fonctionne

1. **Attendez quelques minutes** (le déploiement peut prendre jusqu'à 5 minutes)
2. **Visitez votre site** à l'adresse : `https://VOTRE-USERNAME.github.io/creativite-emigoise`
3. **Testez toutes les fonctionnalités** :
   - Navigation
   - Publication d'idées
   - Filtres
   - Connexion admin

---

## 🔄 Mettre à jour le site

Chaque fois que vous modifiez votre code localement :

```bash
# 1. Ajouter les modifications
git add .

# 2. Créer un commit
git commit -m "Description de vos modifications"

# 3. Envoyer sur GitHub
git push

# Le site sera automatiquement mis à jour en quelques minutes
```

---

## ⚙️ Configuration personnalisée (Optionnel)

### Changer le nom du dépôt

Si vous voulez changer l'URL de votre site :

1. Allez dans **Settings** → **General**
2. Faites défiler jusqu'à **"Repository name"**
3. Changez le nom et cliquez sur **"Rename"**
4. L'URL de votre site changera automatiquement

### Utiliser un nom de domaine personnalisé

1. Dans **Settings** → **Pages**
2. Entrez votre domaine dans **"Custom domain"**
3. Configurez les DNS de votre domaine pour pointer vers GitHub

---

## 🐛 Résolution de problèmes

### Le site ne s'affiche pas

- Attendez 5-10 minutes (le premier déploiement peut prendre du temps)
- Vérifiez que la branche `main` est bien sélectionnée dans Pages
- Vérifiez que votre fichier `index.html` est à la racine du dépôt

### Erreur lors du push

```bash
# Si vous avez des erreurs de connexion, essayez :
git remote set-url origin https://github.com/VOTRE-USERNAME/creativite-emigoise.git
git push -u origin main
```

### Le site affiche une page 404

- Vérifiez que tous vos fichiers sont bien poussés sur GitHub
- Vérifiez que `index.html` est bien à la racine
- Vérifiez les chemins des fichiers CSS et JS (ils doivent être relatifs)

---

## 📝 Checklist de déploiement

- [ ] Compte GitHub créé
- [ ] Dépôt GitHub créé
- [ ] Dépôt local connecté à GitHub
- [ ] Code poussé sur GitHub (`git push`)
- [ ] GitHub Pages activé
- [ ] Site accessible en ligne
- [ ] Toutes les fonctionnalités testées

---

## 🎉 Félicitations !

Votre site est maintenant en ligne et accessible à tous ! Partagez l'URL avec votre communauté.

**URL de votre site** : `https://VOTRE-USERNAME.github.io/creativite-emigoise`

---

## 💡 Astuces

- **Mise à jour automatique** : Chaque `git push` met à jour automatiquement le site
- **Historique** : Tous vos changements sont sauvegardés dans l'historique Git
- **Gratuit** : GitHub Pages est gratuit pour les dépôts publics
- **HTTPS** : Votre site est automatiquement sécurisé avec HTTPS

---

## 📞 Besoin d'aide ?

Si vous rencontrez des problèmes :
1. Vérifiez la documentation GitHub Pages : [docs.github.com/pages](https://docs.github.com/pages)
2. Consultez les logs de déploiement dans **Settings** → **Pages** → **Deployments**

