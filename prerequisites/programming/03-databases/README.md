# Databases - Basic Examples
# Bases de Données - Exemples de Base

[English](#english) | [Français](#français)

---

## English

Demonstration of SQL and MongoDB skills

### 📂 Folder Structure
```bash
03-databases/
├── sql/
│   ├── basic-queries.sql  # Basic SQL queries
│   └── joins.sql         # JOIN examples
└── mongodb/
    └── basic-operations.js # MongoDB operations
```

### ✅ SQL Skills

#### Basic Queries
- [x] SELECT, INSERT, UPDATE, DELETE
- [x] WHERE, ORDER BY, GROUP BY
- [x] Filters and conditions
- [x] Aggregation functions (COUNT, SUM, AVG)

#### Joins
- [x] INNER JOIN
- [x] LEFT JOIN
- [x] Multiple joins
- [x] Simple subqueries

### ✅ MongoDB Skills

#### CRUD Operations
- [x] insertOne/insertMany
- [x] find/findOne
- [x] updateOne/updateMany
- [x] deleteOne/deleteMany

#### Queries
- [x] Filters
- [x] Projection
- [x] Sort and Limit
- [x] Comparison operators

### 🔍 Included Examples

#### SQL
```sql
-- Basic join
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id
WHERE orders.total > 100;
```

#### MongoDB
```javascript
// Find with filters
db.users.find({
    age: { $gt: 18 },
    city: "Paris"
});

// Update with operators
db.users.updateMany(
    { status: "active" },
    { $set: { verified: true } }
);
```

### 📝 Notes
- Focus on common operations
- Optimized and clear queries
- Practical and realistic examples

---

## Français

Démonstration des compétences en SQL et MongoDB

### 📂 Structure du Dossier
```bash
03-databases/
├── sql/
│   ├── basic-queries.sql  # Requêtes SQL de base
│   └── joins.sql         # Exemples de JOIN
└── mongodb/
    └── basic-operations.js # Opérations MongoDB
```

### ✅ Compétences SQL

#### Requêtes de Base
- [x] SELECT, INSERT, UPDATE, DELETE
- [x] WHERE, ORDER BY, GROUP BY
- [x] Filtres et conditions
- [x] Fonctions d'agrégation (COUNT, SUM, AVG)

#### Jointures
- [x] INNER JOIN
- [x] LEFT JOIN
- [x] Jointures multiples
- [x] Sous-requêtes simples

### ✅ Compétences MongoDB

#### Opérations CRUD
- [x] insertOne/insertMany
- [x] find/findOne
- [x] updateOne/updateMany
- [x] deleteOne/deleteMany

#### Requêtes
- [x] Filtres
- [x] Projection
- [x] Sort et Limit
- [x] Opérateurs de comparaison

### 🔍 Exemples Inclus

#### SQL
```sql
-- Jointure basique
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id
WHERE orders.total > 100;
```

#### MongoDB
```javascript
// Find avec filtres
db.users.find({
    age: { $gt: 18 },
    city: "Paris"
});

// Update avec opérateurs
db.users.updateMany(
    { status: "actif" },
    { $set: { verified: true } }
);
```

### 📝 Notes
- Focus sur les opérations courantes
- Requêtes optimisées et claires
- Exemples pratiques et réalistes

---

*Last update / Dernière mise à jour : 20 novembre 2024*
*Examples are intentionally kept simple to demonstrate understanding of basic concepts / Les exemples sont volontairement simples pour démontrer la compréhension des concepts de base*