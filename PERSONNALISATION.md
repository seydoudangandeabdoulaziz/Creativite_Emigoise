# 🎨 Guide de Personnalisation

Ce guide vous explique comment rendre votre site authentique pour la Journée de la Créativité Emigoise.

## 📝 Fichier de Configuration

Toutes les informations de l'événement sont centralisées dans le fichier **`js/config.js`**.

### Modifier les informations de l'événement

Ouvrez `js/config.js` et modifiez les valeurs dans l'objet `eventConfig` :

```javascript
const eventConfig = {
    eventDate: "15 Décembre 2024",        // Date de l'événement
    eventTime: "09h00 - 17h00",           // Heure de l'événement
    eventLocation: "Campus Principal",     // Lieu de l'événement
    contactEmail: "votre@email.com",       // Email de contact
    contactPhone: "+227 90 12 34 56",     // Téléphone de contact
    // ... etc
};
```

## 🖼️ Ajouter un Logo

### Option 1 : Logo dans le header

1. Placez votre logo dans un dossier `images/` (créez-le si nécessaire)
2. Modifiez `index.html` ligne 19-21 :

```html
<div class="logo">
    <img src="images/logo.png" alt="Logo Emigoise" style="height: 50px;">
    <h1>Créativité Emigoise</h1>
</div>
```

### Option 2 : Remplacer l'icône

L'icône actuelle est un Font Awesome. Vous pouvez la changer dans `index.html` :

```html
<i class="fas fa-lightbulb"></i>  <!-- Changez fa-lightbulb par une autre icône -->
```

## 🎨 Personnaliser les Couleurs

Les couleurs sont définies dans `css/style.css` dans la section `:root` :

```css
:root {
    --primary-color: #6366f1;      /* Couleur principale */
    --secondary-color: #8b5cf6;    /* Couleur secondaire */
    --accent-color: #ec4899;       /* Couleur d'accent */
}
```

Remplacez ces valeurs par les couleurs de votre institution.

## 📸 Ajouter des Images

### Image de fond pour la section Hero

Dans `css/style.css`, recherchez `.hero` et ajoutez :

```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%),
                url('images/fond-hero.jpg') center/cover;
    /* ... autres styles ... */
}
```

## 📱 Liens Sociaux

Dans `js/config.js`, modifiez les liens sociaux :

```javascript
socialLinks: {
    facebook: "https://facebook.com/votre-page",
    twitter: "https://twitter.com/votre-compte",
    instagram: "https://instagram.com/votre-compte",
    linkedin: "https://linkedin.com/company/votre-entreprise"
}
```

## 📋 Modifier les Départements

Voir le fichier `js/departements.js` et modifiez le tableau `departementsData` avec vos vrais départements, filières et matières.

## 📅 Informations Spécifiques à Modifier

### Dans `index.html` :

1. **Titre de la page** (ligne 7) :
```html
<title>Votre Titre Personnalisé</title>
```

2. **Meta description** (ligne 6) :
```html
<meta name="description" content="Votre description personnalisée">
```

### Dans `js/config.js` :

- `eventName` : Nom complet de l'événement
- `eventDate` : Date formatée (ex: "15 Décembre 2024")
- `eventTime` : Heure (ex: "09h00 - 17h00")
- `eventLocation` : Lieu de l'événement
- `organisateurs` : Nom des organisateurs
- `eventObjective` : Objectif de l'événement
- `eventProgram` : Description du programme

## ✅ Checklist de Personnalisation

- [ ] Modifier la date de l'événement
- [ ] Ajouter le lieu de l'événement
- [ ] Mettre à jour les informations de contact (email, téléphone, adresse)
- [ ] Ajouter les liens des réseaux sociaux
- [ ] Modifier les départements avec les vrais départements de votre institution
- [ ] Ajouter le logo de l'institution
- [ ] Personnaliser les couleurs si nécessaire
- [ ] Ajouter des images/photos de l'événement
- [ ] Modifier le nom des organisateurs
- [ ] Personnaliser la description de l'événement

## 💡 Astuces

- **Testez régulièrement** : Après chaque modification, ouvrez `index.html` dans votre navigateur pour voir les changements
- **Sauvegardez** : Gardez une copie de sauvegarde avant de faire des modifications importantes
- **Images** : Utilisez des images optimisées (format WebP ou JPG compressé) pour un chargement rapide
- **Couleurs** : Utilisez un outil comme [Coolors](https://coolors.co/) pour choisir une palette harmonieuse

## 🆘 Besoin d'aide ?

Si vous avez besoin d'aide pour personnaliser d'autres éléments, n'hésitez pas à demander !

