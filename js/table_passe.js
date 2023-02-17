const table = document.createElement('table');
const tbody = document.createElement('tbody');

//tbody.appendChild(document.createElement('td')).classList.add('empty');

for (let i = 13; i >= 0; i--) {
  const tr = document.createElement('tr');

  const td = document.createElement('td');
  td.textContent = i;
  tr.appendChild(td);

  for (let j = 1; j < 15; j++) {
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


tbody.appendChild(tr);

for (let i = 0; i < 16; i++) {
  const td = document.createElement('td');
  table.appendChild(td);
}

table.appendChild(tbody);

document.querySelector('main').appendChild(table);









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