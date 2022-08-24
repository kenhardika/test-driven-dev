// what is caesar ciper?
// its an old text based cyphering technique made by Julius Caesar himself.
// basically, you set the cypher 'shift' number then, that number will be shifting letter ex: A=0, B=1. C=2. Translate A with shift= 2. Amswer is A = C,
// because cypherLetter = shiftNum + letterNum so 2+0 = 2, what got number 2? thats "C".

function cypher(word, shift) {
  const LOW_POINT = 97; // 
  const HIGH_POINT = 122;
  const TOTAL_LETTER = 26;
  //guard clause
  if (!word) {
    return
  }
  if (!shift && shift !== 0) {
    return 
  }
  if (typeof shift !== "number") {
    return
  }
  // slice the word into each letter then put into filter, its either cypher or passthrough
  else {
    const slicedWord = word.split("");
    let cyphered = slicedWord.map((letter) => {
      if (/[a-zA-Z]/.test(letter)) {
        //change the letter to coded
        const alphaValConv = (val) => {
          // low point a=97
          // high point z=122
          // how we are looping through from 122 back to 97
          // possibility 1, if (val>122) then val - 26;
          let alphaNum = val.toLowerCase().charCodeAt(0) + shift;
          // let alphaNum = val.toLowerCase().charCodeAt(0) - 97 + shift;
          // console.log(alphaNum);
          if (alphaNum > HIGH_POINT) {
            return String.fromCharCode(alphaNum - TOTAL_LETTER);
          } else if (alphaNum < LOW_POINT) {
            return String.fromCharCode(alphaNum + TOTAL_LETTER);
          } else {
            return String.fromCharCode(alphaNum);
          }
        };
        return alphaValConv(letter);
      } else {
        //passthrough
        return letter;
      }
    });
    return cyphered.join("");
  }
}
console.log(cypher("you wanna play lets PLAY! 12 times ok?", 1));
export { cypher };
