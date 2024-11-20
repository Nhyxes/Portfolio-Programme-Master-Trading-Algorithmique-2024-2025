#!/bin/bash

# Fonction pour afficher l'aide
display_help() {
    echo "Usage: $0 [OPTIONS]"
    echo "Update the date in the specified sections of the portfolio.md file."
    echo
    echo "Options:"
    echo "  -p, --prerequisites    Update the date in the prerequisites sections"
    echo "  -s, --structure        Update the date in the program structure sections"
    echo "  -h, --help             Display this help message"
}

# Chemin vers le fichier Markdown principal
MD_FILE="portfolio.md"

# Vérifier si le fichier existe
if [ ! -f "$MD_FILE" ]; then
    echo "Error: File $MD_FILE does not exist."
    exit 1
fi

# Vérifier les options fournies
if [ $# -eq 0 ]; then
    display_help
    exit 0
fi

# Date actuelle formatée
CURRENT_DATE=$(date '+%B %d, %Y')
CURRENT_DATE_FR=$(date '+%d %B %Y')

while [ $# -gt 0 ]; do
    case "$1" in
        -p|--prerequisites)
            # Expressions régulières pour trouver les sections des prérequis en anglais et en français
            EN_PREREQUISITES_REGEX="\*Last updated: .*"
            FR_PREREQUISITES_REGEX="\*Mise à jour : .*"

            # Remplacer les dates dans les sections des prérequis
            sed -i -E "s/$EN_PREREQUISITES_REGEX/*Last updated: $CURRENT_DATE/" "$MD_FILE"
            sed -i -E "s/$FR_PREREQUISITES_REGEX/*Mise à jour : $CURRENT_DATE_FR/" "$MD_FILE"

            echo "Prerequisites section dates updated in $MD_FILE."
            ;;
        -s|--structure)
            # Expressions régulières pour trouver les sections de la structure du programme en anglais et en français
            EN_STRUCTURE_REGEX="\*Last updated: \[.*\]"
            FR_STRUCTURE_REGEX="\*Mise à jour : \[.*\]"

            # Remplacer les dates dans les sections de la structure du programme
            sed -i -E "s/$EN_STRUCTURE_REGEX/*Last updated: [$CURRENT_DATE]/" "$MD_FILE"
            sed -i -E "s/$FR_STRUCTURE_REGEX/*Mise à jour : [$CURRENT_DATE_FR]/" "$MD_FILE"

            echo "Program structure section dates updated in $MD_FILE."
            ;;
        -h|--help)
            display_help
            exit 0
            ;;
        *)
            echo "Error: Invalid option $1"
            display_help
            exit 1
            ;;
    esac
    shift
done