
function generateNewImageIndex(){
	let newImageId = getRandomIndex();
	if(imageChoosenId !== newImageId){
		imageChoosenId = newImageId
		return ;
	}
	else{
		generateNewImageIndex();
	}
}
function getRandomIndex() {
  return parseInt((Math.random() * (imgsArray.length - 1)),10);
}

function slideChange(){
	
	 
	image = document.getElementById("slide");
	image.style.opacity = 0;
	generateNewImageIndex();
	console.log(imageChoosenId);
	image.src = imgsArray[imageChoosenId];
	image.style.opacity = 1;

	
	
}
function setTimerDelay(){
	timerDelayInput = document.getElementById("input_delay");
	timerDelay = timerDelayInput.value *1000;
	stopTimer();
	startTimer();
}
function setWidth(){
	widthInput = document.getElementById("input_width");
	image = document.getElementById("slide");	
	let newWidth = widthInput.value.toString();
	image.style.width = widthInput.value + 'px';
	}
function setHeight(){
 	heightInput = document.getElementById("input_height");
	image = document.getElementById("slide");
	
	let newHeight = heightInput.value.toString();
	image.style.height =   heightInput.value + 'px';
	
}
function startTimer(){
	timerId = setInterval(slideChange,timerDelay);
}
function stopTimer(){
	clearInterval(timerId);
}

let imgsArray = ["img/art1.jpg",
				"img/art2.jpg",
				"img/art3.jpg",
				"img/art5.jpg",
				"img/art6.jpg",
				"img/art7.jpg",
				"img/art8.jpg",
				"img/art9.jpg",
				"img/art10.jpg",
				"img/art11.jpg",
				"img/art12.jpg"];
let imageChoosenId;
let widthInput;
let heightInput;
let image;
let startStopIcon;
let timerDelayInput;
let timerDelay;
let opacity = 1 ;
let timerId ;

window.addEventListener('load', function () {
 imageChoosenId = 0;
 widthInput = document.getElementById("input_width");
 heightInput = document.getElementById("input_height");

 image = document.getElementById("slide");
 image.style.transition = "opacity 1s";

 timerDelayInput = document.getElementById("input_delay");
 timerDelay = timerDelayInput.value *1000;

 timerId = setInterval(slideChange,timerDelay);
 document.getElementById('player_lenght').play();
})

