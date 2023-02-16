const table = document.createElement('tableauPasse');
const tbody = document.createElement('tbody');

for (let i = 13; i >= 0; i--) {
  const tr = document.createElement('tr');

  const td = document.createElement('td');
  td.textContent = i;
  tr.appendChild(td);

  for (let j = 1; j < 16; j++) {
    tr.appendChild(document.createElement('td'));
  }

  tbody.appendChild(tr);
}

const tr = document.createElement('tr');
tr.appendChild(document.createElement('td')).classList.add('empty');

for (let i = 0; i < 14; i++) {
  const td = document.createElement('td');
  td.textContent = i;
  tr.appendChild(td);
}

tr.appendChild(document.createElement('td')).classList.add('empty');
tbody.appendChild(tr);

for (let i = 0; i < 16; i++) {
  const td = document.createElement('td');
  table.appendChild(td);
}

table.appendChild(tbody);

document.body.appendChild(table);









//Selection case pour la passe
var cells = document.getElementsByTagName('td');
var currentCell = null;
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
        if (currentCell !== null) {
            currentCell.classList.remove('clicked');
        }
        this.classList.add('clicked');
        currentCell = this;
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