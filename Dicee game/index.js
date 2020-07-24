var randomNumber1;

randomNumber1 = Math.floor((Math.random() * 6) + 1);

console.log(randomNumber1);

var randomimg = "images/dice"+randomNumber1+".png";

var imgage1 = document.querySelectorAll("img")[0];

imgage1.setAttribute("src", randomimg);


var randomNumber2;

randomNumber2 = Math.floor((Math.random() * 6) + 1);

console.log(randomNumber1);

var randomimg2 = "images/dice"+randomNumber2+".png";

var imgage2 = document.querySelectorAll("img")[1];

imgage2.setAttribute("src", randomimg2);

if(randomNumber1>randomNumber2){
     document.querySelector("h1").innerHTML = "Player 1 wins!!";
}

else if(randomNumber1<randomNumber2){
     document.querySelector("h1").innerHTML = "Player 2 wins!!";
}
else{
     document.querySelector("h1").innerHTML = "DRAW, Nobody Wins!!";
}