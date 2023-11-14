const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  alphabet.split('').forEach((letter) => {          // Creates an array from the above constant. Loops through each letter
    const btn = document.createElement('button');   // Sets up a constant variable and assign it to a newly created HTML element 'button'
    btn.innerText = letter;                         // Set the 'btn' to letter parameter
    btn.addEventListener('click', (e) => handleGuess(e, letter)); // Eventlistener that checks for a click 
    element.append(btn);                            // Append the element parameter to the 'btn' constant
  });
}
export default setupGuesses;
