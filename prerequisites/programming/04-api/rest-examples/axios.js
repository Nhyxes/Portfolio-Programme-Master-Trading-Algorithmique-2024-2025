// Exemples d'utilisation d'Axios
// Démontre la compréhension des appels API avec Axios

// Configuration de base
const axios = require('axios');

// Configuration par défaut
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 1. GET Request simple
async function getUsers() {
    try {
        const response = await axios.get('/users');
        console.log('Users:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur:', error.response.data);
    }
}

// 2. POST Request
async function createUser(userData) {
    try {
        const response = await axios.post('/users', userData);
        return response.data;
    } catch (error) {
        console.error('Erreur création:', error.response.data);
    }
}

// 3. PUT Request
async function updateUser(userId, userData) {
    try {
        const response = await axios.put(`/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error('Erreur mise à jour:', error.response.data);
    }
}

// 4. DELETE Request
async function deleteUser(userId) {
    try {
        await axios.delete(`/users/${userId}`);
        return true;
    } catch (error) {
        console.error('Erreur suppression:', error.response.data);
        return false;
    }
}

// 5. GET avec paramètres
async function searchUsers(searchTerm) {
    try {
        const response = await axios.get('/users/search', {
            params: {
                q: searchTerm
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erreur recherche:', error.response.data);
    }
}

// 6. Requête avec configuration personnalisée
async function customRequest() {
    try {
        const response = await axios({
            method: 'post',
            url: '/data',
            data: {
                name: 'test'
            },
            headers: {
                'Custom-Header': 'value'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erreur requête:', error.response.data);
    }
}

// 7. Upload de fichier
async function uploadFile(file) {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erreur upload:', error.response.data);
    }
}

// 8. Requêtes multiples
async function multipleRequests() {
    try {
        const [users, posts] = await Promise.all([
            axios.get('/users'),
            axios.get('/posts')
        ]);

        return {
            users: users.data,
            posts: posts.data
        };
    } catch (error) {
        console.error('Erreur requêtes multiples:', error);
    }
}

// 9. Intercepteur de requêtes
axios.interceptors.request.use(
    config => {
        // Modification de la requête avant envoi
        console.log('Requête envoyée:', config.url);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 10. Intercepteur de réponses
axios.interceptors.response.use(
    response => {
        // Modification de la réponse
        console.log('Réponse reçue:', response.status);
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);