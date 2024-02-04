const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const diceImg = document.querySelector('.dice');
const BtnNew = document.querySelector('.btn--new');
const BtnHold = document.querySelector('.btn--hold');
const BtnRoll = document.querySelector('.btn--roll');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
let currentScore = 0;
const holdScore = [0, 0];
let activePlayer = 0;
let playing = true;
//function that switch players

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;

diceImg.classList.add('hidden');

BtnRoll.addEventListener('click', function () {
  if (playing) {
    //Generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display dice image
    diceImg.src = `dice-${dice}.png`;
    diceImg.classList.remove('hidden');
    //check if dice is equal to 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      if (document.getElementById(`score--${activePlayer}`).textContent >= 20) {
        //   alert(`🎊 Player ${activePlayer} is a winner`);
        console.log('hello');
      }
      switchPlayer();
    }
  }
});
BtnHold.addEventListener('click', function () {
  if (playing) {
    holdScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      holdScore[activePlayer];

    if (holdScore[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
      diceImg.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

BtnNew.addEventListener('click', function () {
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  scoreEl0.classList.add('active-player');
  scoreEl1.classList.remove('active-player');
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  currentScore = 0;
  holdScore = [0, 0];
  activePlayer = 0;
  playing = true;
  document.querySelector('.dice').classList.add('hidden');
});
