-- noinspection SqlNoDataSourceInspectionForFile

-- Exemples de JOINs SQL
-- Démontre la compréhension des jointures de base

-- 1. INNER JOIN basique
-- Récupérer les commandes avec les infos utilisateurs
SELECT users.name, orders.total, orders.status
FROM users
         INNER JOIN orders ON users.id = orders.user_id;

-- 2. LEFT JOIN
-- Tous les utilisateurs, même ceux sans commandes
SELECT users.name,
       COALESCE(orders.total, 0) as total
FROM users
         LEFT JOIN orders ON users.id = orders.user_id;

-- 3. Jointure avec conditions
SELECT users.name, orders.total
FROM users
         INNER JOIN orders ON users.id = orders.user_id
WHERE orders.total > 100;

-- 4. Jointure avec agrégation
-- Total des commandes par utilisateur
SELECT users.name,
       COUNT(orders.id) as nombre_commandes,
       SUM(orders.total) as total_achats
FROM users
         LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.name;

-- 5. Multiple JOINs
CREATE TABLE products (
                          id INT PRIMARY KEY AUTO_INCREMENT,
                          name VARCHAR(100),
                          price DECIMAL(10,2)
);

CREATE TABLE order_items (
                             order_id INT,
                             product_id INT,
                             quantity INT,
                             FOREIGN KEY (order_id) REFERENCES orders(id),
                             FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Récupérer les détails complets des commandes
SELECT users.name as client,
       orders.id as commande_id,
       products.name as produit,
       order_items.quantity as quantite
FROM users
         INNER JOIN orders ON users.id = orders.user_id
         INNER JOIN order_items ON orders.id = order_items.order_id
         INNER JOIN products ON order_items.product_id = products.id;

-- 6. Sous-requêtes avec JOIN
-- Utilisateurs ayant fait des commandes supérieures à la moyenne
SELECT DISTINCT users.name
FROM users
         INNER JOIN orders ON users.id = orders.user_id
WHERE orders.total > (
    SELECT AVG(total) FROM orders
);

-- 7. Self JOIN (exemple avec une table employees)
CREATE TABLE employees (
                           id INT PRIMARY KEY,
                           name VARCHAR(100),
                           manager_id INT
);

-- Trouver les employés et leurs managers
SELECT e1.name as employe,
       e2.name as manager
FROM employees e1
         LEFT JOIN employees e2 ON e1.manager_id = e2.id;