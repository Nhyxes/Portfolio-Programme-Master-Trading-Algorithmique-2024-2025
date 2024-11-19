<?php
// Exemples de manipulation d'objets en PHP
// Démontre la compréhension de la POO basique

// 1. Classe simple avec propriétés et méthodes
class User {
    // Propriétés
    private $name;
    private $email;
    private $age;

    // Constructeur
    public function __construct($name, $email, $age) {
        $this->name = $name;
        $this->email = $email;
        $this->age = $age;
    }

    // Getters
    public function getName() {
        return $this->name;
    }

    public function getEmail() {
        return $this->email;
    }

    // Méthode pour afficher les infos
    public function displayInfo() {
        echo "Nom: {$this->name}\n";
        echo "Email: {$this->email}\n";
        echo "Age: {$this->age} ans\n";
    }

    // Méthode pour vérifier si majeur
    public function isMajeur() {
        return $this->age >= 18;
    }
}

// 2. Utilisation de la classe
echo "Test de la classe User:\n";
$user1 = new User("Jean Dupont", "jean@exemple.com", 25);
$user1->displayInfo();
echo "Est majeur? " . ($user1->isMajeur() ? "Oui" : "Non") . "\n\n";

// 3. Tableau associatif (similaire à un objet JS)
$book = [
    "titre" => "Le Guide du PHP",
    "auteur" => "John Doe",
    "annee" => 2024
];

echo "Manipulation tableau associatif:\n";
echo "Titre: " . $book["titre"] . "\n";
echo "Auteur: " . $book["auteur"] . "\n\n";

// 4. Parcours de tableau associatif
echo "Parcours du tableau associatif:\n";
foreach($book as $key => $value) {
    echo "$key: $value\n";
}
echo "\n";

// 5. Classe avec tableau
class Library {
    private $books = [];

    // Ajouter un livre
    public function addBook($title, $author) {
        $this->books[] = [
            "title" => $title,
            "author" => $author
        ];
    }

    // Afficher tous les livres
    public function displayBooks() {
        foreach($this->books as $book) {
            echo "'{$book['title']}' par {$book['author']}\n";
        }
    }

    // Compter les livres
    public function getBookCount() {
        return count($this->books);
    }
}

// 6. Utilisation de la classe Library
echo "Test de la classe Library:\n";
$library = new Library();
$library->addBook("PHP pour les Nuls", "Jane Smith");
$library->addBook("JavaScript Avancé", "Bob Wilson");
$library->displayBooks();
echo "Nombre total de livres: " . $library->getBookCount() . "\n";