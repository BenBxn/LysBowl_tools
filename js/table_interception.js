// Récupération des élements table et tbody dans le HTML
var tableau = document.getElementById("tableau");
var tbody = tableau.getElementsByTagName("tbody")[0];

// Création des lignes et des cellules du tableau
for (var j = 0; j < 26; j++) { // Crée 26 lignes
    var row = document.createElement("tr"); // Crée une nouvelle ligne
    for (var i = 0; i < 15; i++) { // Crée 15 cellules par ligne
        var cell = document.createElement("td"); // Crée une nouvelle cellule

        // Ajoute le texte de la cellule en utilisant le code ASCII
        // Ex: A1, A2, A3, ..., B1, B2, B3, ...
        cell.textContent = String.fromCharCode(65 + j) + (i+1);

        // Ajoute les attributs data-row et data-col pour stocker la position de la cellule
        cell.setAttribute("data-row", String.fromCharCode(65 + j));
        cell.setAttribute("data-col",i + 1); 

        // Ajoute la cellule à la ligne
        row.appendChild(cell);
    }
    // Ajoute la ligne au tableau
    tbody.appendChild(row);
}

// Fonction pour sélectionner les éléments et les enregistrer
// Déclaration d'un tableau pour stocker les cellules sélectionnées
var selectedCells = [];
function selectElement(cell) {
    if (selectedCells.length >= 2) {// Si deux cellules sont déjà sélectionnées, on efface la sélection actuelle
        clearSelection();
    }
    if (!cell.classList.contains("selected")) {// Si la cellule cliquée n'a pas déjà été sélectionnée
        cell.classList.add("selected");//On ajoute la classe "selected" à la cellule
        selectedCells.push(cell); // On ajoute la cellule au tableau des cellules sélectionnées
		if (selectedCells.length == 1) { // Si c'est la première cellule sélectionnée
            var element1 = selectedCells[0];// On récupère la première cellule sélectionnée
			element1.innerHTML = "<img src='img/logo/passe_logo.png' alt='passeur' />";// On ajoute l'image du passeur à la cellule
			
        } else if (selectedCells.length == 2) {// Si c'est la deuxième cellule sélectionnée
            var element1 = selectedCells[0];// On récupère la première cellule sélectionnée
            var element2 = selectedCells[1];// On récupère la Deuxieme cellule sélectionnée
			element1.setAttribute('id', 'data_passe');// On ajoute un attribut "id" à la première cellule sélectionnée
            var col1 = element1.getAttribute("data-col"); // On récupère la colonne de la première cellule sélectionnée
            var row1 = element1.getAttribute("data-row"); // On récupère la ligne de la première cellule sélectionnée
			element2.setAttribute('id', 'data_recep');// On ajoute un attribut "id" à la deuxième cellule sélectionnée
            var col2 = element2.getAttribute("data-col"); // On récupère la colonne de la deuxième cellule sélectionnée
            var row2 = element2.getAttribute("data-row"); // On récupère la ligne de la deuxième cellule sélectionnée
            element2.innerHTML = "<img src='img/logo/ball_logo.png' alt='ballon' />";// On ajoute l'image du ballon à la cellule
			// Affiche dans la console la position des cellules sélectionnées
			console.log("Premier élément : " + row1 + col1);
			console.log("Deuxième élément : " + row2 + col2);
			// On met à jour le texte de la case "Lanceur"
			document.getElementById("case_lanceur").textContent = ("Lanceur : " + row1 + col1);
			document.getElementById("case_receveur").textContent = ("Receveur : " + row2 + col2);
			// Remplissage des champs d'entrée
			document.forms["pass"]["thrower"].value = row1 + col1;
			document.forms["pass"]["catcher"].value = row2 + col2;
		}
	}
}

