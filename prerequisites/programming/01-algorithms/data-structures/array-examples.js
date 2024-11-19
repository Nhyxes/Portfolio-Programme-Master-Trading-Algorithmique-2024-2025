// Exemples de manipulation de tableaux en JavaScript
// Démontre la compréhension des opérations sur les tableaux

// 1. Création et manipulation de base
const fruits = ['pomme', 'banane', 'orange'];

// Ajout d'éléments
fruits.push('fraise');              // Ajout à la fin
fruits.unshift('kiwi');             // Ajout au début
console.log('Tableau après ajouts:', fruits);

// Suppression d'éléments
const dernierFruit = fruits.pop();   // Suppression du dernier
const premierFruit = fruits.shift(); // Suppression du premier
console.log('Tableau après suppressions:', fruits);

// 2. Méthodes de parcours
console.log('\nParcours du tableau:');
// forEach
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// 3. Transformation de tableau
const numbers = [1, 2, 3, 4, 5];

// map: doubler chaque nombre
const doubles = numbers.map(num => num * 2);
console.log('\nNombres doublés:', doubles);

// filter: nombres pairs
const pairs = numbers.filter(num => num % 2 === 0);
console.log('Nombres pairs:', pairs);

// reduce: somme
const somme = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Somme des nombres:', somme);

// 4. Recherche dans un tableau
const fruits2 = ['pomme', 'banane', 'orange', 'pomme'];

// indexOf: première occurrence
console.log('\nRecherche dans le tableau:');
console.log('Index de banane:', fruits2.indexOf('banane'));

// includes: vérifier présence
console.log('Contient orange?', fruits2.includes('orange'));

// find: premier élément correspondant
const numbers2 = [5, 12, 8, 130, 44];
const premier = numbers2.find(num => num > 10);
console.log('Premier nombre > 10:', premier);

// 5. Tri et inversion
const lettres = ['b', 'd', 'a', 'c'];
console.log('\nManipulation d\'ordre:');
console.log('Tri alphabétique:', lettres.sort());
console.log('Inversion:', lettres.reverse());

// 6. Opérations sur plusieurs tableaux
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log('\nOpérations sur plusieurs tableaux:');
console.log('Concaténation:', arr1.concat(arr2));
console.log('Spread operator:', [...arr1, ...arr2]);

// 7. Extraction de sous-tableau
const nombres = [0, 1, 2, 3, 4, 5];
console.log('\nExtractions:');
console.log('Slice (2-4):', nombres.slice(2, 4));
console.log('Derniers 3:', nombres.slice(-3));