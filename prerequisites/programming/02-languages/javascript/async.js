// Démonstration des concepts asynchrones en JavaScript

// 1. Callbacks
console.log('=== Callbacks ===');
function simulerDelai(callback) {
    setTimeout(() => {
        callback('Opération terminée');
    }, 1000);
}

console.log('Début');
simulerDelai((resultat) => {
    console.log(resultat);
});
console.log('Fin');

// 2. Promises
console.log('\n=== Promises ===');
function operation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const succes = true;
            if (succes) {
                resolve('Opération réussie');
            } else {
                reject('Erreur survenue');
            }
        }, 1000);
    });
}

operation()
    .then(resultat => console.log(resultat))
    .catch(erreur => console.error(erreur));

// 3. Async/Await
console.log('\n=== Async/Await ===');
async function executerOperation() {
    try {
        console.log('Début de l\'opération');
        const resultat = await operation();
        console.log(resultat);
        console.log('Fin de l\'opération');
    } catch (erreur) {
        console.error(erreur);
    }
}

executerOperation();

// 4. Fetch API (exemple commenté car nécessite un navigateur)
console.log('\n=== Fetch API (exemple) ===');
/*
async function recupererDonnees() {
    try {
        const reponse = await fetch('https://api.exemple.com/donnees');
        const donnees = await reponse.json();
        console.log(donnees);
    } catch (erreur) {
        console.error('Erreur:', erreur);
    }
}

recupererDonnees();
*/

// 5. Promise.all
console.log('\n=== Promise.all ===');
const promise1 = Promise.resolve('Un');
const promise2 = new Promise(resolve => setTimeout(() => resolve('Deux'), 1000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Trois'), 500));

Promise.all([promise1, promise2, promise3])
    .then(resultats => console.log('Tous les résultats:', resultats))
    .catch(erreur => console.error(erreur));

// 6. Promise.race
console.log('\n=== Promise.race ===');
Promise.race([promise1, promise2, promise3])
    .then(premierResultat => console.log('Premier résultat:', premierResultat))
    .catch(erreur => console.error(erreur));

// 7. Gestion d'erreurs asynchrones
console.log('\n=== Gestion d\'erreurs asynchrones ===');
async function operationAvecErreur() {
    throw new Error('Erreur asynchrone');
}

async function gererErreur() {
    try {
        await operationAvecErreur();
    } catch (erreur) {
        console.error('Erreur attrapée:', erreur.message);
    }
}

gererErreur();