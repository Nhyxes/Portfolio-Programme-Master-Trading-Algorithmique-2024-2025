<?php
// Démonstration des concepts de base en PHP

// 1. Variables et Types de données
echo "=== Variables et Types ===\n";
$nombre = 42;
$pi = 3.14;
$texte = "Hello World";
$estVrai = true;
$tableau = [1, 2, 3];
$tableau_associatif = ["nom" => "John", "age" => 25];

var_dump($nombre);
var_dump($texte);
var_dump($estVrai);
var_dump($tableau);
var_dump($tableau_associatif);

// 2. Chaînes de caractères
echo "\n=== Manipulation de chaînes ===\n";
$prenom = "John";
$nom = "Doe";
$nom_complet = $prenom . " " . $nom;  // Concaténation
echo $nom_complet . "\n";
echo strtoupper($nom_complet) . "\n";
echo strlen($nom_complet) . "\n";

// 3. Fonctions
echo "\n=== Fonctions ===\n";
function additionner($a, $b) {
    return $a + $b;
}

function multiplier($a, $b) {
    return $a * $b;
}

echo additionner(5, 3) . "\n";
echo multiplier(4, 2) . "\n";

// 4. Conditions
echo "\n=== Conditions ===\n";
$age = 20;

if ($age >= 18) {
    echo "Majeur\n";
} else {
    echo "Mineur\n";
}

// Opérateur ternaire
$statut = ($age >= 18) ? "Majeur" : "Mineur";
echo $statut . "\n";

// 5. Boucles
echo "\n=== Boucles ===\n";
// For classique
for ($i = 0; $i < 3; $i++) {
    echo "Itération $i\n";
}

// Foreach sur tableau
$fruits = ["pomme", "banane", "orange"];
foreach ($fruits as $fruit) {
    echo $fruit . "\n";
}

// 6. Tableaux
echo "\n=== Manipulation de tableaux ===\n";
$nombres = [1, 2, 3, 4, 5];

// Ajout d'éléments
array_push($nombres, 6);
$nombres[] = 7;

// Fonctions de tableau
echo "Somme: " . array_sum($nombres) . "\n";
echo "Moyenne: " . array_sum($nombres) / count($nombres) . "\n";

// 7. Formulaires (exemple commenté)
/*
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'] ?? '';
    $email = $_POST['email'] ?? '';

    echo "Nom soumis: " . htmlspecialchars($nom) . "\n";
    echo "Email soumis: " . htmlspecialchars($email) . "\n";
}
*/

// 8. Gestion d'erreurs
echo "\n=== Gestion d'erreurs ===\n";
try {
    // Code qui pourrait générer une erreur
    $resultat = 10 / 0;  // Division par zéro
    throw new Exception("Une erreur personnalisée");
} catch (Exception $e) {
    echo "Erreur attrapée: " . $e->getMessage() . "\n";
} finally {
    echo "Cette partie s'exécute toujours\n";
}

// 9. Fonctions de tableau avancées
echo "\n=== Fonctions de tableau avancées ===\n";
$nombres = [1, 2, 3, 4, 5];

// Map
$doubles = array_map(function($n) {
    return $n * 2;
}, $nombres);
echo "Map: " . implode(", ", $doubles) . "\n";

// Filter
$pairs = array_filter($nombres, function($n) {
    return $n % 2 == 0;
});
echo "Filter: " . implode(", ", $pairs) . "\n";

// Reduce
$somme = array_reduce($nombres, function($acc, $curr) {
    return $acc + $curr;
}, 0);
echo "Reduce: $somme\n";