# Algorithmes - Exemples et Concepts de Base

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
*Les exemples sont volontairement simples pour démontrer la compréhension des concepts de base*