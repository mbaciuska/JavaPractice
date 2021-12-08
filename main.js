
// Define the moves that the computer can make (Rock, Paper, Scissors)
const moves = ['Rock', 'Paper', 'Scissors'];


//Tell the computer to output a random script from the array we provided

function computerPlay () {

return moves[Math.floor (Math.random() * moves.length)];

}


/*Write a function that plays a single round of Rock Paper Scissors.
- if the player wins - a congrats message needs to be displayed
- if the player loses - a sorry message will be displayed
- if it is a draw - a tie message appears.
*/

function playRound (playerSelection, computerSelection){

    if (playerSelection=='Rock'&&computerSelection=='Scissors') {return 'Winner! Rock beats Scissors'}
    else if (playerSelection=='Paper'&&computerSelection=='Rock') {return 'Winner! Paper beats Rock'}
    else if (playerSelection=='Scissors'&&computerSelection=='Paper') {return 'Winner! Scissors beats Paper'}
    else if (playerSelection == computerSelection) {return "It's a tie! You both selected " + playerSelection}
    else  {return 'Oh no, you lost. ' + computerSelection + ' beats ' + playerSelection};

}

const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));

/* Write a NEW function called game(). Use the previous function 
inside of this one to play a 5 round game that keeps score and reports 
a winner or loser at the end. */

function game(){

    console.log (playRound(playerSelection,computerSelection));
    console.log (playRound(playerSelection,computerSelection));
    console.log (playRound(playerSelection,computerSelection));
    console.log (playRound(playerSelection,computerSelection));
    console.log (playRound(playerSelection,computerSelection));

}

game(playerSelection, computerSelection);

// - Prompt the user to enter their selection 







