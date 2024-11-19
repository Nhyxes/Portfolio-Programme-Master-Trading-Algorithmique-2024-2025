<?php
// Démonstration des concepts de POO en PHP

// 1. Classe simple
class User {
    // Propriétés
    private $name;
    private $email;
    protected $age;

    // Constructeur
    public function __construct($name, $email, $age) {
        $this->name = $name;
        $this->email = $email;
        $this->age = $age;
    }

    // Getters et Setters
    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
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
}

// 2. Héritage
class Admin extends User {
    private $role = 'admin';

    public function displayInfo() {
        parent::displayInfo();
        echo "Role: {$this->role}\n";
    }

    public function getRole() {
        return $this->role;
    }
}

// 3. Interface
interface Payable {
    public function calculateSalary();
}

// 4. Classe implémentant l'interface
class Employee extends User implements Payable {
    private $baseSalary;

    public function __construct($name, $email, $age, $baseSalary) {
        parent::__construct($name, $email, $age);
        $this->baseSalary = $baseSalary;
    }

    public function calculateSalary() {
        return $this->baseSalary;
    }
}

// 5. Classe avec propriétés et méthodes statiques
class Utils {
    public static $count = 0;

    public static function increment() {
        self::$count++;
    }

    public static function getCount() {
        return self::$count;
    }
}

// Tests et exemples d'utilisation
echo "=== Tests POO ===\n\n";

// Test User
echo "1. Test User basique:\n";
$user = new User("John Doe", "john@example.com", 25);
$user->displayInfo();
echo "\n";

// Test Admin
echo "2. Test Admin (héritage):\n";
$admin = new Admin("Jane Smith", "jane@example.com", 30);
$admin->displayInfo();
echo "Role récupéré: " . $admin->getRole() . "\n\n";

// Test Employee
echo "3. Test Employee (interface):\n";
$employee = new Employee("Bob Wilson", "bob@example.com", 35, 3000);
$employee->displayInfo();
echo "Salaire: " . $employee->calculateSalary() . "€\n\n";

// Test Static
echo "4. Test Méthodes Statiques:\n";
Utils::increment();
Utils::increment();
echo "Compteur: " . Utils::getCount() . "\n\n";

// Démonstration du polymorphisme
echo "5. Test Polymorphisme:\n";
function displayUserInfo(User $user) {
    $user->displayInfo();
}

displayUserInfo($user);
echo "---\n";
displayUserInfo($admin);
echo "---\n";
displayUserInfo($employee);

// 6. Classe avec une constante
class Config {
    const VERSION = "1.0.0";
    const APP_NAME = "Mon Application";

    public static function getAppInfo() {
        return self::APP_NAME . " v" . self::VERSION;
    }
}

echo "\n6. Test Constantes de classe:\n";
echo Config::getAppInfo() . "\n";

// 7. Exemple de classe avec méthode magique
class Product {
    private $data = [];

    public function __set($name, $value) {
        $this->data[$name] = $value;
    }

    public function __get($name) {
        return $this->data[$name] ?? null;
    }
}

echo "\n7. Test Méthodes Magiques:\n";
$product = new Product();
$product->name = "Laptop";
$product->price = 999.99;
echo "Produit: {$product->name}, Prix: {$product->price}€\n";