# 🌐 Comment Changer le Nom de Domaine/URL de votre Site

Il existe plusieurs façons de modifier l'URL de votre site GitHub Pages.

---

## Option 1 : Renommer le Dépôt GitHub (Simple)

Cette méthode change l'URL de votre site.

### Étapes :

1. **Sur GitHub, allez dans votre dépôt**
2. **Cliquez sur "Settings"** (Paramètres)
3. **Faites défiler jusqu'à "Repository name"**
4. **Cliquez sur le crayon** à côté du nom
5. **Entrez le nouveau nom** (ex: `creativite-emigoise` ou `journee-creativite`)
6. **Cliquez sur "Rename"**

### Résultat :
- **Ancienne URL** : `https://VOTRE-USERNAME.github.io/ancien-nom`
- **Nouvelle URL** : `https://VOTRE-USERNAME.github.io/nouveau-nom`

⚠️ **Important** : L'ancienne URL ne fonctionnera plus. Mettez à jour tous les liens.

---

## Option 2 : Utiliser un Dépôt Spécial (URL Plus Courte)

Pour avoir une URL plus courte : `https://VOTRE-USERNAME.github.io`

### Étapes :

1. **Créer un nouveau dépôt** avec un nom spécial :
   - Le nom doit être exactement : `VOTRE-USERNAME.github.io`
   - Exemple : Si votre username est `john`, le dépôt doit s'appeler `john.github.io`

2. **Pousser votre code** dans ce nouveau dépôt :
   ```bash
   git remote set-url origin https://github.com/VOTRE-USERNAME/VOTRE-USERNAME.github.io.git
   git push -u origin main
   ```

3. **Activer GitHub Pages** (comme d'habitude)

### Résultat :
- **URL** : `https://VOTRE-USERNAME.github.io` (sans le nom du dépôt)
- Plus court et plus professionnel !

---

## Option 3 : Utiliser un Domaine Personnalisé (Avancé)

Pour utiliser votre propre domaine (ex: `www.creativite-emigoise.com`)

### Prérequis :
- Avoir un nom de domaine acheté (chez OVH, Namecheap, etc.)

### Étapes :

1. **Sur GitHub** :
   - Allez dans **Settings** → **Pages**
   - Dans **"Custom domain"**, entrez votre domaine
   - Exemple : `www.creativite-emigoise.com`
   - Cochez **"Enforce HTTPS"**

2. **Créer un fichier CNAME** dans votre projet :
   ```bash
   echo "www.creativite-emigoise.com" > CNAME
   git add CNAME
   git commit -m "Ajout du domaine personnalisé"
   git push
   ```

3. **Configurer les DNS** chez votre hébergeur de domaine :
   - Ajoutez un enregistrement **CNAME** :
     - **Nom** : `www` (ou `@` pour le domaine racine)
     - **Valeur** : `VOTRE-USERNAME.github.io`
   - Ou un enregistrement **A** :
     - **Nom** : `@`
     - **Valeur** : `185.199.108.153` (adresse IP de GitHub Pages)

4. **Attendre la propagation DNS** (peut prendre jusqu'à 48h)

### Résultat :
- Votre site sera accessible à : `https://www.creativite-emigoise.com`

---

## Comparaison des Options

| Option | URL Résultante | Difficulté | Coût |
|--------|----------------|------------|------|
| **Option 1** | `username.github.io/nom-repo` | ⭐ Facile | Gratuit |
| **Option 2** | `username.github.io` | ⭐⭐ Moyen | Gratuit |
| **Option 3** | `www.votre-domaine.com` | ⭐⭐⭐ Avancé | ~10€/an (domaine) |

---

## Recommandations

### Pour un projet simple :
→ **Option 1** : Renommez simplement le dépôt

### Pour un site professionnel :
→ **Option 2** : Utilisez le format `username.github.io`

### Pour un site avec votre propre marque :
→ **Option 3** : Utilisez un domaine personnalisé

---

## ⚠️ Important après le Changement

1. **Mettre à jour les liens** dans votre code si nécessaire
2. **Tester le site** sur la nouvelle URL
3. **Vérifier que GitHub Pages** est toujours activé
4. **Attendre quelques minutes** pour la propagation

---

## Commandes Utiles

### Vérifier l'URL actuelle :
```bash
git remote -v
```

### Changer l'URL du dépôt distant :
```bash
git remote set-url origin https://github.com/VOTRE-USERNAME/NOUVEAU-NOM.git
```

### Vérifier la configuration GitHub Pages :
- Allez dans **Settings** → **Pages** sur GitHub

---

## Besoin d'Aide ?

- Documentation GitHub Pages : [docs.github.com/pages](https://docs.github.com/pages)
- Support GitHub : [support.github.com](https://support.github.com)

