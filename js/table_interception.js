// Création de la table
// Création de la table
var tableau = document.getElementById("tableau");
var tbody = tableau.getElementsByTagName("tbody")[0];


// Création des lignes et des cellules du tableau
for (var j = 0; j < 26; j++) {
    var row = document.createElement("tr");
    for (var i = 0; i < 15; i++) {
        var cell = document.createElement("td");


            cell.textContent = String.fromCharCode(65 + j) + (i+1);
            cell.setAttribute("data-row", String.fromCharCode(65 + j));
            cell.setAttribute("data-col",i + 1); 

        row.appendChild(cell);
    }
    tbody.appendChild(row);
}

// Fonction pour sélectionner les éléments et les enregistrer
var selectedCells = [];
function selectElement(cell) {
    if (selectedCells.length >= 2) {
        clearSelection();
    }
    if (!cell.classList.contains("selected")) {
        cell.classList.add("selected");
        selectedCells.push(cell);
		if (selectedCells.length == 1) {
            var element1 = selectedCells[0];
			element1.innerHTML = "<img src='img/logo/passe_logo.png' alt='passeur' />";
			
        } else if (selectedCells.length == 2) {
            var element1 = selectedCells[0];
            var element2 = selectedCells[1];
			element1.setAttribute('id', 'data_passe');
            var col1 = element1.getAttribute("data-col");
            var row1 = element1.getAttribute("data-row");
			element2.setAttribute('id', 'data_recep');
            var col2 = element2.getAttribute("data-col");
            var row2 = element2.getAttribute("data-row");
            element2.innerHTML = "<img src='img/logo/ball_logo.png' alt='ballon' />";
			console.log("Premier élément : " + row1 + col1);
			console.log("Deuxième élément : " + row2 + col2);

			document.getElementById("case_lanceur").textContent = ("Lanceur : " + row1 + col1);
			document.getElementById("case_receveur").textContent = ("Receveur : " + row2 + col2);
		}
	}
}

// Fonction pour effacer la sélection
function clearSelection() {
    for (var i = 0; i < selectedCells.length; i++) {
        var images = selectedCells[i].getElementsByTagName("img");
        for (var j = 0; j < images.length; j++) {
            images[j].remove();
            selectedCells[i].textContent = selectedCells[i].getAttribute("data-row") + selectedCells[i].getAttribute("data-col");
        }
        selectedCells[i].classList.remove("selected");
    }
    selectedCells = [];
}
// Ajouter un événement click à chaque élément de la table
var cells = tableau.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
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
