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

startButton.addEventListener('click', (e) => {
if (wordBankNumber.value == '') {
  alert('First, choose how many words!')
} else {
  for (let i = 0; i <= wordBankNumber.value;  i++) {
    const inputWord = document.createElement('input');
    inputWord.setAttribute('type', 'text');
    inputWord.setAttribute('class', 'input-word-list');
    inputWord.setAttribute('maxlength', '15')
    wordBank.appendChild(inputWord);

for (let i = 0; i <= 250; i++) {
  const input = document.createElement('input');
  puzzleContainer.appendChild(input);
  input.setAttribute('maxlength', '1');
  input.setAttribute('class', 'input-word-search');

  fillButton.addEventListener('click', (e) => {
    input.setAttribute('readonly', 'readonly');
    inputWord.setAttribute('readonly', 'readonly');
    inputWord.setAttribute('class', 'input-word-list-filled');
    if (input.value == '') {
        const random = Math.floor(Math.random() * 26) + 1;
        const getRandomLetter = function () {
        return letters[random];
      };
      input.value = getRandomLetter();
  } else {
    return;
  }
  })

  resetButton.addEventListener('click', (e) => {
    input.value = '';
    input.removeAttribute('readonly', 'readonly');
    wordBank.removeChild(inputWord);
    wordBankNumber.value = '';
  })

}
}
}
})


