var sample = new Audio('/music/music1.mp3');

sessionStorage.setItem('soundStatus', "true");

function checkSound(){
    
    var currentSound = sessionStorage.getItem('soundStatus');
    
    
    if (currentSound == "true"){
        sample.play();
        document.getElementById("soundButt").innerHTML = "OFF";
	}
	
	else {
		sample.pause();
		document.getElementById("soundButt").innerHTML = "ON";
	}

}

window.onload = checkSound();