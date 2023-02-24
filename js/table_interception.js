// Récupération des élements table et tbody dans le HTML
var tableau = document.getElementById("tableau");
var tbody = tableau.getElementsByTagName("tbody")[0];
// Création d'un tableau pour stocker les positions des cellules du terrains
var cellPositions = [];
// Création d'un tableau pour stocker les positions des cellules d'interception
var interceptions = [];
// Déclaration d'un tableau pour stocker les cellules sélectionnées
var selectedCells = [];

// Création des lignes et des cellules du tableau
for (var j = 0; j < 26; j++) { // Crée 26 lignes
    var row = document.createElement("tr"); // Crée une nouvelle ligne
		for (var i = 1; i < 16; i++) { // Crée 15 cellules par ligne
    		var cell = document.createElement("td"); // Crée une nouvelle cellule
        // Ajoute le texte de la cellule en utilisant le code ASCII
        // Ex: A01, A02, A03, ..., B01, B02, B03, ...
		var colStr = i < 10 ? "0" + i : i;
        cell.textContent = String.fromCharCode(65 + j) + colStr;

        // Ajoute les attributs data-row et data-col pour stocker la position de la cellule
        cell.setAttribute("data-row", String.fromCharCode(65 + j));
        cell.setAttribute("data-col",colStr); 

        // Récupère les valeurs data-row et data-col de la cellule et les ajoute au tableau cellPositions
        var rowcol = [cell.getAttribute("data-row"), cell.getAttribute("data-col")];
        cellPositions.push(rowcol);

        // Ajoute la cellule à la ligne
        row.appendChild(cell);

    }
    // Ajoute la ligne au tableau
    tbody.appendChild(row);
}


// verification Valeur case tableau 
var row5 = cellPositions[4][0];
var col5 = cellPositions[4][1];
console.log("Position de la 5ème cellule : " + row5 + col5);
var row5 = cellPositions[4][0];
var col5 = cellPositions[11][1];
console.log("Position de la 12ème cellule : " + row5 + col5);


// Fonction pour sélectionner les éléments et les enregistrer
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

			doPass()
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
	interceptions = [];
	// Vider tableau interceptions
	var interceptionsImages = document.getElementsByClassName("interception");
		while (interceptionsImages.length > 0) {
			interceptionsImages[0].remove();
		}
	// Restaurer les images par défaut pour le lanceur et le receveur
    document.getElementById("case_lanceur").innerHTML = "<img src='img/logo/passe_logo.png'>";
    document.getElementById("case_receveur").innerHTML = "<img src='img/logo/ball_logo.png'>";
	    // Effacement des champs d'entrée
		document.forms["pass"]["thrower"].value = "";
		document.forms["pass"]["catcher"].value = "";
		document.forms["pass"]["result"].value = "";
}
// Ajouter un événement click à chaque élément de la table
var cells = tableau.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
	// Ajouter un gestionnaire d'événements click pour chaque cellule de la table
    cells[i].addEventListener("click", function() {
        selectElement(this);
    });

}


//INTERCEPTION

// fonction pour convertir les coordonnées x, y en une chaîne de caractères de la forme "A1", "B2", etc.
function coord(x,y){
	// Vérifier si les coordonnées sont valides et retourne une chaîne vide
	if ((x < 1) || (x > 26) || (y < 1) || (y > 15))
		return "";

	// Convertir les coordonnées en notation de colonne/ligne (A1, B2, etc.)
	//return String.fromCharCode(x+64) + y  + " ";

		// Convertir les coordonnées en notation de colonne/ligne (A01, B02, etc.)
	var colStr = y < 10 ? "0" + y : y;
	return String.fromCharCode(x+64) + colStr + " ";
}

// fonction pour calculer la distance entre deux points
function distance(x,y,a,b,c){
	return Math.abs(a*x + b*y + c) / Math.sqrt(a*a + b*b);
}


