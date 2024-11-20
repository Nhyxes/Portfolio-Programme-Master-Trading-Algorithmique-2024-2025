# API Integration - Basic Examples
# Intégration API - Exemples de Base

[English](#english) | [Français](#français)

---

## English

Demonstration of API integration skills and HTTP requests

### 📂 Folder Structure
```bash
04-api/
├── rest-examples/
│   ├── fetch.js          # Fetch API examples
│   └── axios.js          # Axios examples
└── postman/
    └── collection-example.json  # Postman collection
```

### ✅ API Skills

#### Fetch API
- [x] GET, POST, PUT, DELETE
- [x] Headers and Body
- [x] Error handling
- [x] Async/Await
- [x] Query parameters

#### Axios
- [x] Basic configuration
- [x] HTTP requests
- [x] Interceptors
- [x] Error handling
- [x] Custom instances

#### Postman
- [x] Collections
- [x] Environments
- [x] Variables
- [x] Basic tests

### 🔍 Included Examples

#### Fetch
```javascript
// GET Request
async function getUsers() {
    const response = await fetch('api/users');
    return await response.json();
}

// POST Request
async function createUser(data) {
    const response = await fetch('api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}
```

#### Axios
```javascript
// Configuration
const api = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 5000
});

// Requests
async function getUser(id) {
    try {
        const response = await api.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### 📝 Notes
- Focus on modern practices
- Clean error handling
- Clear documentation
- Reusable examples

### 🔑 Key Points
1. Understanding of HTTP methods
2. JSON data manipulation
3. Asynchronous handling
4. Error handling best practices

---

## Français

Démonstration des compétences en intégration API et requêtes HTTP

### 📂 Structure du Dossier
```bash
04-api/
├── rest-examples/
│   ├── fetch.js          # Exemples avec Fetch API
│   └── axios.js          # Exemples avec Axios
└── postman/
    └── collection-example.json  # Collection Postman
```

### ✅ Compétences API

#### Fetch API
- [x] GET, POST, PUT, DELETE
- [x] Headers et Body
- [x] Gestion des erreurs
- [x] Async/Await
- [x] Paramètres de requête

#### Axios
- [x] Configuration de base
- [x] Requêtes HTTP
- [x] Intercepteurs
- [x] Gestion des erreurs
- [x] Instances personnalisées

#### Postman
- [x] Collections
- [x] Environnements
- [x] Variables
- [x] Tests basiques

### 🔍 Exemples Inclus

#### Fetch
```javascript
// GET Request
async function getUsers() {
    const response = await fetch('api/users');
    return await response.json();
}

// POST Request
async function createUser(data) {
    const response = await fetch('api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}
```

#### Axios
```javascript
// Configuration
const api = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 5000
});

// Requêtes
async function getUser(id) {
    try {
        const response = await api.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur:', error);
    }
}
```

### 📝 Notes
- Focus sur les pratiques modernes
- Gestion propre des erreurs
- Documentation claire
- Exemples réutilisables

### 🔑 Points Clés
1. Compréhension des méthodes HTTP
2. Manipulation des données JSON
3. Gestion asynchrone
4. Bonnes pratiques de gestion d'erreurs

---

*Last update / Dernière mise à jour : 20 novembre 2024*
*Examples are intentionally kept simple to demonstrate understanding of basic concepts / Les exemples sont volontairement simples pour démontrer la compréhension des concepts de base*