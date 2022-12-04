/*
Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
Tests

Waiting: rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
Waiting: rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
Waiting: rot13("SERR YBIR?") should decode to the string FREE LOVE?
Waiting: rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

function rot13(str) {
    let key = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      let char = str[i].charCodeAt();
      if (char >= 65 && char < 112) arr.push(key[char - 65]);
      else arr.push(str[i]);
    }
    // console.log(arr.join(''));
    return arr.join('');
  }
  
  rot13("SERR PBQR PNZC");