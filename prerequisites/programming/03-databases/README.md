# Bases de Données
> Démonstration des compétences en SQL et MongoDB

## 📂 Structure du Dossier
```bash
03-databases/
├── sql/
│   ├── basic-queries.sql  # Requêtes SQL de base
│   └── joins.sql         # Exemples de JOIN
└── mongodb/
    └── basic-operations.js # Opérations MongoDB
```

## ✅ Compétences SQL

### Requêtes de Base
- [x] SELECT, INSERT, UPDATE, DELETE
- [x] WHERE, ORDER BY, GROUP BY
- [x] Filtres et conditions
- [x] Fonctions d'agrégation (COUNT, SUM, AVG)

### Jointures
- [x] INNER JOIN
- [x] LEFT JOIN
- [x] Jointures multiples
- [x] Sous-requêtes simples

## ✅ Compétences MongoDB

### Opérations CRUD
- [x] insertOne/insertMany
- [x] find/findOne
- [x] updateOne/updateMany
- [x] deleteOne/deleteMany

### Requêtes
- [x] Filtres
- [x] Projection
- [x] Sort et Limit
- [x] Opérateurs de comparaison

## 🔍 Exemples Inclus

### SQL
```sql
-- Jointure basique
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id
WHERE orders.total > 100;
```

### MongoDB
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

## 📝 Notes
- Focus sur les opérations courantes
- Requêtes optimisées et claires
- Exemples pratiques et réalistes

---
*Dernière mise à jour : 17 novembre 2024*