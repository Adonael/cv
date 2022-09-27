var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

var dice1=document.querySelector(".img1");
var dice2=document.querySelector(".img2");
var changeTitle=document.querySelector("h1");

//Changing the dice image according to the random number generated

// if(randomNumber1===1){
//     dice1.src="images/dice1.png";
// }else if(randomNumber1===2){
//     dice1.src="images/dice2.png";
// }else if(randomNumber1===3){
//     dice1.src="images/dice3.png"
// }else if(randomNumber1===4){
//     dice1.src="images/dice4.png"
// }else if(randomNumber1===5){
//     dice1.src="images/dice5.png"
// }else{
//     dice1.src="images/dice6.png"
// }


// if(randomNumber2===1){
//     dice2.src="images/dice1.png";
// }else if(randomNumber2===2){
//     dice2.src="images/dice2.png";
// }else if(randomNumber2===3){
//     dice2.src="images/dice3.png"
// }else if(randomNumber2===4){
//     dice2.src="images/dice4.png"
// }else if(randomNumber2===5){
//     dice2.src="images/dice5.png"
// }else{
//     dice2.src="images/dice6.png"
// }

//Changining the dice image with better code
dice1.src="images/dice"+randomNumber1+".png";
dice2.src="images/dice"+randomNumber2+".png";

if(randomNumber1>randomNumber2){
    changeTitle.innerHTML="Player 1 wins";
}else if(randomNumber2>randomNumber1){
    changeTitle.innerHTML="Player 2 wins";
}else{
    changeTitle.innerHTML="DRAW!";
}