'use strict';

const btnAgain = document.querySelector('.again');

const btnCheck = document.querySelector('.check');

const pElmNum = document.querySelector('.num');

const pElmMsg = document.querySelector('.msg');

const spanElmScore = document.querySelector('.score');

const spanElmHighScore = document.querySelector('.high-score');

const inputElm = document.querySelector('.guess');
console.log(inputElm.value, typeof inputElm.value);

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

  if (inputVal > numMax) {
    pElmMsg.textContent = `📛 number must not be greater than ${numMax}`;
    pElmNum.textContent = '🎭';
    setTimeout(resetMyContent, 2000);
  }
  console.log(inputVal, typeof inputVal);

  const randomNumGenerator = Math.trunc(Math.random() * numMax + 1);
  if (inputVal <= numMax) pElmNum.textContent = randomNumGenerator;

  if (isNaN(inputVal) || Number(inputVal) <= 0) {
    pElmMsg.textContent = `📛 Enter a number between 1 and ${numMax}`;
    pElmNum.textContent = '🎭';
    setTimeout(resetMyContent, 2000);
  }

  if (inputVal !== randomNumGenerator && inputVal !== 0) {
    score = score - 1;
    console.log(score);
    spanElmScore.textContent = score;
    setTimeout(resetMyContent, 900);
  } else if (inputVal === randomNumGenerator) {
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

btnAgain.addEventListener('click', () => {
  resetMyContent();
  score = 21;
  spanElmScore.textContent = score;

  if (btnAgain.textContent === 'Restart') {
    console.log(score, highScore, updatedHighScore, numMax, minusOneBeforeMax);
    location.reload();
  }
});
