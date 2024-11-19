# Intégration API
> Démonstration des compétences en intégration API et requêtes HTTP

## 📂 Structure du Dossier
```bash
04-api/
├── rest-examples/
│   ├── fetch.js          # Exemples avec Fetch API
│   └── axios.js          # Exemples avec Axios
└── postman/
    └── collection-example.json  # Collection Postman
```

## ✅ Compétences API

### Fetch API
- [x] GET, POST, PUT, DELETE
- [x] Headers et Body
- [x] Gestion des erreurs
- [x] Async/Await
- [x] Paramètres de requête

### Axios
- [x] Configuration de base
- [x] Requêtes HTTP
- [x] Intercepteurs
- [x] Gestion des erreurs
- [x] Instances personnalisées

### Postman
- [x] Collections
- [x] Environnements
- [x] Variables
- [x] Tests basiques

## 🔍 Exemples Inclus

### Fetch
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

### Axios
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

## 📝 Notes
- Focus sur les pratiques modernes
- Gestion propre des erreurs
- Documentation claire
- Exemples réutilisables

## 🔑 Points Clés
1. Compréhension des méthodes HTTP
2. Manipulation des données JSON
3. Gestion asynchrone
4. Bonnes pratiques de gestion d'erreurs

---
*Dernière mise à jour : 17 novembre 2024*