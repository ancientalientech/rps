const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const getHumanChoice = () => {
    let choice;

    do {
        choice = prompt("Enter your choice").toLowerCase();
    } while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors');

    return choice;
}

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log("It's a tie");
            return;
        }
        if (computerChoice === 'paper') {
            console.log("You lose! Paper beats Rock");
            computerScore++;
            return;
        }
        if (computerChoice === 'scissors') {
            console.log("You win! Rock beats Scissors");
            humanScore++;
            return;
        }
    }

    if (humanChoice === 'paper') {
        if (computerChoice === 'paper') {
            console.log("It's a tie");
            return;
        }
        if (computerChoice === 'scissors') {
            console.log("You lose! Scissors beat Paper");
            computerScore++;
            return;
        }
        if (computerChoice === 'rock') {
            console.log("You win! Paper beats Rock")
            humanScore++;
            return;
        }
    }

    if (humanChoice === 'scissors') {
        if (computerChoice === 'scissors') {
            console.log("It's a tie");
            return;
        }
        if (computerChoice === 'rock') {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
            return;
        }
        if (computerChoice === 'paper') {
            console.log("You win! Scissors beat Paper");
            humanScore++;
            return;
        }
    }
}

const playGame = () => {
    let humanSelection;
    let computerSelection;
    humanScore = 0;
    computerScore = 0;
    let winner;

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        //I've decided to play a BO3 match instead of all 5 rounds
        if (humanScore >= 3) {
            winner = 'human';
            break;
        }
        if (computerScore>= 3) {
            winner = 'computer';
            break;
        }
    }

    if (humanScore > computerScore) {
        winner = 'human';
    } else if (computerScore > humanScore) {
        winner = 'computer';
    } else {
        winner = 'tie';
    }

    if (winner === 'human') {
        console.log("Game Over! You win!");
    } else if (winner === 'computer') {
        console.log("Game Over! You lose!");
    } else {
        console.log("Game Over! It's a tie!");
    }
}

playGame();