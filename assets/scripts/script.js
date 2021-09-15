
// ask the player if they want to play
function playGame() { if (window.confirm("Let's play a game...")) {
    // give prompt for player to select R, P, or S.
    window.prompt("Please select R, P, or S");
    // check that a selection has been made
};
};



// generate at random either 0, 1, or 2
function randomInt() {
    return Math.floor(Math.random() * 3);
};

// declare variable for computers hand
var computerHand;

// use a random number generator to get the computer's choice for R, P, or S.
function computerSelection () {
    //get a random number
    var x = randomInt();
    // if randomInt = 0 then = Rock
    if (x == 0) {
        return computerHand = "R";
    // if randomInt = 1 then = Paper
    } else if (x == 1) {
        return computerHand = "P";
    // else = Scissors
    } else {
        return computerHand = "S";
    }
};


// compare player and computer selections

// R beats S

// P beats R

// S beats P

// display result to the player