console.log("A new game begins!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let num = Math.floor((Math.random())*3 + 1);
    if (num == 1) {
        return "rock";
    }
    else if (num == 2) {
        return "paper";
    }
    else if (num == 3) {
        return "scissors";
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
        computerScore++;
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");


rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));





































// function playGame () {
    
//     console.log("Five rounds will be played:");

//     for (let i=0; i<5 ; i++) {
//         const computerSelection = getComputerChoice();
//         console.log(computerSelection);
//         const humanSelection = getHumanChoice();
//         playRound(humanSelection, computerSelection);
//         console.log(`The score is: Human = ${humanScore} Computer = ${computerScore}`);
//     }

//     if (humanScore>computerScore) {
//         console.log("Congratulations!!! You won the game!");
//     }else if (humanScore<computerScore) {
//         console.log("What a shame!!! You lost the game!");
//     }else {
//         console.log("How boring... you tied...");
//     }

// }

// playGame();