/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;
scores = [0,0];
roundScore = 0;
activePlayer = 0;

// hide the dice at start of game
document.querySelector('.dice').style.display = 'none';

// setting the scores to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


// select the btn-roll class element and adding event listener to the click event
document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random number between 1-6
    var dice = Math.floor(Math.random() * 6) + 1; 

    // 2. Display result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'img/dice-' + dice + '.png';


    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        // add score
        roundScore += dice;
        //display round score on page
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        // next player
        // Ternary operator = if activePlayer = 0 then activePlayer should be 1, else activePlayer should be 0. 
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        // reset roundScore to 0
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    }

});




// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
