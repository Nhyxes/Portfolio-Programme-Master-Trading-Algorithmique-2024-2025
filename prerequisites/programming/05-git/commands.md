# Commandes Git Essentielles

## 🚀 Configuration Initiale

```bash
# Configurer son identité
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"

# Créer un nouveau dépôt
git init

# Cloner un dépôt existant
git clone https://github.com/utilisateur/repo.git
```

## 📝 Commandes de Base

### Gestion des Fichiers
```bash
# Voir l'état des fichiers
git status

# Ajouter des fichiers
git add nomfichier.js          # Un fichier spécifique
git add .                      # Tous les fichiers
git add *.js                   # Tous les fichiers .js

# Retirer un fichier du staging
git reset nomfichier.js
```

### Commits
```bash
# Créer un commit
git commit -m "Description du commit"

# Commit avec ajout des fichiers modifiés
git commit -am "Description du commit"

# Modifier le dernier commit
git commit --amend
```

### Synchronisation
```bash
# Récupérer les changements
git pull origin main

# Envoyer les changements
git push origin main

# Ajouter un remote
git remote add origin https://github.com/user/repo.git
```

## 🔍 Consultation

```bash
# Voir l'historique
git log
git log --oneline    # Version condensée

# Voir les différences
git diff                    # Changements non stagés
git diff --staged          # Changements stagés
```

## ⚠️ Annulation des Changements

```bash
# Annuler les modifications d'un fichier
git checkout -- nomfichier.js

# Annuler le dernier commit (garde les changements)
git reset HEAD~1

# Supprimer les changements non commités
git reset --hard HEAD
```

## 💾 Fichiers à Ignorer (.gitignore)

```bash
# Exemple de .gitignore
node_modules/
.env
*.log
dist/
```

## 🏷️ Tags

```bash
# Créer un tag
git tag v1.0.0

# Lister les tags
git tag

# Supprimer un tag
git tag -d v1.0.0
```

## 📋 Informations Utiles

```bash
# Voir la configuration
git config --list

# Aide sur une commande
git help commit
git commit --help
```

## ✨ Bonnes Pratiques

1. **Messages de Commit**
    - Utiliser l'impératif : "Add feature" plutôt que "Added feature"
    - Première ligne courte (50 caractères max)
    - Décrire le "pourquoi" plutôt que le "quoi"

2. **Commits**
    - Faire des commits atomiques
    - Commiter régulièrement
    - Vérifier les changements avant de commiter

3. **Pull/Push**
    - Toujours pull avant de push
    - Vérifier les conflits avant de push

---

*Ces commandes représentent les opérations Git les plus courantes pour débuter.*