// Fonction pour effacer la sélection
function clearSelection() {
    for (var i = 0; i < selectedCells.length; i++) { // Pour chaque cellule sélectionnée
        var images = selectedCells[i].getElementsByTagName("img");// Supprimer l'image si elle existe et restaurer le texte initial
        for (var j = 0; j < images.length; j++) {
            images[j].remove();
            selectedCells[i].textContent = selectedCells[i].getAttribute("data-row") + selectedCells[i].getAttribute("data-col");
        }
        selectedCells[i].classList.remove("selected");// Supprimer la classe "selected" de la cellule
    }
	// Vider le tableau des cellules sélectionnées
    selectedCells = [];
	// Restaurer les images par défaut pour le lanceur et le receveur
    document.getElementById("case_lanceur").innerHTML = "<img src='img/logo/passe_logo.png'>";
    document.getElementById("case_receveur").innerHTML = "<img src='img/logo/ball_logo.png'>";
	    // Effacement des champs d'entrée
		document.forms["pass"]["thrower"].value = "";
		document.forms["pass"]["catcher"].value = "";
}
// Ajouter un événement click à chaque élément de la table
var cells = tableau.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
	// Ajouter un gestionnaire d'événements click pour chaque cellule de la table
    cells[i].addEventListener("click", function() {
        selectElement(this);
    });
}



//bot inter
function coord(x,y)
{
	if ((x < 1) || (x > 26) || (y < 1) || (y > 15))
		return "";
	return String.fromCharCode(x+64) + y + " ";
}

function distance(x,y,a,b,c)
{
	return Math.abs(a*x + b*y + c) / Math.sqrt(a*a + b*b);
}

function doPass()
{
	var f = document.pass;
	var thrower = f.thrower.value;
	var catcher = f.catcher.value;
	var x1 = thrower.charAt(0).toUpperCase().charCodeAt(0)-64;
	var y1 = parseInt(thrower.substring(1));
	var x2 = catcher.charAt(0).toUpperCase().charCodeAt(0)-64;
	var y2 = parseInt(catcher.substring(1));
	var x12 = x1-x2;
	var y12 = y1-y2;
	var xy = x2*y1 - x1*y2;

	if ((x1 < 1) || (x1 > 26) || (y1 < 1) || (y1 > 15) || (x2 < 1) || (x2 > 26) || (y2 < 1) || (y2 > 15))
	{
		f.result.value = "INPUT ERROR";
		return;
	}
	var out = "De " + coord(x1,y1) + "à " + coord(x2,y2) + ": c'est une ";
	var d = Math.sqrt(x12*x12 + y12*y12);
	if (d < 3.99) out += "Passe Rapide";
	else if (d < 6.4) out += "Passe Courte";
	else if (d < 10.8) out += "Passe Longue";
	else if (d < 13.6) out += "Longue Bombe";
	else out += "balle perdu.. Vers l'au delà et l'infini !";
	
	out += "\nInterception est possible :\n";
	if ((x12 == 0) && (Math.abs(y12) > 1))
	{
		for (var j = Math.min(y1,y2)+1; j < Math.max(y1,y2); j++)
			for (var i = x1-1; i <= x1+1; i++)
				out += coord(i,j);
	}
	else if ((y12 == 0) && (Math.abs(x12) > 1))
	{
		for (var i = Math.min(x1,x2)+1; i < Math.max(x1,x2); i++)
			for (var j = y1-1; j <= y1+1; j++)
				out += coord(i,j);
	}
	else if ((x12 == 0) || (y12 == 0))
		out += "Nulle Part";
	else
	{
		for (var i = Math.min(x1,x2); i <= Math.max(x1,x2); i++)
			for (var j = Math.min(y1,y2); j <= Math.max(y1,y2); j++)
			{
				d = distance(i,j,-y12,x12,xy);
				if ((d <= 1) && ((d > 0) || ((i != x1) && (i != x2) && (j != y1) && (j != y2))))
					out += coord(i,j);
			}
	}
	f.result.value = out;
}
