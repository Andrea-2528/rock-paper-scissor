// The following game is played through the console.

console.log("A new game begins!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let num = Math.random();
    if (num <= 0.3) {
        return "rock";
    }
    else if (num > 0.3 && num <= 0.6) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

const computerSelection = getComputerChoice();

console.log(computerSelection); //debug

function getHumanChoice () {
    let choice = prompt("Choose: rock, paper or scissors", "rock");
    choice = choice.toLowerCase();
    while (true){
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            return choice;
        } else {
            choice = prompt("The only accepted inputs are rock, paper and scissors.", "rock");
        }
    }    
}


function playRound (humanChoice,computerChoice) {
    if ( (computerChoice=="rock" && humanChoice == "paper") || (computerChoice =="paper" && humanChoice == "scissors") || (computerChoice=="scissors" && humanChoice == "rock") ) {
        console.log("Good job! You won this round!");
        humanScore++;
    }else if (computerChoice == humanChoice) {
        console.log("Ops! You tied.")
    }else {
        console.log("Unlucky! You lost this round.")
    }
}

const humanSelection = getHumanChoice();

console.log(humanSelection);  //debug


playRound(humanSelection, computerSelection);

