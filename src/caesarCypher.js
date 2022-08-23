// what is caesar ciper?
// its an old text based cyphering technique made by Julius Caesar himself.
// basically, you set the cypher 'shift' number then, that number will be shifting letter ex: A=0, B=1. C=2. Translate A with shift= 2. Amswer is A = C,
// because cypherLetter = shiftNum + letterNum so 2+0 = 2, what got number 2? thats "C".
console.log("Caesar Cypher");

function cypher(word) {
  //guard clause
  if (!word) {
    return;
  }
  // slice the word into each letter then put into filter, its either cypher or passthrough
  else {
    const slicedWord = word.split("");
    // console.log(slicedWord);
    let cyphered = slicedWord.map((letter) => {
      if (/[a-zA-Z]/.test(letter)) {
        //change the letter to coded

        // console.log(letter);
        return letter.toUpperCase();
      } else {
        //passthrough
        // console.log(letter)
        return letter;
      }
    });
    // console.log(cyphered);
    return cyphered.join("");
  }
}
console.log(typeof cypher("!"));
console.log(cypher("azkan ! 12"));
export { cypher };
