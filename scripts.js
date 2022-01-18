'use strict';
// when you input a num and hit check a random num generates, and that random num shows up in '?'
// then if this num is not equal to the inputted num 'score' value goes down
// then if this num is equal to the inputted num the value of the inputted num adds to high score
// then you should hit 'again' btn to reset
// when 'Again!' is clicked, input box, score is reset to 20. 'High score' keeps its value when resetting
// 'high score' changes if the the inputted num equals the random num and is bigger than the current 'high score' value

// Again Btn
////////////////
const againBtn = document.querySelector('.again');
// WHEN CLICKED clear input box (and autofocus again like you've reloaded the page)
// and reset 'score' to 20
// and bring back 'Start guessing ...' and '?'
// NOTE: 'High Score' has to stay unchanged unless page is refreshed

// Check Btn
////////////////
const checkBtn = document.querySelector('.check');
// WHEN CLICKED with nothing inputted or the value inputted is 0 or non-numeric value
// replace 'start guessing...' with 'value must be a num bigger than 0'

// WHEN CLICKED with a value that is a num greater than 0 and less than or equal 20
// random num is generated
// if this generated num is NOT equal to inputted num
// 'Score' goes down 1, input box clears out (and autofocus again like you've reloaded the page)

// WHEN CLICKED with a value that is a num greater than 0 and less than or equal 20
// random num is generated
// if this generated num is equal to inputted num
// and that inputted num is higher than the current value of 'high score'
// the inputted value replaces the value of 'high score'
// the screen turn green
// 'start guessing...' turns to be 'New Score!!' for a second and then changes again to hit 'Again!' to reset

// WHEN CLICKED with a value that is a num greater than 0 and less than or equal 20
// random num is generated
// if this generated num is equal to inputted num
// and that inputted num is lower than the current value of 'high score'
// screen turns to orange
// 'start guessing...' turns to 'good guess. Hit Again! to play again'
checkBtn.addEventListener('click', () => {
  document.querySelector('.number').textContent = '☃︎';
  const input = document.querySelector('.guess');
  input.value = '';
  input.focus();
});
