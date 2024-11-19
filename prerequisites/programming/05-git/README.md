# Git - Gestion de Version
> Démonstration des compétences de base en Git

## 📂 Structure du Dossier
```bash
05-git/
├── commands.md     # Commandes Git essentielles
└── workflow.md     # Workflow Git basique
```

## ✅ Compétences Git

### Commandes de Base
- [x] init/clone
- [x] add/commit
- [x] push/pull
- [x] status/log
- [x] checkout

### Configuration
- [x] git config
- [x] .gitignore
- [x] remote repositories
- [x] SSH keys

### Workflow
- [x] Workflow quotidien
- [x] Gestion des modifications
- [x] Synchronisation
- [x] Bonnes pratiques

## 🔍 Exemples Inclus

### Configuration Initiale
```bash
# Configuration de base
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"

# Création repository
git init
git remote add origin [url]
```

### Workflow Quotidien
```bash
# Début de journée
git pull origin main

# Pendant le développement
git status
git add .
git commit -m "Description"

# Fin de journée
git push origin main
```

## 📝 Notes
- Focus sur les commandes essentielles
- Workflow simple et efficace
- Bonnes pratiques de base
- Exemples pratiques

## 🎯 Objectifs
1. Comprendre les commandes de base
2. Maîtriser le workflow quotidien
3. Appliquer les bonnes pratiques
4. Gérer ses projets efficacement

## ⚠️ Points Importants
- Toujours pull avant de push
- Messages de commit clairs
- Vérifier les fichiers avant commit
- Sauvegarder régulièrement

---
*Dernière mise à jour : 17 novembre 2024*