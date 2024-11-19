// Exemples d'opérations MongoDB de base
// Démontre la compréhension des opérations CRUD en MongoDB

// 1. Création (INSERT)
// Insertion d'un document
db.users.insertOne({
    name: "John Doe",
    email: "john@example.com",
    age: 25,
    createdAt: new Date()
});

// Insertion multiple
db.users.insertMany([
    {
        name: "Jane Smith",
        email: "jane@example.com",
        age: 30
    },
    {
        name: "Bob Wilson",
        email: "bob@example.com",
        age: 35
    }
]);

// 2. Lecture (FIND)
// Trouver tous les documents
db.users.find();

// Trouver avec condition
db.users.find({ age: { $gt: 25 } });

// Trouver un seul document
db.users.findOne({ email: "john@example.com" });

// 3. Mise à jour (UPDATE)
// Mise à jour d'un document
db.users.updateOne(
    { name: "John Doe" },
    { $set: { age: 26 } }
);

// Mise à jour multiple
db.users.updateMany(
    { age: { $gte: 18 } },
    { $set: { status: "active" } }
);

// 4. Suppression (DELETE)
// Supprimer un document
db.users.deleteOne({ email: "john@example.com" });

// Supprimer plusieurs documents
db.users.deleteMany({ age: { $lt: 18 } });

// 5. Requêtes avec filtres
// Opérateurs de comparaison
db.users.find({
    age: { $gte: 25, $lte: 50 }
});

// Opérateurs logiques
db.users.find({
    $or: [
        { age: { $lt: 18 } },
        { age: { $gt: 65 } }
    ]
});

// 6. Projection (sélectionner certains champs)
db.users.find(
    {},
    { name: 1, email: 1, _id: 0 }
);

// 7. Tri et limite
// Tri simple
db.users.find().sort({ age: 1 });  // 1 pour ASC, -1 pour DESC

// Avec limite
db.users.find().sort({ age: -1 }).limit(5);

// 8. Comptage
db.users.count({ age: { $gt: 25 } });

// 9. Existence de champs
db.users.find({ email: { $exists: true } });

// 10. Recherche textuelle simple
db.users.find({
    name: { $regex: "John", $options: "i" }
});

// 11. Collection orders
// Création de commandes
db.orders.insertMany([
    {
        userId: ObjectId("..."),
        total: 99.99,
        items: ["product1", "product2"]
    },
    {
        userId: ObjectId("..."),
        total: 150.00,
        items: ["product3"]
    }
]);

// 12. Requête simple avec lookup (similaire à JOIN)
db.orders.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user"
        }
    }
]);