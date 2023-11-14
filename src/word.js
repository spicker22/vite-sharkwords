let word;

function setupWord(initWord, element) {
    word = initWord;
    word.split('').forEach(() => {
        element.insertAdjacentHTML('beforeend', `<div class="letter-box"></div>`);
      });
    }

function isLetterInWord(letter) {
    return word.includes(letter);
}

function revealLetterInWord(letter) {
    const letterBoxes = document.querySelectorAll('.letter-box');
    word.split('').forEach((wordLetter, idx) => {
      if (wordLetter === letter) {
        letterBoxes[idx].innerHTML = letter;
      }
    });
  }




// Export functions
export {setupWord, isLetterInWord, revealLetterInWord};





