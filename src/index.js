const MORSE_TABLE = {
  '.-':    'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':   'd',
  '.':     'e',
  '..-.':   'f',
  '--.':   'g',
  '....':   'h',
  '..':    'i',
  '.---':   'j',
  '-.-':   'k',
  '.-..':   'l',
  '--':    'm',
  '-.':    'n',
  '---':   'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':   'r',
  '...':   's',
  '-':     't',
  '..-':   'u',
  '...-':   'v',
  '.--':   'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  let string = expr;
  let stack = [];
  while (string.length) {
    stack.push(string.slice(0, 10));
    string = string.slice(10);
  }
  string = [];
  for(let i=0; i<stack.length; i++) {
    if (stack[i].includes('*')) string.push(' ');
      else {
        let item = stack[i].slice(stack[i].indexOf('1'));
        item = item.replace(/10/g, '.');
        item = item.replace(/11/g, '-');
        item = MORSE_TABLE[item];
        string.push(item);
      }
    
  }  
  stack = string.join('');
  return stack;
}

module.exports = {
  decode
}