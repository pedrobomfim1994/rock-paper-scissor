let humanScore = 0
let computerScore = 0

// Function to get computer's choice

function getComputerChoice() {

    let randomNumber = Math.random();

    if (randomNumber < 0.34) {
        return 'rock';
    } else if (randomNumber <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


// Function to get human's choice

function getHumanChoice() {
    let userInput = prompt("Please enter rock, paper, or scissors:");
    return userInput.toLowerCase();
}


// Function to play a single round

function playRound() {

    const humanSelection = getHumanChoice();
    console.log(humanSelection);

    const computerSelection = getComputerChoice();
    console.log(computerSelection);


    if (humanSelection === computerSelection) {
        alert("It's a tie! Play again.");
        return;
    }
    if (humanSelection === 'rock') {
        if (computerSelection === 'scissors') {
            humanScore++;
            alert("You Win! rock beats scissors.");
            return;

        } else {
            computerScore++;
            alert("You Lose! paper beats rock.");
            return;
        }   
    }

    if (humanSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++;
            alert("You Lose! scissors beats paper.");
            return;

        } else {
            humanScore++;
            alert("You Win! paper beats rock.");
            return;
        }   
    }

    if (humanSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            alert("You Lose! rock beats scissors.");
            return;

        } else {
            humanScore++;
            alert("You Win! scissors beats paper.");
            return;
        }   
    }
}



function playGame() {

    for (let i = 0; i < 5; i++) {
        playRound();
    }
    
}

playGame();

console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);