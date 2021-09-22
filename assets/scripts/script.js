
// declare variable for player and computer hands
var playerHand;
var computerHand;

// declare variables for possible outcomes
var result;

//declare variables for keeping track of outcomes
var winCount = 0;
var lossCount = 0;
var drawCount = 0;

// ask the player if they want to play
function playGame() {
    if (window.confirm("Let's play a game...")) {

        // give prompt for player to select R, P, or S.
        playerHand = window.prompt("Please select R, P, or S").toUpperCase();

        // check that a selection has been made
        // check for a player selection
        // do {
        //     playerHand = window.prompt("You did not make a valid selection. Please select R, P, or S");
        //     console.log(playerHand);
        //     //return playerHand;
        // } while ((playerHand !== "R") || (playerHand !== "P") || (playerHand !== "S"));

        // get computer to select a hand
        computerSelection();

        //check who won
        result = whoWon();

        // display result to the player
        displayResult(result);

        // display results tally to the player
        showTally();

    };
}; // END - playGame




// generate at random
function randomInt(max) {
    return Math.floor(Math.random() * max);
}; // END -- randomInt



// use random number to get the computer's choice for R, P, or S.
function computerSelection () {

    //get a random number between 0 and 2
    var x = randomInt(3);

    // if randomInt = 0 then = Rock
    if (x == 0) {
        window.alert("Computer selected Rock");
        return computerHand = "R";

    // if randomInt = 1 then = Paper
    } else if (x == 1) {
        window.alert("Computer selected Paper");
        return computerHand = "P";

    // else = Scissors
    } else {
        window.alert("Computer selected Scissors");
        return computerHand = "S";
    }
}; // END -- computerSelection



// compare player and computer selections
function whoWon () {

    // both the same = draw
    if (playerHand == computerHand) {
        drawCount ++;
        return result = "draw";

    // R beats S
    } else if (playerHand == "R" && computerHand == "S") {
        winCount ++; 
        return result = "win";

    // S beats P
    } else if (playerHand == "S" && computerHand == "P") {
       winCount ++;
       return result = "win";

    // P beats R 
    } else if (playerHand == "P" && computerHand == "R") {
       winCount ++; 
       return result = "win";

    // otherwise player looses
    } else {
        lossCount ++;
        return result = "loss";
    };
    
}; // END -- whoWon


// display result to the player
function displayResult (result) {

    if (result == "draw") {
        window.alert("It was a draw");

    } else if (result == "win") {
        window.alert("You won!");

    } else {
        window.alert("The computer won, better luck next time.");
    }
} // END -- whoWon


// show win loss draw tally
function showTally () {
    window.alert(`Total wins: ${winCount}. Total losses: ${lossCount}. Total draws: ${drawCount}.`)
}