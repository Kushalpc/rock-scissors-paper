'use strict';
// computer choice
function getComputerChoice(){
  let randomNumber = Math.round(Math.random() * 1000) / 100;

  if(randomNumber <= 3.33){
    return "rock";
} else if(3.33 < randomNumber && randomNumber <= 6.67){
    return "scissors";
}else{
    return "paper"
}
}


function getHumanChoice(){
    let randomChoice = prompt("Rock, Scissors, Paper?", "");
    return randomChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    if(humanChoice == "rock" && computerChoice == "rock"){
        alert("It is a draw.");
    }else if (humanChoice == "rock" && computerChoice == "scissors"){
        alert("You win! Rock beats Scissors.")
    }else if (humanChoice == "rock" && computerChoice == "paper"){
        alert("You lose! Paper beats Rock.")
    }else if (humanChoice == "scissors" && computerChoice == "rock"){
        alert("You lose! Rock beats Scissors.")
    }else if(humanChoice == "scissors" && computerChoice == "scissors"){
        alert("It is a draw.")
    }else if(humanChoice == "scissors" && computerChoice == "paper"){
        alert("You win! Scissors beats Paper.")
    }else if(humanChoice == "paper" && computerChoice == "paper"){
        alert("It is a draw.")
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        alert("You lose! Scissors beats Paper.")
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        alert("You win! Paper beats Rock.")
    }else{
        alert("There is an error");
        return;
    }


    if(humanChoice == computerChoice){
        ++humanScore;
        ++computerScore;
    }else if(humanChoice == "rock" && computerChoice == "scissors"){
        ++humanScore;
    }else if (humanChoice == "rock" && computerChoice == "paper"){
        ++computerScore;
    }else if(humanChoice == "scissors" && computerChoice == "rock"){
        ++computerScore
    }else if(humanChoice == "scissors" && computerChoice == "paper"){
        ++humanScore
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        ++computerScore
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        ++humanScore
    }else{
        alert("There is an error")
    }
    alert("The score is now " + humanScore + "-" + computerScore)

}

function playGame(){
// round 1
let humanSelection1 = getHumanChoice();
let computerSelection1 = getComputerChoice();
playRound(humanSelection1, computerSelection1);

let humanSelection2 = getHumanChoice();
let computerSelection2 = getComputerChoice();
playRound(humanSelection2, computerSelection2);

let humanSelection3 = getHumanChoice();
let computerSelection3 = getComputerChoice();
playRound(humanSelection3, computerSelection3);

let humanSelection4 = getHumanChoice();
let computerSelection4 = getComputerChoice();
playRound(humanSelection4, computerSelection4);

let humanSelection5 = getHumanChoice();
let computerSelection5 = getComputerChoice();
playRound(humanSelection5, computerSelection5);



if(humanScore > computerScore){
    alert(`Game over! You win with the score of ${humanScore}-${computerScore}`)
}else if(humanScore < computerScore){
    alert(`Game over! Computer wins with the score of ${humanScore}-${computerScore}`)
}else{
    `Game over! It's a draw with the score of ${humanScore}-${computerScore}`
}

humanScore = 0;
computerScore = 0;
}

playGame();
