# 🔗 Changer l'URL pour enlever le nom du dépôt

## Objectif
Passer de : `https://seydoudangandeabdoulaziz.github.io/Cr-ativit-Emigoise/`
À : `https://seydoudangandeabdoulaziz.github.io/`

---

## Méthode : Créer un Dépôt Spécial

Pour avoir une URL plus courte, vous devez créer un nouveau dépôt avec un nom spécial.

### Étape 1 : Créer le Nouveau Dépôt sur GitHub

1. **Allez sur GitHub** : [github.com](https://github.com)
2. **Cliquez sur "+"** → **"New repository"**
3. **Nom du dépôt** : Entrez exactement ce nom (IMPORTANT) :
   ```
   seydoudangandeabdoulaziz.github.io
   ```
   ⚠️ Le nom doit être **exactement** : `votre-username.github.io`
4. **Description** : "Site web Créativité Emigoise"
5. **Visibilité** : **Public** (nécessaire pour GitHub Pages gratuit)
6. **NE COCHEZ RIEN** (pas de README, pas de .gitignore, pas de license)
7. **Cliquez sur "Create repository"**

### Étape 2 : Pousser votre Code dans le Nouveau Dépôt

Dans votre terminal, exécutez ces commandes :

```bash
# 1. Ajouter le nouveau dépôt comme remote
git remote add pages https://github.com/seydoudangandeabdoulaziz/seydoudangandeabdoulaziz.github.io.git

# 2. Pousser votre code dans le nouveau dépôt
git push -u pages main
```

### Étape 3 : Activer GitHub Pages

1. **Sur le nouveau dépôt GitHub**, allez dans **Settings**
2. **Pages** (menu de gauche)
3. **Source** :
   - **Branch** : `main`
   - **Folder** : `/ (root)`
4. **Save**

### Étape 4 : Attendre le Déploiement

- Attendez 2-5 minutes
- Votre site sera accessible à : `https://seydoudangandeabdoulaziz.github.io/`

---

## Alternative : Renommer l'Ancien Dépôt

Si vous préférez garder un seul dépôt, vous pouvez renommer l'ancien :

1. **Allez sur** : `https://github.com/seydoudangandeabdoulaziz/Cr-ativit-Emigoise`
2. **Settings** → **General**
3. **Repository name** → Cliquez sur le crayon
4. **Renommez en** : `seydoudangandeabdoulaziz.github.io`
5. **Rename**

⚠️ **Attention** : Cela changera aussi l'URL du dépôt GitHub.

---

## Résultat Final

✅ **Ancienne URL** : `https://seydoudangandeabdoulaziz.github.io/Cr-ativit-Emigoise/`
✅ **Nouvelle URL** : `https://seydoudangandeabdoulaziz.github.io/`

Plus court et plus professionnel ! 🎉

---

## Note Importante

- L'ancien dépôt peut être supprimé ou gardé comme archive
- Tous les liens vers l'ancienne URL devront être mis à jour
- Le nouveau site sera automatiquement mis à jour à chaque `git push`

