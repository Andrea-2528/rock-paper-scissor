let announcer = document.querySelector(".announcer");
let humanScore = document.querySelector(".humanScore")
let computerScore = document.querySelector(".computerScore");

announcer.textContent="A new game begins!"
humanScore.textContent=0;
computerScore.textContent=0;

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
    announcer.textContent="";    
    setTimeout ( () => {
        if ( (computerChoice=="rock" && humanChoice == "paper") || (computerChoice =="paper" && humanChoice == "scissors") || (computerChoice=="scissors" && humanChoice == "rock") ) {
            humanScore.textContent=parseInt(humanScore.textContent) + 1;
            announcer.textContent="Good job! You won this round.";
        }else if (computerChoice == humanChoice) {
            announcer.textContent="Ops! You tied.";
        }else {
            computerScore.textContent=parseInt(computerScore.textContent) + 1;
            announcer.textContent="Unlucky! You lost this round."
        }


        if (humanScore.textContent=="5") {

            announcer.textContent="Congratulations!!! You won the match!";
            document.querySelector(".buttons").remove();
            const message = document.createElement("div");
            message.textContent = "Reload the page if you want to play again."
            message.classList.add("extraMessage");
            announcer.parentNode.appendChild(message);
        
        } else if (computerScore.textContent=="5") {
            
            announcer.textContent="What a shame!!! You lost the match!";
            document.querySelector(".buttons").remove();
            const message = document.createElement("div");
            message.textContent = "Reload the page if you want to play again."
            message.classList.add("extraMessage");
            announcer.parentNode.appendChild(message);
        
        }
    }, 100);
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