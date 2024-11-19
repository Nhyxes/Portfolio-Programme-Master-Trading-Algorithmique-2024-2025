// Démonstration des concepts de base en JavaScript

// 1. Variables et Types de données
console.log('=== Variables et Types ===');
let nombre = 42;
const pi = 3.14;
let texte = "Hello World";
let estVrai = true;
let tableau = [1, 2, 3];
let objet = { nom: "John", age: 25 };

console.log(typeof nombre, nombre);
console.log(typeof texte, texte);
console.log(typeof estVrai, estVrai);
console.log(typeof tableau, tableau);
console.log(typeof objet, objet);

// 2. Opérations sur les chaînes
console.log('\n=== Manipulation de chaînes ===');
let prenom = "John";
let nom = "Doe";
let nomComplet = `${prenom} ${nom}`;  // Template literal
console.log(nomComplet);
console.log(nomComplet.toUpperCase());
console.log(nomComplet.length);

// 3. Fonctions
console.log('\n=== Fonctions ===');
// Fonction classique
function additionner(a, b) {
    return a + b;
}

// Arrow function
const multiplier = (a, b) => a * b;

console.log(additionner(5, 3));
console.log(multiplier(4, 2));

// 4. Conditions
console.log('\n=== Conditions ===');
let age = 20;

if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}

// Opérateur ternaire
let statut = age >= 18 ? "Majeur" : "Mineur";
console.log(statut);

// 5. Boucles
console.log('\n=== Boucles ===');
// For classique
for (let i = 0; i < 3; i++) {
    console.log(`Itération ${i}`);
}

// ForEach sur tableau
let fruits = ["pomme", "banane", "orange"];
fruits.forEach(fruit => console.log(fruit));

// 6. Manipulation du DOM
console.log('\n=== DOM (exemple commenté) ===');
/*
document.addEventListener('DOMContentLoaded', () => {
    // Sélection d'éléments
    const element = document.querySelector('#monId');
    const elements = document.querySelectorAll('.maClasse');

    // Modification du contenu
    element.textContent = 'Nouveau texte';
    element.innerHTML = '<span>HTML</span>';

    // Gestion des événements
    element.addEventListener('click', (e) => {
        console.log('Cliqué!', e.target);
    });

    // Manipulation des classes
    element.classList.add('active');
    element.classList.remove('inactive');

    // Modification des styles
    element.style.backgroundColor = 'blue';
});
*/

// 7. Gestion d'erreurs
console.log('\n=== Gestion d\'erreurs ===');
try {
    // Code qui pourrait générer une erreur
    let resultat = 10 / 0;
    console.log(resultat);  // Infinity en JavaScript

    throw new Error('Une erreur personnalisée');
} catch (erreur) {
    console.error('Erreur attrapée:', erreur.message);
} finally {
    console.log('Cette partie s\'exécute toujours');
}

// 8. Les méthodes de tableaux courantes
console.log('\n=== Méthodes de tableaux ===');
let nombres = [1, 2, 3, 4, 5];

let doubles = nombres.map(n => n * 2);
console.log('Map:', doubles);

let pairs = nombres.filter(n => n % 2 === 0);
console.log('Filter:', pairs);

let somme = nombres.reduce((acc, curr) => acc + curr, 0);
console.log('Reduce:', somme);