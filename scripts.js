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
// && '.num' changes to an Emoji

let score = 20;
let highScore = 0;
let updatedHighScore = 0;

const resetMyContent = () => {
  inputElm.focus();
  inputElm.value = '';
  const pElmMsg = document.querySelector('.msg');
  pElmMsg.textContent = 'Start guessing...';
  pElmNum.textContent = '?';
};

btnCheck.addEventListener('click', () => {
  // WHEN you input a num and click '.check' btn
  // a random num btwn 1 and 20 generates, and shows up in '.num'
  const randomNumGenerator = Math.trunc(Math.random() * 5 + 1);
  pElmNum.textContent = randomNumGenerator;

  const inputVal = document.querySelector('.guess').value;
  if (isNaN(inputVal) || Number(inputVal) <= 0) {
    pElmMsg.textContent = '⛔️ must be number greater than 0';
    pElmNum.textContent = '🎭';
    setTimeout(resetMyContent, 2000);
  }

  // then
  // IF random num ≠≠ inputted num
  // '.score' goes down one
  // score value starts at 20

  if (
    Number(inputElm.value) !== randomNumGenerator &&
    Number(inputElm.value) !== 0
  ) {
    score = score - 1;
    spanElmScore.textContent = score;
    setTimeout(resetMyContent, 2000);

    // IF random num == inputted num
    // value of that inputted num adds to '.high-score'

    //IF random num == inputted num && > current highScore value
    // update highScore value if random num == inputted num && > current highScore
  } else if (parseInt(inputElm.value) === randomNumGenerator) {
    if (inputElm.value > updatedHighScore) {
      highScore = inputElm.value;
      spanElmHighScore.textContent = inputElm.value;
    }
    pElmNum.textContent = 'You are a BALLER!!';
    pElmMsg.textContent = 'Click the Again Button to Reset';
    updatedHighScore = inputElm.value;
    console.log(updatedHighScore);

    // Use DOM and create a special effect on the Body Elm
    const bodyElm = document.querySelector('body');
    const styleColorRed = () => {
      bodyElm.style.backgroundColor = 'red';
    };

    const styleColorGreen = () => {
      bodyElm.style.backgroundColor = '#60b347';
    };
    const styleColorDefault = () => {
      bodyElm.style.backgroundColor = '#222';
    };

    bodyElm.style.backgroundColor = '#60b347';
    setTimeout(styleColorRed, 500);
    setTimeout(styleColorGreen, 600);
    setTimeout(styleColorRed, 700);
    setTimeout(styleColorGreen, 800);
    setTimeout(styleColorRed, 900);
    setTimeout(styleColorGreen, 1000);
    setTimeout(styleColorRed, 1100);
    setTimeout(styleColorGreen, 1200);
    setTimeout(styleColorDefault, 1300);
  }
  console.log(Number(inputElm.value), inputElm.value);
});

// then you should click '.again' btn to reset
// WHEN 'reset' default everything EXCEPT 'High Score'

btnAgain.addEventListener('click', () => {
  score = 20;
  spanElmScore.textContent = 20;
  resetMyContent();
});

// WHEN '.again' btn clicked, '.guess' clears out
// && '.score' resets to 20

// '.high-score' changes from current value to something else
// IF inputted num == random num
// && inputted num > current '.high-score' value
// ELSE WHEN '.again' btn clicked '.high-score' == current
