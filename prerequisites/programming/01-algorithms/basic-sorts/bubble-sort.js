// Exemple de tri à bulles en JavaScript
// Démontre la compréhension des boucles, conditions et tableaux

/**
 * Tri à bulles simple
 * @param {Array} arr - Tableau à trier
 * @returns {Array} - Tableau trié
 */
function bubbleSort(arr) {
    const len = arr.length;
    let swapped;

    do {
        swapped = false;
        for(let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Échange des éléments
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while(swapped);

    return arr;
}

// Exemples d'utilisation
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log('Tableau original:', numbers);
console.log('Tableau trié:', bubbleSort(numbers));

// Test avec différents types de tableaux
const test1 = [1];
const test2 = [];
const test3 = [5, 5, 5, 5];

console.log('\nTests supplémentaires:');
console.log('Un seul élément:', bubbleSort(test1));
console.log('Tableau vide:', bubbleSort(test2));
console.log('Éléments identiques:', bubbleSort(test3));

// Exemple avec des nombres décimaux
const decimals = [3.14, 1.41, 2.71, 1.73];
console.log('Nombres décimaux:', bubbleSort(decimals));