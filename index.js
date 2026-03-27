// first dice movement
var ranNum = Math.random();
var randomNumber1 = Math.floor(6*ranNum + 1);
var randomImg = "./images/dice"+ randomNumber1 + ".png";
var imgFirst= document.querySelectorAll("img")[0];
imgFirst.setAttribute("src",randomImg);

// second dice movement
var ranNum = Math.random();
var randomNumber2 = Math.floor(6*ranNum + 1);
var randomImg = "./images/dice"+ randomNumber2 + ".png";
var imgFirst= document.querySelectorAll("img")[1];
imgFirst.setAttribute("src",randomImg);

//declaring winner!!
//first player wins.

if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "Player1 wins!!";
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 wins!!";
}

else{
    document.querySelector("h1").innerHTML = "Draw!!";
}