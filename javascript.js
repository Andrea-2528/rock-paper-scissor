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
        computerScore++;
    }
}

function playGame () {
    
    console.log("Five rounds will be played:");

    for (let i=0; i<5 ; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
        console.log(`The score is: Human = ${humanScore} Computer = ${computerScore}`);
    }

    if (humanScore>computerScore) {
        console.log("Congratulations!!! You won the game!");
    }else if (humanScore<computerScore) {
        console.log("What a shame!!! You lost the game!");
    }else {
        console.log("How boring... you tied...");
    }

}

playGame();

console.log("Refresh the page to play again!");