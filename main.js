/*
TODO
- no repeating word
- proper capitalization
- more action words
*/

const WORDBANK = ['dragon', 'orc', 'spell', 'dwarf', 'elf', 'gnome', 'human', 'magic', 'king', 'arrow', 'crossbow', 'bow', 'bolts', 'spear','forest', 'majestic', 'fireball', 'castle', 'knight', 'royalty', 'wizard']

//num represent what user insert
function buildLorem(num) {
  let final = `${capitalize(WORDBANK[randomWord()])} `
  while (num > 1) {
    let newWord = randomLetterS() ? WORDBANK[randomWord()] : WORDBANK[randomWord()] + 's';
    final += randomPeriod() ? `${newWord} ` : `. ${capitalize(newWord)} `;
    num--;
  }
  final += '. '
  return final.replaceAll(' . ', '. ');
}

function randomWord() {
  let max = WORDBANK.length;
  let random = Math.floor(Math.random() * max);
  return random
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function randomPeriod() {
  let chance = Math.ceil(Math.random() * 10);
  return chance > 1;
}

function randomLetterS() {
  let chance = Math.ceil(Math.random() * 10);
  return chance > 1;
}

/*
EXAMPLES
Tofu oranges Italian linguine.  Puttanesca salty mushroom risotto banana bread Thai sun pepper hemp seeds ultimate farro platter cayenne strawberries Thai curry green pepper crispy iceberg lettuce. Peanut butter crunchy Bolivian rainbow pepper lychee cauliflower shiitake mushrooms chia seeds peppermint bento box Sicilian pistachio pesto creamy cauliflower alfredo sauce. Chili sesame soba noodles Chinese five-spice powder dill coconut milk Thai dragon pepper avocado ginger carrot spiced juice Malaysian hummus falafel bowl red pepper green onions coconut sugar açai eating together jalapeño seitan apricot hot lentils lemon lime minty mocha chocolate hazelnut shiitake.

HOW MANY WORDS => 30

build out the text with first word capitalize
    - randomly insert periods with next word capitalize
    - have period at the end

*/
console.log(buildLorem(50))