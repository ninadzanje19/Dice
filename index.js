var dice1 = Math.random();
dice1 = Math.floor(dice1 * 6) + 1;
var dice1Image = "dice" + dice1 + ".png";
var dice1ImageSrc = dice1Image + "";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", dice1ImageSrc);

var dice2 = Math.random();
dice2 = Math.floor(dice2 * 6) + 1;
var dice2Image = "dice" + dice2 + ".png";
var dice2ImageSrc = dice2Image + "";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", dice2ImageSrc);

if(dice1 > dice2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
}
else if(dice1 < dice2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
}
else {
  document.querySelector("h1").innerHTML = "Its a Draw :(";

}
