var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1)+1;
var randomDiceImage = "dice"+ randomNumber1 + ".png";
var source = "images/" + randomDiceImage
var image1 = document.querySelectorAll("img")[0].setAttribute("src",source);

var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2)+1;
var source2 = "images/dice"+ randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",source2);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 wins 🚩";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
} else {
    document.querySelector("h1").innerHTML="Draw";
}