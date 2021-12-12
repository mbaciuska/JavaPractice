
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
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection=='rock'&&computerSelection=='scissors') {return 'Winner! Rock beats Scissors!'.toUpperCase()} 
    else if (playerSelection=='paper'&&computerSelection=='rock') {return 'Winner! Paper beats Rock'.toUpperCase()}
    else if (playerSelection=='scissors'&&computerSelection=='paper') {return 'Winner! Scissors beats Paper'.toUpperCase()}
    else if (playerSelection == computerSelection) {return "It's a tie! You both selected ".toUpperCase() + playerSelection.toUpperCase()}
    else  {return ('Oh no, you lost. ' + computerSelection+ ' beats ' + playerSelection).toUpperCase()};

}

const playerSelection = 'Rock';
const computerSelection = computerPlay();


/* Write a NEW function called game(). Use the previous function 
inside of this one to play a 5 round game that keeps score and reports 
a winner or loser at the end. */

function game (round1,round2,round3,round4,round5) 
{
 
    //playRound
    
    round1 = console.log(playRound(playerSelection,computerSelection));
    round2 = console.log(playRound(playerSelection,computerSelection));
    round3 = console.log(playRound(playerSelection,computerSelection));
    round4 = console.log(playRound(playerSelection,computerSelection));
    round5 = console.log(playRound(playerSelection,computerSelection));

    //if Player wins add 1 point to playerScore, if player loses, add 1 to computerScore
    
}

function tallyScore () {
    
    if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection =='rock') ||
        (playerSelection == 'scissors' && computerSelection=='paper')
    ) {return 1}
    else if (playerSelection == computerSelection) {return 0}
    else {return -1}
    
}
let playerScore = game(playRound(tallyScore()));
console.log(playerScore);
/*
make the function play 5 times
if the player wins increase playerScore by 1
if the player loses, increase computerScore by 1*/


// - Prompt the user to enter their selection 

/* create a function that plays a round and outputs a point for winner. 
    if the player wins, the player gets 1 point
        if player wins, increase playerScore by 1 point (++)
    if the computer wins, the computer gets 1 point
        if player does not win, increase computerScore by 1 point (++)
    whoever gets 5 points first, is declared the winner
        if playerScore ==5 OR computerScore ==5 {return }



*/
