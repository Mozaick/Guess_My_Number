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
// '21' -> '.score'
const spanElmScore = document.querySelector('.score');
// '0' -> '.high-score'
const spanElmHighScore = document.querySelector('.high-score');

// DOM Elms - </input>
// '' -> '.guess'
const inputElm = document.querySelector('.guess');
console.log(inputElm.value, typeof inputElm.value);

// WHEN '.check' btn clicked
// IF '.guess' is empty || 0 || NAN
// '.msg' changes to "must be number greater than 0"
// && '.num' changes to an Emoji

let score = 21;
let highScore = 0;
let updatedHighScore = 0;
const numMax = 21;
const minusOneBeforeMax = numMax - 1;

const resetMyContent = () => {
  inputElm.value = '';
  inputElm.focus();
  const pElmMsg = document.querySelector('.msg');
  pElmMsg.textContent = 'Start guessing...';
  pElmNum.textContent = '?';
};

btnCheck.addEventListener('click', () => {
  const inputVal = Number(inputElm.value);

  // if inputVal > numMax 'number must be btwn 1 and numMax
  if (inputVal > numMax) {
    pElmMsg.textContent = `📛 number must not be greater than ${numMax}`;
    pElmNum.textContent = '🎭';
    setTimeout(resetMyContent, 2000);
  }
  console.log(inputVal, typeof inputVal);

  // WHEN you input a num and click '.check' btn
  // a randomNum btwn 1 and 21 generates, and shows up in '.num'
  const randomNumGenerator = Math.trunc(Math.random() * numMax + 1);
  if (inputVal <= numMax) pElmNum.textContent = randomNumGenerator;

  if (isNaN(inputVal) || Number(inputVal) <= 0) {
    pElmMsg.textContent = `📛 Enter a number between 1 and ${numMax}`;
    pElmNum.textContent = '🎭';
    setTimeout(resetMyContent, 2000);
  }

  // then
  // IF randomNum ≠≠ inputted num
  // '.score' goes down one
  // score value starts at 21

  if (inputVal !== randomNumGenerator && inputVal !== 0) {
    score = score - 1;
    console.log(score);
    spanElmScore.textContent = score;
    setTimeout(resetMyContent, 900);

    // IF randomNum == inputted num
    // value of that inputted num adds to '.high-score'

    // IF randomNum == inputted num && > current highScore value
    // IF randomNum == inputted num && > current highScore
    // update highScore value
  } else if (inputVal === randomNumGenerator) {
    // Use DOM and create a special effect on the Body Elm
    const bodyElm = document.querySelector('body');
    // IF inputted value == randomNum && < highScore
    // highScore stays with its current value

    // IF inputted value == randomNum && > highScore
    // updated highScore value to that inputted value
    const styleColorRed = () => {
      bodyElm.style.backgroundColor = 'red';
    };

    const styleColorGreen = () => {
      bodyElm.style.backgroundColor = '#60b347';
    };

    const styleColorDefault = () => {
      bodyElm.style.backgroundColor = '#222';
    };

    const styleGuessingCorrectNum = () => {
      pElmNum.textContent = 'Good Job!!';
      pElmMsg.textContent = 'Click the Again Button to Reset Score';
    };

    const styleBreakHighScore = () => {
      pElmNum.textContent = 'You are a BALLER!!';
      pElmMsg.textContent =
        '🎖 New HighScore .. Click the Again Button to Reset Score';
    };
    const styleReachNumMax = () => {
      pElmNum.textContent = 'You are UNBREAKABLE!!';
      pElmMsg.textContent = '🎖🎖🎖 Click the Again Button to Reset Score';
    };

    const colorSetTimeout = () => {
      setTimeout(styleColorRed, 500);
      setTimeout(styleColorGreen, 600);
      setTimeout(styleColorRed, 700);
      setTimeout(styleColorGreen, 800);
      setTimeout(styleColorRed, 900);
      setTimeout(styleColorGreen, 1000);
      setTimeout(styleColorRed, 1100);
      setTimeout(styleColorGreen, 1200);
    };

    if (
      inputVal === randomNumGenerator &&
      inputVal > highScore &&
      inputVal !== numMax
    ) {
      highScore = inputVal;
      spanElmHighScore.textContent = inputVal;
      updatedHighScore = inputVal;
      setTimeout(styleBreakHighScore, 500);
      colorSetTimeout();
      setTimeout(styleColorDefault, 1300);
    } else if (inputVal === randomNumGenerator && inputVal === numMax) {
      highScore = inputVal;
      spanElmHighScore.textContent = inputVal;
      updatedHighScore = inputVal;
      setTimeout(styleReachNumMax, 500);
      colorSetTimeout();
    } else if (
      inputVal === randomNumGenerator &&
      inputVal <= updatedHighScore
    ) {
      bodyElm.style.backgroundColor = '#60b347';
      setTimeout(styleGuessingCorrectNum, 500);
      setTimeout(styleColorDefault, 700);
    }
  }


  const oneLastTryMsg = () => {
    pElmMsg.textContent = 'One try left .. Good Luck!!';
    pElmNum.textContent = '🤞🤞';
  };
  const OneLastLuckyTryMsg = () => {
    pElmMsg.textContent = 'Damn!! You are a Goat!!';
    pElmNum.textContent = '🤩🤩';
  };

  const gameOverMsg = () => {
    btnAgain.textContent = 'Restart';
    pElmMsg.textContent = 'Game Over .. Hit Restart and try again';
    pElmNum.textContent = '🤯🤬🤬👾';
  };

  if (score === 1) {
    // try to default '?' to '.num' first
    setTimeout(oneLastTryMsg, 500);
    setTimeout(oneLastTryMsg, 900);
    setTimeout(oneLastTryMsg, 900);
    setTimeout(oneLastTryMsg, 500);
  } else if (score === 1 && inputVal === randomNumGenerator) {
    setTimeout(OneLastLuckyTryMsg, 500);
    setTimeout(OneLastLuckyTryMsg, 900);
    setTimeout(OneLastLuckyTryMsg, 900);
    setTimeout(OneLastLuckyTryMsg, 500);
  } else if (score === 0 && inputVal !== randomNumGenerator) {
    // try to default '?' to '.num' first
    setTimeout(gameOverMsg, 500);
    setTimeout(gameOverMsg, 900);
    setTimeout(gameOverMsg, 900);
    setTimeout(gameOverMsg, 500);
  }

  if (score <= minusOneBeforeMax && score >= 15)
    spanElmScore.style.color = 'green';
  if (score <= 14 && score > 8) spanElmScore.style.color = 'gold';
  if (score <= 7 && score > 4) spanElmScore.style.color = 'orange';
  if (score <= 3 && score > 0) spanElmScore.style.color = 'red';
});

// then you should click '.again' btn to reset
// WHEN 'reset' default everything EXCEPT 'High Score'

btnAgain.addEventListener('click', () => {
  resetMyContent();
  score = 21;
  spanElmScore.textContent = score;

  if (btnAgain.textContent === 'Restart') {
    console.log(score, highScore, updatedHighScore, numMax, minusOneBeforeMax);
    location.reload();
  }
});

// WHEN '.again' btn clicked, '.guess' clears out
// && '.score' resets to 21

// '.high-score' changes from current value to something else
// IF inputted num == random num
// && inputted num > current '.high-score' value
// ELSE WHEN '.again' btn clicked '.high-score' == current
