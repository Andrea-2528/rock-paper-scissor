// The following game is played through the console.

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

console.log(getComputerChoice()); //debug

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

console.log(getHumanChoice());  //debug

