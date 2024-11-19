-- Exemples de requêtes SQL de base
-- Démontre la compréhension des opérations CRUD et requêtes simples

-- 1. Création de tables
CREATE TABLE users (
                       id INT PRIMARY KEY AUTO_INCREMENT,
                       name VARCHAR(100) NOT NULL,
                       email VARCHAR(100) UNIQUE,
                       age INT,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
                        id INT PRIMARY KEY AUTO_INCREMENT,
                        user_id INT,
                        total DECIMAL(10,2),
                        status VARCHAR(50),
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 2. Insertions (CREATE)
-- Insertion simple
INSERT INTO users (name, email, age)
VALUES ('John Doe', 'john@example.com', 25);

-- Insertion multiple
INSERT INTO users (name, email, age) VALUES
                                         ('Jane Smith', 'jane@example.com', 30),
                                         ('Bob Wilson', 'bob@example.com', 35);

-- 3. Sélections (READ)
-- Sélection basique
SELECT * FROM users;

-- Sélection avec conditions
SELECT name, email
FROM users
WHERE age > 25;

-- Sélection avec LIKE
SELECT * FROM users
WHERE email LIKE '%@example.com';

-- Limiter les résultats
SELECT * FROM users
                  LIMIT 5;

-- 4. Mises à jour (UPDATE)
-- Mise à jour simple
UPDATE users
SET age = 26
WHERE name = 'John Doe';

-- Mise à jour multiple
UPDATE users
SET status = 'active'
WHERE age >= 18;

-- 5. Suppressions (DELETE)
-- Suppression avec condition
DELETE FROM users
WHERE age < 18;

-- 6. Agrégations simples
-- Compter les utilisateurs
SELECT COUNT(*) as total_users
FROM users;

-- Moyenne d'âge
SELECT AVG(age) as moyenne_age
FROM users;

-- 7. Regroupements
-- Grouper par âge
SELECT age, COUNT(*) as nombre
FROM users
GROUP BY age;

-- 8. Tris
-- Tri simple
SELECT * FROM users
ORDER BY name ASC;

-- Tri multiple
SELECT * FROM users
ORDER BY age DESC, name ASC;

-- 9. Filtres avec WHERE
-- Conditions multiples
SELECT * FROM users
WHERE age >= 18
  AND email LIKE '%@example.com';

-- 10. Requêtes avec NULL
-- Trouver les emails manquants
SELECT * FROM users
WHERE email IS NULL;