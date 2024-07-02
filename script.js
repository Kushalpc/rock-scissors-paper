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
    randomChoice = randomChoice.toLowerCase();
    return randomChoice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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
        alert("There is an error")
    }
       
    
}


playRound(humanSelection, computerSelection);

