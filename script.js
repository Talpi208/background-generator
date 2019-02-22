var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

window.addEventListener("load", function(){
	css.appendChild(document.createTextNode("color input's values: " + color1.value + ", " + color2.value))
});

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomHexColor(){
	var n = 6, s = '#';
	while(n--){
		s += (Math.random() * 16 | 0).toString(16);    // random char from 0 to f
	}
	return s;
}

function generate() {
	color1.value = randomHexColor();
	color2.value = randomHexColor();
	setGradient();
}