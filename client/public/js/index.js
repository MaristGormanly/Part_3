document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
var keyCode = e.keyCode;
	if(keyCode==32) {
		window.location.href="/mainmenu";
	} else {
		alert("Hit the Spacebar to Play.");
	}
}
	
document.getElementById("spacebarText").onclick = function() {
	    window.location.href = "/mainmenu";
}