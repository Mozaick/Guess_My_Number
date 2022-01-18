'use strict';
// DOM Elms -  </button>
////////////////////
// Again -> '.again'
const btnAgain = document.querySelector('.again');
// Check! -> '.check'
const btnCheck = document.querySelector('.check');

// DOM Elms - </p>
////////////////////
// '?' -> '.num'
const pElmNum = document.querySelector('.num');
// 'start guessing...' -> '.message'
const pElmMsg = document.querySelector('.msg');

// DOM Elms - </span>
////////////////////
// '20' -> '.score'
const spanElmScore = document.querySelector('.score');
// '0' -> '.high-score'
const spanElmHighScore = document.querySelector('.high-score');

// DOM Elms - </input>
// '' -> '.guess'
const inputElm = document.querySelector('.guess');

// WHEN '.check' btn clicked
// IF '.guess' is empty || 0 || NAN
// '.msg' changes to "must be number greater than 0"
// && '.num' changes to Emoji
btnCheck.addEventListener('click', () => {
//   Number(inputElm.value);
//     console.log(inputElm.value, typeof Number(inputElm.value), isNaN(inputElm));
const inputElm = Number(document.querySelector('.guess'));
console.log(inputElm, inputElm.value, typeof inputElm);
  if (inputElm === '' || inputElm === 0 || isNaN(inputElm)) {
    pElmMsg.textContent = '⛔️ must be number greater than 0';
    pElmNum.textContent = '🎭';
    function clearNdAutofocus() {
      inputElm.value = null;
      inputElm.focus();
    }
    setTimeout(clearNdAutofocus, 1000);
  }
});

// WHEN you input a num and click '.check' btn
// a random num generates, and shows up in '.num'

// then
// IF random num ≠≠ inputted num
// '.score' goes down one

// IF random num == inputted num
// value of that inputted num adds to '.high-score'

// then you should click '.again' btn to reset

// WHEN '.again' btn clicked, '.guess' clears out
// && '.score' resets to 20

// '.high-score' changes from current value to something else
// IF inputted num == random num
// && inputted num > current '.high-score' value
// ELSE WHEN '.again' btn clicked '.high-score' == current
