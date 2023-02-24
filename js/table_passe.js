// On crée un élément de tableau et un élément de corps de tableau
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// On ajoute une cellule vide à la première ligne, qui sera utilisée pour afficher les numéros de colonnes
//tbody.appendChild(document.createElement('td')).classList.add('empty');

// On boucle à travers les 14 lignes du tableau
for (let i = 13; i >= 0; i--) {
  const tr = document.createElement('tr');  // On crée une nouvelle ligne
  const td = document.createElement('td');  // On ajoute une cellule pour afficher le numéro de ligne
  td.textContent = i;
  tr.appendChild(td);

  // On boucle à travers les 14 colonnes de chaque ligne et on ajoute une cellule vide à chaque colonne
  for (let j = 1; j < 15; j++) {
    tr.appendChild(document.createElement('td'));
  }
  // On ajoute la ligne au corps de tableau
  tbody.appendChild(tr);
}

// On crée une dernière ligne pour afficher les numéros de colonnes dans la dernière ligne
const tr = document.createElement('tr');
// On ajoute une cellule vide à la première colonne de cette ligne
tr.appendChild(document.createElement('td')).classList.add('empty');

// On boucle à travers les 14 colonnes de la dernière ligne et on ajoute une cellule pour chaque colonne
for (let i = 0; i < 14; i++) {
  const td = document.createElement('td');
  td.textContent = i;
  tr.appendChild(td);
}

// On ajoute la dernière ligne au corps de tableau
tbody.appendChild(tr);

// On ajoute une ligne vide en bas du tableau pour l'affichage de la passe
for (let i = 0; i < 16; i++) {
  const td = document.createElement('td');
  table.appendChild(td);
}

// On ajoute le corps de tableau au tableau
table.appendChild(tbody);

// On ajoute le tableau au corps principal de la page HTML
document.querySelector('main').appendChild(table);



//Selection case pour la passe
// On sélectionne toutes les cellules du tableau
var cells = document.getElementsByTagName('td');
// On initialise la cellule courante à null
var currentCell = null;
// On boucle à travers toutes les cellules et on ajoute un écouteur d'événement de clic à chaque cellule
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
      // Si une cellule est déjà sélectionnée, on lui enlève sa classe "clicked"
      if (currentCell !== null) {
      currentCell.classList.remove('clicked');
        }
        // On ajoute la classe "clicked" à la cellule cliquée
        this.classList.add('clicked');
        // On définit la cellule cliquée comme la nouvelle cellule courante
        currentCell = this;
    });
}