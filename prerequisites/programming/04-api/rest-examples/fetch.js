// Exemples d'utilisation de l'API Fetch
// Démontre la compréhension des appels API de base

// 1. GET Request simple
async function getUsers() {
    try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        console.log('Users:', data);
        return data;
    } catch (error) {
        console.error('Erreur:', error);
    }
}

// 2. POST Request - Créer un utilisateur
async function createUser(userData) {
    try {
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    } catch (error) {
        console.error('Erreur création utilisateur:', error);
    }
}

// 3. PUT Request - Mettre à jour un utilisateur
async function updateUser(userId, userData) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    } catch (error) {
        console.error('Erreur mise à jour:', error);
    }
}

// 4. DELETE Request - Supprimer un utilisateur
async function deleteUser(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`, {
            method: 'DELETE'
        });
        return response.ok;
    } catch (error) {
        console.error('Erreur suppression:', error);
    }
}

// 5. GET avec paramètres de requête
async function searchUsers(searchTerm) {
    try {
        const params = new URLSearchParams({ q: searchTerm });
        const response = await fetch(`https://api.example.com/users/search?${params}`);
        return await response.json();
    } catch (error) {
        console.error('Erreur recherche:', error);
    }
}

// 6. GET avec headers d'authentification
async function getProtectedData(token) {
    try {
        const response = await fetch('https://api.example.com/protected', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Erreur accès protégé:', error);
    }
}

// 7. POST avec upload de fichier
async function uploadFile(file) {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('https://api.example.com/upload', {
            method: 'POST',
            body: formData
        });
        return await response.json();
    } catch (error) {
        console.error('Erreur upload:', error);
    }
}

// 8. Gestion des erreurs HTTP
async function handleErrors() {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

// 9. Exemple d'utilisation
async function exemples() {
    // Créer un utilisateur
    const newUser = await createUser({
        name: 'John Doe',
        email: 'john@example.com'
    });

    // Rechercher des utilisateurs
    const searchResults = await searchUsers('John');

    // Mettre à jour un utilisateur
    const updatedUser = await updateUser(1, {
        name: 'John Updated'
    });

    // Supprimer un utilisateur
    const deleted = await deleteUser(1);
}

// 10. Gestion du timeout
async function fetchWithTimeout(resource, options = {}) {
    const timeout = options.timeout || 5000;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(resource, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        if (error.name === 'AbortError') {
            throw new Error('Request timeout');
        }
        throw error;
    }
}