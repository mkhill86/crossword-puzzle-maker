const letters = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
  6: 'f',
  7: 'g',
  8: 'h',
  9: 'i',
  10: 'j',
  11: 'k',
  12: 'l',
  13: 'm',
  14: 'n',
  15: 'o',
  16: 'p',
  17: 'q',
  18: 'r',
  19: 's',
  20: 't',
  21: 'u',
  22: 'v',
  23: 'w',
  24: 'x',
  25: 'y',
  26: 'z',
}

const puzzleContainer = document.querySelector('#puzzle-container');
const fillButton = document.querySelector('#fill');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
const wordBankNumber = document.querySelector('#word-list-number');
const wordBank = document.querySelector('.word-list-container');
const alertContainer = document.querySelector('.alert-container');

// ----------this is where I wrote the random letter logic--------
// let count = 0
//   while (count <= 196) {
//     count++;
//     let box = document.createElement('p');
//     const random = Math.floor(Math.random() * 26) + 1;
//     const getRandomLetter = function () {
//       return letters[random];
//     };
//     box.innerHTML = getRandomLetter();
//     puzzleContainer.appendChild(box);
//   }
  const redAlert = document.createElement('h3');
  alertContainer.appendChild(redAlert);
  redAlert.innerText = 'DO THIS PART FIRST!';
  redAlert.setAttribute('class', 'red-alert-hidden');

startButton.addEventListener('click', (e) => {
if (wordBankNumber.value == '') {
  redAlert.setAttribute('class', 'red-alert');

} else {
  redAlert.setAttribute('class', 'red-alert-hidden');
  for (let i = 0; i < wordBankNumber.value;  i++) {
    const inputWord = document.createElement('input');
    inputWord.setAttribute('type', 'text');
    inputWord.setAttribute('class', 'input-word-list');
    inputWord.setAttribute('maxlength', '15')
    wordBank.appendChild(inputWord);

    wordBankNumber.disabled = true;
    startButton.disabled = true;

for (let i = 0; i <= 250; i++) {
  const input = document.createElement('input');
  puzzleContainer.appendChild(input);
  input.setAttribute('maxlength', '1');
  input.setAttribute('class', 'input-word-search');

  fillButton.addEventListener('click', (e) => {
    if (inputWord.value == '') {
      redAlert.setAttribute('class', 'red-alert');
      } else if (input.value == '' && inputWord.value !== '') {
        const random = Math.floor(Math.random() * 26) + 1;
        const getRandomLetter = function () {
        return letters[random];
      };
      input.value = getRandomLetter();
      redAlert.setAttribute('class', 'red-alert-hidden');
      input.setAttribute('readonly', 'readonly');
      inputWord.setAttribute('readonly', 'readonly');
      inputWord.setAttribute('class', 'input-word-list-filled'); 
    } else {
      input.value = input.value.toLowerCase();
    }
  })

  resetButton.addEventListener('click', (e) => {
    input.value = '';
    input.removeAttribute('readonly', 'readonly');
    wordBank.removeChild(inputWord);
    wordBankNumber.value = '';
    startButton.disabled = false;
    wordBankNumber.disabled = false;
    redAlert.setAttribute('class', 'red-alert-hidden');
  })

}
}
}
})


