document.addEventListener("keydown", keyDownTextField, false);
		
function keyDownTextField(e) {
var keyCode = e.keyCode;
	if(keyCode==49) {
		window.location.href="/trail";
	} else if (keyCode==50){
		  window.location.href="/setup";
	} else if (keyCode==51){
			  	window.location.href="/topten";
	} else if (keyCode==52){
           var currentSound = sessionStorage.getItem('soundStatus');
           if (currentSound == "true"){
                currentSound = "false";
                document.getElementById("soundButt").innerHTML = "ON";
           } else {
                currentSound = "true";
                document.getElementById("soundButt").innerHTML = "OFF";
           }
            
			sessionStorage.setItem('soundStatus', currentSound);
			
            checkSound();
	}
}
