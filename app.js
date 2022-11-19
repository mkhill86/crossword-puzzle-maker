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
for (let i = 0; i <= 250; i++) {
  const input = document.createElement('input');
  puzzleContainer.appendChild(input);
  input.setAttribute('maxlength', '1');

  fillButton.addEventListener('click', (e) => {
    input.setAttribute('readonly', 'readonly');
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
  })

}
})


