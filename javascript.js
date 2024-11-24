// The following game is played through the console.

function getComputerChoice () {
    let num = Math.random();
    if (num <= 0.3) {
        return "Rock";
    }
    else if (num > 0.3 && num <= 0.6) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function getHumanChoice () {
    
}

