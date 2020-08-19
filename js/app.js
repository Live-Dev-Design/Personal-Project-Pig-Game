/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// create variables
var scores, roundScore, activePlayer, dice, gamePlaying;
 
// call initialise function
init();

// select the btn-roll class element and adding event listener to the click event
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Variable storing the random number between 1-6
        var dice = Math.floor(Math.random() * 6) + 1;   // + 1 to prevent 0 being used

        // 2. Display result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';    // setting display property
        diceDOM.src = 'img/dice-' + dice + '.png';  // changing src img using the random number 


        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            // add score
            roundScore += dice;
            //display the round score on page
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            // next player
            nextPlayer();
        }
    }
    
});

// select the btn-roll class element and adding event listener to the click event
document.querySelector('.btn-hold').addEventListener('click', function () {
    // 1. add current score to global score
    scores[activePlayer] += roundScore;

    // 2. update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  
     //3. check if player won the game
    if (scores[activePlayer] >= 20) {
        gamePlaying = false;
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';         // print Winner! instead of Player#
        document.querySelector('.dice').style.display = 'none'; // remove the dice when player wins
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');    // add css class winner
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');  // remove css class active
 
    } else {
        // next player
        nextPlayer();
    }

});

function nextPlayer() {
    // next player
    // Ternary operator - if activePlayer = 0 then activePlayer should be 1, else activePlayer should be 0. 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // reset roundScore to 0
    roundScore = 0;

    // reset current score to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // addd / remove the 'active' class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // hide the dice when player changes
    document.querySelector('.dice').style.display = 'none';
};

// New game button using the init function created below
document.querySelector('.btn-new').addEventListener('click', init);
     
// start of game preset and new game resets
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    // hide the dice at start of game
    document.querySelector('.dice').style.display = 'none';

    // setting the scores to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1'; 
    document.getElementById('name-1').textContent = 'Player 2'; 
    document.querySelector('.player-0-panel').classList.remove('winner');    // remove css class winner
    document.querySelector('.player-1-panel').classList.remove('winner');    // remove css class winner
    document.querySelector('.player-0-panel').classList.remove('active');    // remove css class active
    document.querySelector('.player-1-panel').classList.remove('active');    // remove css class active
    document.querySelector('.player-0-panel').classList.add('active');      // add css class active

}

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
