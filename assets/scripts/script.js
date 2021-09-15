
// declare variable for player and computer hands
var playerHand;
var computerHand;

// declare variables for possible outcomes
var result;
// var win;
// var loss;
// var draw;

//declare variables for keeping track of outcomes
var winCount;
var lossCount;
var drawCount;

// ask the player if they want to play
function playGame() {
    if (window.confirm("Let's play a game...")) {

        // give prompt for player to select R, P, or S.
        playerHand = window.prompt("Please select R, P, or S");

        // check that a selection has been made
        // TO DO

        // get computer to select a hand
        computerSelection();

        //check who won
        result = whoWon();

        // display result to user

        displayResult(result);

    };
}; // END - playGame



// generate at random either 0, 1, or 2
function randomInt() {
    return Math.floor(Math.random() * 3);
}; // END - randomInt



// use random number to get the computer's choice for R, P, or S.
function computerSelection () {

    //get a random number
    var x = randomInt();

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
   // playerHand = "S";
   // computerHand = "R";
   // console.log(playerHand, computerHand);

    // both the same = draw
    if (playerHand == computerHand) {
        console.log("draw");
        return result = "draw";

    // R beats S
    } else if (playerHand == "R" && computerHand == "S") {
        console.log("win1");
        return result = "win";

    // S beats P
    } else if (playerHand == "S" && computerHand == "P") {
       console.log("win2");
       return result = "win";

    // P beats R 
    } else if (playerHand == "P" && computerHand == "R") {
       console.log("win3");
       return result = "win";

    // otherwise player looses
    } else {
        console.log("loss");
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
}
