<?php
// Exemple de tri par sélection en PHP
// Démontre la compréhension des boucles, tableaux et fonctions

/**
 * Tri par sélection
 * @param array $arr Tableau à trier
 * @return array Tableau trié
 */
function selectionSort($arr) {
    $length = count($arr);

    for($i = 0; $i < $length - 1; $i++) {
        // Trouver le minimum
        $min_idx = $i;
        for($j = $i + 1; $j < $length; $j++) {
            if($arr[$j] < $arr[$min_idx]) {
                $min_idx = $j;
            }
        }

        // Échanger avec le premier élément non trié
        if($min_idx != $i) {
            $temp = $arr[$i];
            $arr[$i] = $arr[$min_idx];
            $arr[$min_idx] = $temp;
        }
    }

    return $arr;
}

// Tests et exemples
$numbers = [64, 34, 25, 12, 22, 11, 90];
echo "Tableau original: " . implode(", ", $numbers) . "\n";
$sorted = selectionSort($numbers);
echo "Tableau trié: " . implode(", ", $sorted) . "\n\n";

// Tests supplémentaires
$test1 = [1];
$test2 = [];
$test3 = [5, 5, 5, 5];

echo "Tests supplémentaires:\n";
echo "Un seul élément: " . implode(", ", selectionSort($test1)) . "\n";
echo "Tableau vide: " . implode(", ", selectionSort($test2)) . "\n";
echo "Éléments identiques: " . implode(", ", selectionSort($test3)) . "\n";

// Test avec des nombres décimaux
$decimals = [3.14, 1.41, 2.71, 1.73];
echo "Nombres décimaux: " . implode(", ", selectionSort($decimals)) . "\n";