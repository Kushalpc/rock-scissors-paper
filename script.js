'use strict';
// computer choice
function getComputerChoice(){
  let randomNumber = Math.round(Math.random() * 1000) / 100;

  if(randomNumber <= 3.33){
    return "Rock";
} else if(3.33 < randomNumber && randomNumber <= 6.67){
    return "Scissors";
}else{
    return "Paper"
}
}



