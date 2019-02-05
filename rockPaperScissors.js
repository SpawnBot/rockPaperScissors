game(); // Run the game when the page is open
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tieCounter = 0;

    for (var round = 1; round <= 5 || playerScore === computerScore; ++round) {
        // Play for 5 rounds OR until playerScore !== computerScore
        let playerSelection = prompt('Select your battle weapon!');
        playerSelection = playerSelection.toLowerCase();

        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            playerSelection = prompt('Your weapon can only be Rock, Paper, or Scissors!'); // If the text entered is not rock, paper, or scissors, tell them what will be accepted
        }
        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            return 'There shall be no cheating in these games.'; // If they still haven't entered the right text, stop the game and call them a cheater.
        }

        let computerSelection = computerPlay();

        function playRound(playerSelection, computerSelection) {
            //If the player picks rock:
            if (playerSelection === 'rock' && computerSelection === 'scissors') {
                ++playerScore;
                return (
                    'You Win! Your ' +
                    playerSelection +
                    ' smashes the ' +
                    computerSelection +
                    '.\nThe current score is: ' +
                    playerScore +
                    '-' +
                    computerScore +
                    '.'
                );
            } else if (playerSelection === 'rock' && computerSelection === 'paper') {
                ++computerScore;
                return (
                    'You Lose! The ' +
                    computerSelection +
                    ' covers your ' +
                    playerSelection +
                    '.\nThe current score is: ' +
                    playerScore +
                    '-' +
                    computerScore +
                    '.'
                );
            } else if (playerSelection === 'rock' && computerSelection === 'rock') {
                ++tieCounter;
                return (
                    "Would you look at that you both picked rock! It's a tie!\nThe score is still " +
                    playerScore +
                    '-' +
                    computerScore +
                    '.'
                );
            }

            //If the player picks paper:
            if (playerSelection === 'paper' && computerSelection === 'rock') {
                ++playerScore;
                return (
                    'You Win! Your ' +
                    playerSelection +
                    ' covers the ' +
                    computerSelection +
                    '.\nThe current score is: ' +
                    playerScore +
                    '-' +
                    computerScore +
                    '.'
                );
            } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                ++computerScore;
                return (
                    'You Lose! The ' +
                    computerSelection +
                    ' slice up your ' +
                    playerSelection +
                    '.\nThe current score is: ' +
                    playerScore +
                    '-' +
                    computerScore +
                    '.'
                );
            } else if (playerSelection === 'paper' && computerSelection === 'paper') {
                ++tieCounter;
                return (
                    "Holy guacamole you both picked paper! It's a tie!\nThe score is still " +
                    playerScore +
                    '-' +
                    computerScore +
                    '.'
                );
            }

            //If the player picks scissors:
            if (playerSelection === 'scissors' && computerSelection === 'paper') {
                ++playerScore;
                return (
                    'You Win! Your ' +
                    playerSelection +
                    ' slices through the ' +
                    computerSelection +
                    '.\nThe current score is: ' +
                    playerScore +
                    '-' +
                    computerScore +
                    '.'
                );
            } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                ++computerScore;
                return (
                    'You Lose! The ' +
                    computerSelection +
                    ' smashes your ' +
                    playerSelection +
                    '.\nThe current score is: ' +
                    playerScore +
                    '-' +
                    computerScore +
                    '.'
                );
            } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
                ++tieCounter;
                return (
                    'How boring you both picked scissors. A tie.\nThe score is still ' + 
                    playerScore + 
                    '-' + 
                    computerScore + 
                    '.'
                );
            }
        }
        console.log(playRound(playerSelection, computerSelection)); //Play 1 round and display what is returned
    }
    console.log(
        'After ' +
            (round - 1) +
            ' rounds the final score is ' +
            playerScore +
            '-' +
            computerScore +
            ' with ' +
            tieCounter +
            ' tie(s)!',
    ); //Display the final score. round - 1 is needed because the for loop adds an extra round at the end.
}
