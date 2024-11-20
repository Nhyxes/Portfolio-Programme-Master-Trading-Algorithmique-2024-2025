# Algorithms - Basic Concepts and Examples
# Algorithmes - Exemples et Concepts de Base

[English](#english) | [Français](#français)

---

## English

This folder contains examples demonstrating understanding of fundamental algorithmic concepts.

### 📋 Validated Concepts

#### 1. Types and Variables
- [x] Numbers (integers, decimals)
- [x] Strings
- [x] Booleans
- [x] Simple and associative arrays
- [x] Objects

#### 2. Control Structures
- [x] If/Else
- [x] Switch
- [x] For Loops
- [x] While Loops
- [x] Break/Continue

#### 3. Functions
- [x] Declaration
- [x] Parameters
- [x] Return values
- [x] Variable scope

### 📂 Folder Structure
```bash
01-algorithms/
├── basic-sorts/
│   ├── bubble-sort.js     # Bubble sort in JavaScript
│   └── selection-sort.php # Selection sort in PHP
└── data-structures/
    ├── array-examples.js  # Array manipulation in JS
    └── object-examples.php # Object manipulation in PHP
```

### 💡 Included Examples

#### Bubble Sort (bubble-sort.js)
```javascript
// Simple bubble sort example
const numbers = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(numbers);
// Result: [11, 12, 22, 25, 34, 64, 90]
```

#### Array Manipulation (array-examples.js)
```javascript
// Array manipulation examples
const fruits = ['apple', 'banana', 'orange'];
fruits.push('strawberry');
// fruits.length === 4
```

#### Functions (selection-sort.php)
```php
function swapElements($arr, $i, $j) {
    $temp = $arr[$i];
    $arr[$i] = $arr[$j];
    $arr[$j] = $temp;
}
```

### ✅ Validated Exercises

1. **Basic Manipulation**
   - [x] Reverse an array
   - [x] Find largest element
   - [x] Calculate average

2. **Sorting Algorithms**
   - [x] Bubble sort
   - [x] Selection sort

3. **Search**
   - [x] Simple search
   - [x] Index search

### 🎯 Achieved Goals
- Understanding fundamental data types ✅
- Mastering control structures ✅
- Implementing simple sorting algorithms ✅
- Manipulating arrays and objects ✅

### 📝 Usage Notes

1. **To test sorts:**
   ```bash
   node basic-sorts/bubble-sort.js
   php basic-sorts/selection-sort.php
   ```

2. **For structure examples:**
   ```bash
   node data-structures/array-examples.js
   php data-structures/object-examples.php
   ```

---

## Français

Ce dossier contient les exemples démontrant la compréhension des concepts algorithmiques fondamentaux.

## 📋 Concepts Validés

### 1. Types et Variables
- [x] Nombres (entiers, décimaux)
- [x] Chaînes de caractères
- [x] Booléens
- [x] Tableaux simples et associatifs
- [x] Objets

### 2. Structures de Contrôle
- [x] If/Else
- [x] Switch
- [x] Boucles For
- [x] Boucles While
- [x] Break/Continue

### 3. Fonctions
- [x] Déclaration
- [x] Paramètres
- [x] Retour de valeurs
- [x] Portée des variables

## 📂 Structure du Dossier

```bash
01-algorithms/
├── basic-sorts/
│   ├── bubble-sort.js     # Tri à bulles en JavaScript
│   └── selection-sort.php # Tri par sélection en PHP
└── data-structures/
    ├── array-examples.js  # Manipulation de tableaux en JS
    └── object-examples.php # Manipulation d'objets en PHP
```

## 💡 Exemples Inclus

### Tri à Bulles (bubble-sort.js)
```javascript
// Exemple de tri à bulles simple
const numbers = [64, 34, 25, 12, 22, 11, 90];
triabulles(numbers);
// Résultat: [11, 12, 22, 25, 34, 64, 90]
```

### Manipulation de Tableaux (array-examples.js)
```javascript
// Exemples de manipulation de tableaux
const fruits = ['pomme', 'banane', 'orange'];
fruits.push('fraise');
// fruits.length === 4
```

### Fonctions (selection-sort.php)
```php
function echangerElements($arr, $i, $j) {
    $temp = $arr[$i];
    $arr[$i] = $arr[$j];
    $arr[$j] = $temp;
}
```

## ✅ Exercices Validés

1. **Manipulation de Base**
   - [x] Inverser un tableau
   - [x] Trouver le plus grand élément
   - [x] Calculer une moyenne

2. **Algorithmes de Tri**
   - [x] Tri à bulles
   - [x] Tri par sélection

3. **Recherche**
   - [x] Recherche simple
   - [x] Recherche par index

## 🎯 Objectifs Atteints

- Comprendre les types de données fondamentaux ✅
- Maîtriser les structures de contrôle ✅
- Implémenter des algorithmes de tri simples ✅
- Manipuler des tableaux et objets ✅

## 📝 Notes d'Utilisation

1. **Pour tester les tris :**
   ```bash
   node basic-sorts/bubble-sort.js
   php basic-sorts/selection-sort.php
   ```

2. **Pour les exemples de structures :**
   ```bash
   node data-structures/array-examples.js
   php data-structures/object-examples.php
   ```


---

*Last update / Dernière mise à jour : 20 novembre 2024*
*Examples are intentionally kept simple to demonstrate understanding of basic concepts / Les exemples sont volontairement simples pour démontrer la compréhension des concepts de base*