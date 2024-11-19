# Workflow Git de Base

## 🌟 Workflow Quotidien

### 1. Début de Journée
```bash
# Mettre à jour son dépôt local
git pull origin main

# Vérifier l'état du dépôt
git status
```

### 2. Pendant le Développement
```bash
# Vérifier les modifications
git status

# Ajouter les changements
git add .

# Créer un commit
git commit -m "Description des changements"
```

### 3. Fin de Journée
```bash
# Vérifier que tout est commité
git status

# Pousser les changements
git push origin main
```

## 🔄 Cycle de Travail Basique

1. **Récupérer les changements**
   ```bash
   git pull origin main
   ```

2. **Créer/Modifier des fichiers**
    - Éditer le code
    - Tester les changements
    - Vérifier que tout fonctionne

3. **Vérifier les changements**
   ```bash
   git status
   git diff
   ```

4. **Préparer les modifications**
   ```bash
   git add .
   ```

5. **Créer un commit**
   ```bash
   git commit -m "Description"
   ```

6. **Partager les changements**
   ```bash
   git push origin main
   ```

## 📝 Bonnes Pratiques

### Structure des Commits
- Un commit = une modification logique
- Messages clairs et descriptifs
- Vérifier les fichiers inclus

### Fréquence des Commits
- Commiter régulièrement
- Éviter les gros commits
- Garder une trace claire des changements

### Synchronisation
- Pull régulièrement
- Push une fois le code stable
- Communiquer avec l'équipe

## 🚫 À Éviter

1. **Ne jamais :**
    - Push du code non testé
    - Commiter des fichiers sensibles
    - Push directement sur main
    - Modifier l'historique public

2. **Faire attention à :**
    - Les conflits de merge
    - Les fichiers binaires
    - Les gros fichiers
    - Les credentials

## 🆘 Situations Courantes

### En cas de Conflit
1. `git pull origin main`
2. Résoudre les conflits dans les fichiers
3. `git add .`
4. `git commit -m "Résolution conflits"`
5. `git push origin main`

### Annuler des Changements
```bash
# Annuler les changements non commités
git checkout .

# Annuler le dernier commit
git reset HEAD~1
```

## 📈 Progression Typique

1. **Débutant**
    - Commandes de base
    - Push/Pull sur main
    - Commits simples

2. **Intermédiaire**
    - Gestion des conflits
    - Messages de commit structurés
    - Utilisation du .gitignore

3. **Avancé**
    - Branches
    - Pull requests
    - Git flow

---

*Ce workflow représente les bases nécessaires pour démarrer avec Git.*