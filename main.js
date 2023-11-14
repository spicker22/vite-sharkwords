import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import {setupWord, isLetterInWord, revealLetterInWord}  from './src/word.js';
import setupGuesses from './src/guess.js';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;



const initSharkwords = () => {
  let numWrong = 0;
  setSharkImage(document.querySelector('#shark-img'), numWrong);
  const word = getRandomWord();
  setupWord(word, document.querySelector('#word-container'));
  console.log(isLetterInWord(word[0]), '(should be true)');
  console.log(isLetterInWord('1'), '(should be false)');
  

  /////  Handle Guess Function  /////
  const handleGuess = (guessEvent, letter) => {
    // Disable button after click
   const button = guessEvent.target;
   button.setAttribute('disabled', true);
   // Handle correct/incorrect guess
   if (isLetterInWord(letter)) {
     revealLetterInWord(letter);
   } else {
     numWrong += 1;
     setSharkImage(document.querySelector('#shark-img'), numWrong);
   }

   ///// isWordComplete Function /////
   //const isWordComplete = Array.from(document.querySelectorAll('.letter-box')).every(
   // (el) => el.innerText !== '');

  document.querySelectorAll('button').forEach((btn) => {
    btn.setAttribute('disabled', false);
  });
 };

  setupGuesses(document.querySelector('#letter-buttons'), handleGuess);

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);

};


initSharkwords();





