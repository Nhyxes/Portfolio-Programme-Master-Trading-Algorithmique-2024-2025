#!/bin/bash

# Fonction pour afficher l'aide
display_help() {
    echo "Usage: $0 [OPTIONS] FILE"
    echo "Update the date in a specified Markdown file within the project structure."
    echo
    echo "Options:"
    echo "  -h, --help    Display this help message"
    echo
    echo "Arguments:"
    echo "  FILE          The path to the Markdown file to update (e.g., 01-algorithms/README.md)"
}

# Vérifier si aucun argument n'est fourni ou si l'aide est demandée
if [ $# -eq 0 ] || [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
    display_help
    exit 0
fi

# Chemin vers le fichier Markdown spécifié
MD_FILE="prerequisites/programming/$1"

# Vérifier si le fichier existe
if [ ! -f "$MD_FILE" ]; then
    echo "Error: File $MD_FILE does not exist."
    exit 1
fi

# Date actuelle formatée
CURRENT_DATE=$(date '+%B %d, %Y')

# Expressions régulières pour trouver les sections en anglais et en français
EN_REGEX="\*Last update: .*"
FR_REGEX="\*Dernière mise à jour : .*"

# Remplacer les dates dans les sections
sed -i -E "s/(\*Last update: ).*/\1$CURRENT_DATE/" "$MD_FILE"
sed -i -E "s/(\*Dernière mise à jour : ).*/\1$CURRENT_DATE/" "$MD_FILE"

echo "Date updated in $MD_FILE."