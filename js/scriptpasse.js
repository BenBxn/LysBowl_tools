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