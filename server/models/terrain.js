var imageArray = new Array();
imageArray[0] = "../images/10.jpg";
imageArray[1] = "../images/11.jpg";
imageArray[2] = "../images/12.jpg";
imageArray[3] = "../images/13.jpg";
imageArray[4] = "../images/14.jpg";

function startImage(imageArray){
	var num = Math.floor(Math.random() * imageArray.length);
	var rand = imageArray[num];
	var str = '<img src="' + rand + '" id = "rand" alt = "">';
	document.getElementById('trail2').innerHTML = str;
}
startImage(imageArray);

document.addEventListener("keydown", function(e){
	if(e.keyCode === 13){
		function imagePick(imageArray){
		var num = Math.floor(Math.random() * imageArray.length);
		var rand = imageArray[num];
		var str = '<img src="' + rand + '" id = "rand" alt = "">';
		document.getElementById('trail2').innerHTML = str;
		}
	imagePick(imageArray);
	}
}

function terrainFill(){
	if(rand = 10){
		document.getElementById('terrain').innerHTML = "cliff";
	}else if(rand = 11){
		document.getElementById('terrain').innerHTML = "desert";
	}else if(rand = 12){
		document.getElementById('terrain').innerHTML = "forest";
	}else if(rand = 13){
		document.getElementById('terrain').innerHTML = "mountain";
	}else if(rand = 14){
		document.getElementById('terrain').innerHTML = "plains";
	}
	console.log(rand + "terrain");
}

/*
document.addEventListener("keydown", function(e){
	if(e.keyCode === 13){
		var wagon = document.getElementById("wagon");
		var rightVal = parseInt(wagon.style.right, 10);
		wagon.style.right = (rightVal + 32) + "px";
	}
}

function changeDiv(){
	if(trail1.style.display == "none"){
		trail1.style.display = "block";
		
	}else if(trail1.style.display == "block"){
		trail1.style.display = "none";
	}
	if(paceCov.style.display == "none"){
		paceCov.style.display = "block";
		
	}else if(paceCov.style.display == "block"){
		paceCov.style.display = "none";
	}
}