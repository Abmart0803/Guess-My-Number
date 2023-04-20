/* eslint-disable no-console */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
// after refactoring the code.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no inpput.
  if (!guess) {
    displayMessage('⛔ No Number!');
    document.querySelector('body').style.backgroundColor = '#5f9ea0';

    // When player wins.
  } else if (guess === secretNumber) {
    displayMessage('🍦Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🚩 Too High!' : '🚩 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🦞 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#dc143c';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('😝 Start Guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
