var currentPlayerScore = document.querySelector('#player-score');
var currentComputerScore = document.querySelector('#computer-score');
var currentTieScore = document.querySelector('#tie-score');
var roundMessage = document.querySelector('#round-message');
const finalMessage = document.querySelector('#final-message');
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const tieText = document.querySelector('#tie-text');

let playerScore = 0;
let computerScore = 0;
let tieCounter = 0;
let round = 1;
let message = '';

// Play for 5 rounds OR until playerScore !== computerScore
rockBtn.addEventListener('click', function() {
    if (round <= 5 || playerScore === computerScore) {
        playRound('scissors', computerPlay());
    }
});

paperBtn.addEventListener('click', () => {
    if (round <= 5 || playerScore === computerScore) {
        playRound('paper', computerPlay());
    }
});

scissorsBtn.addEventListener('click', () => {
    if (round <= 5 || playerScore === computerScore) {
        playRound('scissors', computerPlay());
    }
});

function playRound(playerSelection, computerSelection) {
    //If the player picks rock:
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++playerScore;
        message = 'You Win! Your ' + playerSelection + ' smashes the computer\'s ' + computerSelection + '.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        ++computerScore;
        message = 'You Lose! The computer\'s ' + computerSelection + ' covers your ' + playerSelection + '.';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        ++tieCounter;
        message = "Would you look at that you both picked rock! It's a tie!";
    }

    //If the player picks paper:
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++playerScore;
        message = 'You Win! Your ' + playerSelection + ' covers the computer\'s ' + computerSelection + '.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        ++computerScore;
        message = 'You Lose! The computer\'s ' + computerSelection + ' slice up your ' + playerSelection + '.';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        ++tieCounter;
        message = "Holy guacamole you both picked paper! It's a tie!";
    }

    //If the player picks scissors:
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++playerScore;
        message = 'You Win! Your ' + playerSelection + ' slice through the computer\'s ' + computerSelection + '.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        ++computerScore;
        message = 'You Lose! The computer\'s ' + computerSelection + ' smashes your ' + playerSelection + '.';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        ++tieCounter;
        message = "How boring. You both picked scissors. It's a tie.";
    }
    updateTextContent();
    ++round; // Increase round, as we're playing 5 rounds
    if (!(round <= 5 || playerScore === computerScore)) {
        displayFinalMessage();
    }
}

// Getting the computers pick:
function computerPlay() {
    let getRandomNumber = Math.floor(Math.random() * 3) + 1; // Math.floor combined with Math.random() will return a random integer. This line will return an integer between 1 and 3.
    let computerSelection;
    switch (getRandomNumber) {
        case 1:
            computerSelection = 'rock';
            break;
        case 2:
            computerSelection = 'paper';
            break;
        case 3:
            computerSelection = 'scissors';
            break;
    }
    return computerSelection;
}

function displayFinalMessage() {
    if (playerScore > computerScore) {
        finalMessage.textContent = 'You Win! ';
    } else if (computerScore > playerScore) {
        finalMessage.textContent = 'You lose! ';
    }

    finalMessage.textContent =
        finalMessage.textContent +
        'After ' +
        (round - 1) +
        ' rounds the final score is ' +
        playerScore +
        '-' +
        computerScore +
        ' with ' +
        tieCounter;

    if (tieCounter === 1) {
        finalMessage.textContent = finalMessage.textContent + ' tie!';
    } else {
        finalMessage.textContent = finalMessage.textContent + ' ties!';
    }
}

function updateTextContent() {
    roundMessage.textContent = message; // After 1 round, display the outcome message
    currentPlayerScore.textContent = playerScore; // Update the scores
    currentComputerScore.textContent = computerScore;
    currentTieScore.textContent = tieCounter;
    if (tieCounter === 1) {
        tieText.textContent = ' tie';
    } else {
        tieText.textContent = ' ties';
    }
}