// fonction appelée lors de la soumission du formulaire / ou auto avec cases terrain selectionnées
function doPass(){
	var f = document.pass;
	var thrower = f.thrower.value;
	var catcher = f.catcher.value;
	 // convertit la coordonnée du lanceur en coordonnées x, y
	var x1 = thrower.charAt(0).toUpperCase().charCodeAt(0)-64; // convertir la lettre de la colonne en chiffre (ex: A -> 1)
	var y1 = parseInt(thrower.substring(1)); // extraire le chiffre de la ligne
	// convertit la coordonnée du receveur en coordonnées x, y
	var x2 = catcher.charAt(0).toUpperCase().charCodeAt(0)-64;  
	var y2 = parseInt(catcher.substring(1));
	// calcule la différence de coordonnées en x et en y
	var x12 = x1-x2; 
	var y12 = y1-y2;
	// calcule la valeur de xy pour la formule de la droite
	var xy = x2*y1 - x1*y2; 

  	// si les coordonnées ne sont pas valide, affiche une erreur
	if ((x1 < 1) || (x1 > 26) || (y1 < 1) || (y1 > 15) || (x2 < 1) || (x2 > 26) || (y2 < 1) || (y2 > 15))
	{
		f.result.value = "INPUT ERROR";
		return;
	}

	// détermine le type de passe en fonction de la distance
	var out = "De " + coord(x1,y1) + "à " + coord(x2,y2) + ": c'est une ";
	var d = Math.sqrt(x12*x12 + y12*y12);
	if (d < 3.99) out += "Passe Rapide";// distance < 4
	else if (d < 6.4) out += "Passe Courte";// 4 <= distance < 6.4
	else if (d < 10.8) out += "Passe Longue";// 6.4 <= distance < 10.8
	else if (d < 13.6) out += "Longue Bombe";// 10.8 <= distance < 13.6
	else out += "balle perdu.. Vers l'au delà et l'infini !";// distance >= 13.6
	
	// détermine si une interception est possible
	out += "\nInterception est possible :\n";
	if ((x12 == 0) && (Math.abs(y12) > 1)) 
	{
		for (var j = Math.min(y1,y2)+1; j < Math.max(y1,y2); j++) // Si la passe est horizontale, vérifier les cases adjacentes à la verticale
			for (var i = x1-1; i <= x1+1; i++){
				out += coord(i,j);
				var coords = coord(i,j); // calculer les coordonnées de la case
				if (coords) { // vérifier que les coordonnées sont valides (si la fonction coord() renvoie une chaîne vide, cela signifie que les coordonnées ne sont pas valides)

					interceptions.push(coords); // ajouter les coordonnées au tableau d'interceptions possibles
				} // ajouter la coordonnée à interceptions
	}
}
	else if ((y12 == 0) && (Math.abs(x12) > 1))
	{
		for (var i = Math.min(x1,x2)+1; i < Math.max(x1,x2); i++) // Si la passe est verticale, vérifier les cases adjacentes à l'horizontale
			for (var j = y1-1; j <= y1+1; j++){
				out += coord(i,j);
				var coords = coord(i,j);
				if (coords) {

					interceptions.push(coords);
				}
			}
	}

	else if ((x12 == 0) || (y12 == 0)) {//Si passe distance 0
		out += "Nulle Part"; // la passe ne peut pas être interceptée
		interceptions.push();}

	else {	
		for (var i = Math.min(x1,x2); i <= Math.max(x1,x2); i++)      // parcourir les colonnes entre le lanceur et le réceptionneur
			for (var j = Math.min(y1,y2); j <= Math.max(y1,y2); j++)  // parcourir les lignes entre le lanceur et le réceptionneur
			{
				// calculer la distance entre la case (i,j) et la trajectoire de la passe
				d = distance(i,j,-y12,x12,xy);
				if ((d <= 1) && ((d > 0) || ((i != x1) && (i != x2) && (j != y1) && (j != y2))))
				
				// ajouter les coordonnées de la case (i,j) à la chaîne de caractères de sortie

				{
					out += coord(i,j);
					var coords = coord(i,j);
					if (coords) {
						interceptions.push(coords);
					}
				}
			}
	}

	
	// afficher la chaîne de caractères de sortie dans la zone de texte de résultat
	f.result.value = out;
	console.log(out);
	console.log(interceptions);
	// Récupération de toutes les cellules du tableau
	var cells = document.querySelectorAll('td');
	cells.textContent = String.fromCharCode(65 + j) + (i+1);
	// Parcours de chaque coordonnée dans la liste des interceptions
	for (var j = 0; j < interceptions.length; j++) {
	var coordonneeInter = interceptions[j];
	console.log("Coordonnée Inter : " + coordonneeInter);
	// affiche les valeurs de chaque élément de la liste

	  // Parcours de chaque cellule pour trouver celles qui correspondent à la coordonnée
		for (var i = 0; i < cells.length; i++) {
			var celluleInter = cells[i];
			//console.log(celluleInter);

			// Récupération des attributs "data-row" et "data-col" de la cellule
			var row3 = celluleInter.getAttribute('data-row');
			var col3 = parseInt(celluleInter.getAttribute('data-col'), 10); // convertit en entier
			//console.log("premier col3: " + col3);

			//console.log("entier col3 : " + entierCol3); // affiche l'entier correspondant à data-col
			// Vérification si les coordonnées correspondent aux attributs de la cellule
			if (row3 === coordonneeInter[0] && parseInt(coordonneeInter.slice(1)) === col3) {

				//console.log("2eme col3 : " + col3);
				//console.log("2eme enitercol3 : " + entierCol3);
			// Création de l'élément "interceptionImage" pour afficher l'image dans la cellule
				var interceptionImage = document.createElement("img")
				interceptionImage.src = 'img/logo/interception.png'; // chemin vers l'image à afficher
				interceptionImage.alt = "interception";
				interceptionImage.classList.add("interception");
				console.log(interceptionImage );
				//bug col3 1 chiffre 
				console.log("2eme row3 : " + row3);
				console.log("2eme col3 : " + col3);
				console.log("2eme Coordonnée Inter : " + coordonneeInter);
				celluleInter.appendChild(interceptionImage);
			}
		}
	}
}
