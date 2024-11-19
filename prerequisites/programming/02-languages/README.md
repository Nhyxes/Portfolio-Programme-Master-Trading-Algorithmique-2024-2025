# Langages de Programmation
> Démonstration des compétences en PHP et JavaScript (6 mois d'expérience dans chaque langage)

## 📂 Structure du Dossier
```bash
02-languages/
├── javascript/
│   ├── basics.js     # Fondamentaux JS
│   └── async.js      # Asynchrone et Fetch
└── php/
    ├── basics.php    # Fondamentaux PHP
    └── oop.php       # POO de base
```

## ✅ Compétences JavaScript

### Fondamentaux
- [x] Variables et types
- [x] Fonctions et portée
- [x] Tableaux et objets
- [x] Événements DOM
- [x] ES6+ syntaxe de base

### Asynchrone
- [x] Callbacks
- [x] Promises
- [x] Async/Await
- [x] Fetch API
- [x] Gestion d'erreurs

## ✅ Compétences PHP

### Fondamentaux
- [x] Variables et types
- [x] Fonctions
- [x] Tableaux
- [x] Sessions et cookies
- [x] Formulaires

### POO
- [x] Classes et objets
- [x] Propriétés et méthodes
- [x] Constructeur
- [x] Visibilité
- [x] Héritage simple

## 🔍 Exemples Inclus

### JavaScript
```javascript
// Manipulation DOM
document.querySelector('#element').addEventListener('click', () => {
    console.log('Cliqué !');
});

// Fetch API
async function getData() {
    const response = await fetch('api/data');
    return await response.json();
}
```

### PHP
```php
// POO basique
class User {
    private $name;
    
    public function __construct($name) {
        $this->name = $name;
    }
    
    public function getName() {
        return $this->name;
    }
}
```

## 📝 Notes
- Exemples volontairement simples pour démontrer la compréhension des concepts de base
- Code commenté et structuré
- Focus sur les bonnes pratiques

---
*Dernière mise à jour : 17 novembre 2024*