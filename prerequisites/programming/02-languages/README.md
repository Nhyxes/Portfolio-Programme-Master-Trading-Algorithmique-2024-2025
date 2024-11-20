# Programming Languages - Basic Examples
# Langages de Programmation - Exemples de Base

[English](#english) | [Français](#français)

---

## English

Demonstration of PHP and JavaScript skills (6 months experience in each language)

### 📂 Folder Structure
```bash
02-languages/
├── javascript/
│   ├── basics.js     # JS fundamentals
│   └── async.js      # Async and Fetch
└── php/
    ├── basics.php    # PHP fundamentals
    └── oop.php       # Basic OOP
```

### ✅ JavaScript Skills

#### Fundamentals
- [x] Variables and types
- [x] Functions and scope
- [x] Arrays and objects
- [x] DOM events
- [x] ES6+ basic syntax

#### Asynchronous
- [x] Callbacks
- [x] Promises
- [x] Async/Await
- [x] Fetch API
- [x] Error handling

### ✅ PHP Skills

#### Fundamentals
- [x] Variables and types
- [x] Functions
- [x] Arrays
- [x] Sessions and cookies
- [x] Forms

#### OOP
- [x] Classes and objects
- [x] Properties and methods
- [x] Constructor
- [x] Visibility
- [x] Basic inheritance

### 🔍 Included Examples

#### JavaScript
```javascript
// DOM manipulation
document.querySelector('#element').addEventListener('click', () => {
    console.log('Clicked!');
});

// Fetch API
async function getData() {
    const response = await fetch('api/data');
    return await response.json();
}
```

#### PHP
```php
// Basic OOP
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

### 📝 Notes
- Examples are intentionally kept simple
- Code is commented and structured
- Focus on best practices

---

## Français

Démonstration des compétences en PHP et JavaScript (6 mois d'expérience dans chaque langage)

### 📂 Structure du Dossier
```bash
02-languages/
├── javascript/
│   ├── basics.js     # Fondamentaux JS
│   └── async.js      # Asynchrone et Fetch
└── php/
    ├── basics.php    # Fondamentaux PHP
    └── oop.php       # POO de base
```

### ✅ Compétences JavaScript

#### Fondamentaux
- [x] Variables et types
- [x] Fonctions et portée
- [x] Tableaux et objets
- [x] Événements DOM
- [x] ES6+ syntaxe de base

#### Asynchrone
- [x] Callbacks
- [x] Promises
- [x] Async/Await
- [x] Fetch API
- [x] Gestion d'erreurs

### ✅ Compétences PHP

#### Fondamentaux
- [x] Variables et types
- [x] Fonctions
- [x] Tableaux
- [x] Sessions et cookies
- [x] Formulaires

#### POO
- [x] Classes et objets
- [x] Propriétés et méthodes
- [x] Constructeur
- [x] Visibilité
- [x] Héritage simple

### 🔍 Exemples Inclus

#### JavaScript
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

#### PHP
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

### 📝 Notes
- Exemples volontairement simples pour démontrer la compréhension des concepts de base
- Code commenté et structuré
- Focus sur les bonnes pratiques

---

*Last update / Dernière mise à jour : 20 novembre 2024*
*Examples are intentionally kept simple to demonstrate understanding of basic concepts / Les exemples sont volontairement simples pour démontrer la compréhension des concepts de base*