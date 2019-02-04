game();                                                             // Run the game when the page is open
function computerPlay() {
    var getRandomNumber = Math.floor(Math.random() * 3) + 1;        // Math.floor combined with Math.random() will return a random integer. This line will return an integer between 1 and 3.
    var selection;
    switch(getRandomNumber) {                                       // Set selection to the proper battle tool, depending on the random number.
        case 1:
            selection =  "rock";
            break;
        case 2:
            selection =  "paper";
            break;
        case 3:
            selection =  "scissors";
            break;
    }
    return selection;
}

function game() {
    var playerScore = 0;                        // Keep track of the player's score for each game.
    var computerScore = 0;                      // Keep track of the computer's score for each game.
    var tieCounter = 0;                         // Keep track of any ties

    for (var round = 1; ((round <= 5) || (playerScore === computerScore)); ++round){                                // Play for 5 rounds OR until playerScore !== computerScore
        var playerSelection = prompt("Select your battle weapon!");                                                 // Have the person select rock, paper, or scissors.
        playerSelection = playerSelection.toLowerCase();                                                            // Covert that choice to lower case for easier comparison
        if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {    // Make sure a proper weapon is entered into the pompt
            playerSelection = prompt("Your weapon can only be Rock, Paper, or Scissors!");                          // If not, tell them what will be accepted
        } 
        if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")){     // Test again if they entered a proper weapon
            return "There shall be no cheating in these games.";                                                    // If they still haven't, stop the game and call them a cheater.
        }

        var computerSelection = computerPlay();                                                                     //Get the computer's choice
        
        function playRound(playerSelection, computerSelection) {
            //If the player picks rock:
            if ((playerSelection === "rock") && (computerSelection === "scissors")) {
                ++playerScore;
                return "You Win! Your " + playerSelection + " smashes the " + computerSelection + ".\nThe current score is: " +  playerScore + "-" + computerScore + ".";
            } else if((playerSelection === "rock") && (computerSelection === "paper")){
                ++computerScore;
                return "You Lose! The " + computerSelection + " covers your " + playerSelection + ".\nThe current score is: " +  playerScore + "-" + computerScore + ".";
            } else if ((playerSelection === "rock") && (computerSelection === "rock")) {
                ++tieCounter;
                return "Would you look at that you both picked rock! It's a tie!\nThe score is still " +  playerScore + "-" + computerScore + ".";
            }     
        
            //If the player picks paper:
            if ((playerSelection === "paper") && (computerSelection === "rock")) {
                ++playerScore;
                return "You Win! Your " + playerSelection + " covers the " + computerSelection + ".\nThe current score is: " +  playerScore + "-" + computerScore + ".";
            } else if((playerSelection === "paper") && (computerSelection === "scissors")){
                ++computerScore;
                return "You Lose! The " + computerSelection + " slice up your " + playerSelection + ".\nThe current score is: " +  playerScore + "-" + computerScore + ".";
            } else if ((playerSelection === "paper") && (computerSelection === "paper")) {
                ++tieCounter;
                return "Holy guacamole you both picked paper! It's a tie!\nThe score is still " +  playerScore + "-" + computerScore + ".";
            }     
        
            //If the player picks scissors:
            if ((playerSelection === "scissors") && (computerSelection === "paper")) {
                ++playerScore;
                return "You Win! Your " + playerSelection + " slices through the " + computerSelection + ".\nThe current score is: " +  playerScore + "-" + computerScore + ".";
            } else if((playerSelection === "scissors") && (computerSelection === "rock")){
                ++computerScore;
                return "You Lose! The " + computerSelection + " smashes your " + playerSelection + ".\nThe current score is: " +  playerScore + "-" + computerScore + ".";
            } else if ((playerSelection === "scissors") && (computerSelection === "scissors")) {
                ++tieCounter;
                return "How boring you both picked scissors. A tie.\nThe score is still " +  playerScore + "-" + computerScore + ".";
            }
        }
        console.log(playRound(playerSelection, computerSelection));                                         //Play 1 round and display what is returned
    }
    console.log("After " + (round - 1) + " rounds the final score is " + playerScore + "-" + computerScore + " with " + tieCounter + " ties!"); //Display the final score. round - 1 is needed because the for loop adds an extra round at the end.
}