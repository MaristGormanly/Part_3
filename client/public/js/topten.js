document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(keyCode==32) {
	  window.location.href="/mainmenu";
  } else {
  	  alert("Hit the Spacebar to go back to the main menu.");
  }
}

var topTen = [
    ['Rob Camaro', 20150, '9/24/18'],
    ['Bob Corvette', 650, '4/13/18'],
    ['Eleanor' , 19690, '6/16/18'],
    ['Bo', 106, '7/4/18'],
    ['Edmund Fitzgerald', 150, '6/14/18'],
    ['Shuan White', 1100, '8/12/18'],
    ['Tiger Woods', 900, '2/2/18'],
    ['Fleetwood Mac', 800, '9/12/18'],
    ['Mashall Maranello', 1400, '8/6/18'],
    ['Shaun Scuderia', 406, '4/9/18'],
    ['Sesto Elemento', 1450, '9/8/18'],
    ['Poland Spring', 0, '3/3/18']
    
]

topTen.sort(function(a, b){
    var x = a[1];
    var y = b[1];
    return y - x;
});

var topTenTable = document.getElementById('topTenTable');
var table = document.createElement('table');
var tbody = document.createElement('tbody');

for (i = 0; i < 10; i++){
    var vals = topTen[i];
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.textContent = i + 1;
    row.appendChild(cell);
    for (var b = 0; b < vals.length; b++){
        var cell = document.createElement('td');
        cell.textContent = vals[b];
        row.appendChild(cell);
    }
    tbody.appendChild(row);
}
table.appendChild(tbody);
topTenTable.appendChild(table);

document.getElementById("blinkText").onclick = function() {
    window.location.href = "/mainmenu";
}