<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiskol - Cours Particuliers</title>
    <link rel="stylesheet" href="styles_donner.css">
</head>
<body>
    <div class="rectangle">
        <div class="left-icon-container">
            <div class="icon plus">×</div>
            <div class="icon plus">+</div>
            <div class="icon minus">−</div>
        </div>
        <div class="left-column">
            <section class="formulaire">
                <form id="coursFormleft" action="" method="post">
                    <div class="champ">
                        <label for="nom">Nom complet :</label>
                        <br class="small-break">
                        <input type="text" id="nom" name="nom" required placeholder="Votre nom complet">
                        <hr> <!-- Ligne après le label -->
                        <br>
                    </div>        
                    <div class="champ">
                        <label for="matiere">Matières proposées :</label>
                        <br class="small-break">
                        <select id="matiere" name="matiere" required>
                            <option value="">Sélectionnez une matière</option>
                            <option value="maths">Mathématiques</option>
                            <option value="francais">Français</option>
                            <option value="physique">Physique</option>
                            <option value="anglais">Anglais</option>
                            <option value="informatique">Informatique</option>
                            <option value="histoire">Histoire</option>
                        </select>
                        <hr> <!-- Ligne après le label -->
                        <br>
                    </div>
        
                    <div class="champ">
                        <label for="niveau">Niveau d'enseignement :</label>
                        <br class="small-break">
                        <select id="niveau" name="niveau" required>
                            <option value="">Sélectionnez un niveau</option>
                            <option value="primaire">Primaire</option>
                            <option value="college">Collège</option>
                            <option value="lycee">Lycée</option>
                            <option value="universitaire">Universitaire</option>
                        </select>
                        <hr> <!-- Ligne après le label -->
                        <br>
                    </div>
        
                    <div class="champ">
                        <label for="tarif">Tarif horaire (€) :</label>
                        <br class="small-break">
                        <input type="number" id="tarif" name="tarif" required step="0.01" min="0" placeholder="Ex : 25€">
                        <hr> <!-- Ligne après le label -->
                        <br>
                    </div>
        
                    <div class="champ">
                        <label for="disponibilites">Disponibilités :</label>
                        <br class="small-break">
                        <textarea id="disponibilites" name="disponibilites" required placeholder="Ex : Lundi, Mercredi et Vendredi après-midi"></textarea>
                        <hr> <!-- Ligne après le label -->
                        <br>
                    </div>
        
                    <div class="champ">
                        <label for="description">Commentaire sur votre profil :</label>
                        <br class="small-break">
                        <textarea id="description" name="description" required placeholder="Présentez vous"></textarea>
                        <hr> <!-- Ligne après le label -->
                        <br>
                    </div>
        
                    
                </form>
            </section>
        </div>
        <div class="right-column">
            <form id="coursFormright" action="" method="post">
                <div class="champ">
                    <label for="contact">Email de contact :</label>
                    <br class="small-break">
                    <input type="email" id="contact" name="contact" required placeholder="Votre adresse email">
                    <hr> <!-- Ligne après le label -->
                    <br>
                </div>
    
                <div class="champ">
                    <label for="telephone">Numéro de téléphone :</label>
                    <br class="small-break">
                    <input type="tel" id="telephone" name="telephone" placeholder="Votre numéro">
                    <hr> <!-- Ligne après le label -->
                    <br>
                </div>
    
                <div class="champ">
                    <label for="disponible_en_ligne">Disponible pour des cours en ligne ?</label>
                    <input type="checkbox" id="disponible_en_ligne" name="disponible_en_ligne">
                    <br class="small-break">
                    <hr> <!-- Ligne après le label -->
                    <br>
                </div>
            </form>
            <div class="dropzone" id="dropzone">
                <p>Glissez et déposez votre photo de profil ici</p>
                <input type="file" id="fileInput" style="display:none;" />
                <button type="button" id="deleteButton" style="display:none;">Supprimer la photo</button>
            </div>
            
        </div>
    </div>
    <div class="buttons-container">
        <button id="retour">Retour</button>
        <button id="soumettre" >Soumettre</button>
    </div>

    <script>
        const dropzone = document.querySelector('.dropzone');
        const fileInput = document.querySelector('#fileInput');
        const deleteButton = document.querySelector('#deleteButton');
        let selectedFile = null;  // Pour garder la référence à l'image sélectionnée

        // Empêcher le comportement par défaut lors du glissement
        dropzone.addEventListener('dragover', (event) => {
            event.preventDefault();
            dropzone.classList.add('dragover');
        });

        // Supprimer l'effet de survol
        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('dragover');
        });

        // Gestion du dépôt de fichier
        dropzone.addEventListener('drop', (event) => {
            event.preventDefault();
            dropzone.classList.remove('dragover');

            const files = event.dataTransfer.files;
            if (files.length > 0) {
                selectedFile = files[0];
                updatePhotoPreview();
            }
        });

        // Ouvrir le sélecteur de fichiers
        dropzone.addEventListener('click', () => {
            fileInput.click();
        });

        // Lorsque l'utilisateur sélectionne un fichier via l'input
        fileInput.addEventListener('change', (event) => {
            const files = event.target.files;
            if (files.length > 0) {
                selectedFile = files[0];
                updatePhotoPreview();
            }
        });

        // Fonction pour mettre à jour l'aperçu de la photo et afficher le bouton de suppression
        function updatePhotoPreview() {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgPreview = document.createElement('img');
                imgPreview.src = e.target.result;
                imgPreview.alt = 'Aperçu de la photo';

                // Afficher l'image et le bouton de suppression
                dropzone.innerHTML = ''; // Effacer le texte
                dropzone.appendChild(imgPreview);
                dropzone.appendChild(deleteButton);
                deleteButton.style.display = 'inline-block'; // Afficher le bouton
            };
            reader.readAsDataURL(selectedFile);
        }

        // Gérer le bouton de suppression
        deleteButton.addEventListener('click', () => {
            selectedFile = null; // Réinitialiser la photo sélectionnée
            dropzone.innerHTML = '<p>Glissez et déposez votre photo de profil ici</p>'; // Réinitialiser la zone de dépôt
            dropzone.appendChild(fileInput); // Réajouter l'input caché
            deleteButton.style.display = 'none'; // Cacher le bouton de suppression
        });

        // Fonction pour changer le contenu HTML lorsqu'on clique sur "Retour"
        document.getElementById('retour').addEventListener('click', function() {
    
                window.location.href = 'index.html'; // Remplacez 'nouvelle-page.html' par le nom de votre fichier HTML
        });

        document.getElementById('soumettre').addEventListener('click', function(event) {
            const formLeft = new FormData(document.getElementById('coursFormleft'));
            const formRight = new FormData(document.getElementById('coursFormright'));
            
            formLeft.forEach((value, key) => {
                // Envoi des données au serveur
                fetch('/update-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ key, value })
                })
                .then(response => response.text())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
            });

            formRight.forEach((value, key) => {
                // Envoi des données au serveur
                fetch('/update-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ key, value })
                })
                .then(response => response.text())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
            });
        });



       

        
    </script>
    
</body>
</html>

<?php
if(isset($_POST('soumettre'))){

}
else{
    echo "Vous n'avez pas ..."
}
?>
