/*
TODO
[COMPLETE]- no repeating word
[SKIP] proper plural words
[SKIP] more action words

[COMPLETE] - Number of words input

[] - HTML & CSS
*/
document.querySelector('#create').addEventListener('click', buildLorem)
document.querySelector('#copy').addEventListener('click', copyLorem)
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')


const WORDBANK = ['dragon', 'orc', 'spell', 'dwarf', 'elf', 'gnome', 'human', 'magic', 'king', 'arrow', 'crossbow', 'bow', 'bolts', 'spear','forest', 'majestic', 'fireball', 'castle', 'knight', 'royalty', 'wizard']
function copyLorem() {
  let text = textarea.value;
  navigator.clipboard.writeText(text);
}
//num represent what user insert
function buildLorem() {
  let num = +input.value;
  if (!num) return;

  let initialWord = `${capitalize(randomWord())} `
  let final = initialWord;
  let previousWord = initialWord;
  while (num > 1) {
    let newWord = createNewWord();
    while (isSame(newWord, previousWord)) {
      newWord = createNewWord();
    }
    previousWord = newWord;
    final += randomPeriod() ? `${newWord} ` : `. ${capitalize(newWord)} `;
    num--;
  }
  final += '. '
  final = final.replaceAll(' . ', '. ').trim()
  textarea.innerText = final;
  textarea.style.display='block';
}


function isSame(newWord, previousWord) {
  //return newWord === previousWord || newWord === previousWord + 's' || previousWord === newWord + 's';
  return pluralize(newWord) === pluralize(previousWord);
}

function createNewWord() {
  return isPluralWord() ? pluralize(randomWord()) : randomWord();
}

function randomWord() {
  let max = WORDBANK.length;
  let random = Math.floor(Math.random() * max);
  return WORDBANK[random];
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function randomPeriod() {
  let chance = Math.ceil(Math.random() * 10);
  return chance > 1;
}

function isPluralWord() {
  let chance = Math.ceil(Math.random() * 10);
  return chance > 8;
}
console.log(pluralize('test', 0))