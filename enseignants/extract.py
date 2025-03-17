import csv
import os

# Chemin du fichier CSV
csv_file = 'enseignants\enseignants.csv'  # Remplacez par le chemin de votre fichier CSV
max_description_length = 100  # Limite du nombre de caractères pour la description

# Créer un répertoire pour stocker les fichiers HTML
os.makedirs("enseignants_details", exist_ok=True)

# Ouvrir et lire le fichier CSV
with open(csv_file, mode='r', encoding='utf-8') as file:
    reader = csv.reader(file, delimiter=';')
    
    # Ignorer l'en-tête si présent
    next(reader)
    
    # Créer un fichier HTML pour sauvegarder les résultats
    with open('enseignants/annonces_enseignants.html', 'w', encoding='utf-8') as output_file:
        output_file.write("<div class='annonces-container'>\n")  # Début du conteneur des annonces
        
        for row in reader:
            prenom, nom, sexe, age, matiere, tarif, description,data_date,date = row
            
            # Limiter la description à un nombre défini de caractères dans la page principale
            description_short = description[:max_description_length] + "..." if len(description) > max_description_length else description
            
            # Générer le code HTML pour chaque ligne dans annonces_enseignants.html
            annonce_html = f"""
            <a href="enseignants_details/{prenom}_{nom}_detail.html" class="annonce-card-link icone-{matiere} ">
                <div class="annonce-card" data-tarif={tarif} data-age={age} data-date={data_date}>
                    <img src="pictures/{prenom}_{nom}.jpg" alt="{prenom} {nom}" class="annonce-photo">
                    <div class="annonce-info">
                        <h2>{prenom} {nom}</h2>
                        <p>Âge : {age} ans</p>
                        <p>{description_short}</p>
                        <p>Tarif/heure : {tarif} €</p>
                    </div>
                    <img src="icone_{matiere}.png" alt="{matiere}" class="annonce-matiere">
                </div>
            </a>   
            """
            output_file.write(annonce_html)  # Ajouter l'annonce dans le fichier HTML
            
            # Générer un fichier HTML détaillé pour chaque enseignant
            detail_html = f"""
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Détail de l'Annonce - TiSkol</title>
    <link rel="stylesheet" href="../styles_prendre.css">
</head>
<body>
    <div class="sidebar">
        <div class="sidebar-header">
            <img src="../logo_black.png" alt="Logo TiSkol" class="sidebar-logo">
            <h1 class="sidebar-title">TiSkol</h1>
        </div>
        <div class="sidebar-button" onclick="window.location.href='../accueil.html'">
            <img src="../logo_accueil_vide.png" alt="Icone 1" class="button-icon">
            <span class="button-text">Accueil</span>
        </div>
        <div class="sidebar-button active">
            <img src="../logo_livre_plein.png" alt="Icone 2" class="button-icon">
            <span class="button-text-select">Prendre des cours</span>
        </div>
        <div class="sidebar-button" onclick="window.location.href='../donner.html'">
            <img src="../logo_suitcase_vide.png" alt="Icone 3" class="button-icon">
            <span class="button-text">Donner des cours</span>
        </div>
        <div class="sidebar-button" onclick="window.location.href='../contact.html'">
            <img src="../logo_contact_vide.png" alt="Icone 4" class="button-icon">
            <span class="button-text">Contact</span>
        </div>
    </div>

    <div class="page-content">
        <h1 class="page-title">Détails de l'annonce</h1>
        <br>
        <!-- Conteneur pour la photo et les détails de l'enseignant -->
        <div class="enseignant-container">
            <div class="enseignant-photo">
                <img src="../pictures/{prenom}_{nom}.jpg" alt="{prenom} {nom}">
            </div>

            <div class="enseignant-detail">
                <h2>{prenom} {nom}</h2>
                    <p class="enseignant-age">Âge : {age} ans</p>
                    <p class="enseignant-matiere">Matière : {matiere}</p>
                    <p class="enseignant-tarif">Tarif : {tarif} €/heure</p>
                    <p class="enseignant-date">Publier le :  {date}</p>
            </div>
            <div class="enseignant-icone">
                <img src="../icone_{matiere}.png" alt="Diane QUEAU">
            </div>
        </div>

        <!-- Description en dessous -->
        <div class="enseignant-description">
            <p>{description}</p>
        </div>

        <button type="button" onclick="toggleForm()">Contacter l'enseignant</button>

        <form action="https://formspree.io/f/mvgkgbay" method="POST" class="course-form">
            <!-- Champ caché pour le nom de l'enseignant -->
            <input type="hidden" id="nom_enseignant" name="nom_enseignant" value="{prenom} {nom}">
            
            <label for="nom_candidat">Votre Nom</label><br>
            <input type="text" id="nom_candidat" name="nom_candidat" placeholder="Nom Prénom" required><br>

            <label for="phone">Votre numéro de téléphone</label><br>
            <input type="tel" id="phone" name="phone" placeholder="XX XX XX XX XX" required maxlength="14"><br>

            <script>
                document.getElementById("phone").addEventListener("input", function (e) {{
                    let value = e.target.value.replace(/\D/g, ""); // Supprime tout sauf les chiffres
                    let formattedValue = value.match(/.{1,2}/g)?.join(" ") || ""; // Regroupe par 2
                    e.target.value = formattedValue;
                }});
            </script>

            <label for="email">Votre Email</label><br>
            <input type="email" id="email" name="email" placeholder="@" required><br>

            <button type="submit">Envoyer</button>
        </form>
    </div>

    <script>
        function toggleForm() {{
            const form = document.querySelector('.course-form');
            const button = document.querySelector('button');
            form.style.display = 'block';
            button.style.display = 'none';
        }}
        
    </script>
</body>
</html>
"""

            
            # Créer un fichier HTML pour chaque enseignant
            with open(f"enseignants_details/{prenom}_{nom}_detail.html", 'w', encoding='utf-8') as detail_file:
                detail_file.write(detail_html)  # Écrire le HTML détaillé dans un fichier

        output_file.write("</div>\n")  # Fermeture du conteneur des annonces

print("Les fichiers HTML ont été générés avec succès !")
