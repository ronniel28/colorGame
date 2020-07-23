var gameNum= 6;
var colors = generateRandomColor(gameNum);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var button = document.getElementById("newColor");

// reset button
button.addEventListener("click", function(){
  resetGame();
  for (var i=0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
});

// mode selection
document.querySelector("#easyMode").addEventListener("click", function(){
  document.querySelector("#easyMode").classList.add("selected");
  document.querySelector("#hardMode").classList.remove("selected");
  gameNum =3;
resetGame();
for (var i=0; i < squares.length; i++){
  if(colors[i]){
    squares[i].style.backgroundColor = colors[i];
  }else{
    squares[i].style.display ="none";
  }
}
});
document.querySelector("#hardMode").addEventListener("click", function(){
  document.querySelector("#easyMode").classList.remove("selected");
  document.querySelector("#hardMode").classList.add("selected");
gameNum =6;
resetGame();
for (var i=0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].style.display="block";
}
});

for(var i=0; i<squares.length; i++){
squares[i].style.backgroundColor = colors[i];

squares[i].addEventListener("click", function(){
  var clickedColor = this.style.backgroundColor;

  if(clickedColor === pickedColor){
    document.getElementById("messege").textContent = "CORRECT";
    changeColors(pickedColor);
    document.querySelector("h1").style.backgroundColor = pickedColor;
    document.getElementById("newColor").textContent ="Play Again?"
  }else{
    document.getElementById("messege").textContent = "TRY AGAIN";
    this.style.backgroundColor = "#232323";
  }
});
}

function changeColors(color){
  for(var i=0; i<squares.length; i++){
  squares[i].style.backgroundColor = color;
}
}

function pickColor(){
  var randomNumber = Math.floor(Math.random()*colors.length);
  return colors[randomNumber];
}

function generateRandomColor(num){
  var arr = [];
  for(var i=0; i<num; i++){
    arr.push(randomColor());
  }
return arr;
}

function randomColor(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);

  return "rgb(" + r +", " + g + ", " + b +")";
}

function resetGame(){
  colors = generateRandomColor(gameNum);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  document.querySelector("h1").style.backgroundColor = "#086972";
  document.getElementById("messege").textContent = "";
  document.getElementById("newColor").textContent ="New Color"

}
