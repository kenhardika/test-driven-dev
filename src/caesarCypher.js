// what is caesar ciper?
// its an old text based cyphering technique made by Julius Caesar himself.
// basically, you set the cypher 'shift' number then, that number will be shifting letter ex: A=0, B=1. C=2. Translate A with shift= 2. Amswer is A = C, 
// because cypherLetter = shiftNum + letterNum so 2+0 = 2, what got number 2? thats "C".
console.log('Caesar Cypher')

function cypher(word){
    if(/[^a-zA-Z0-9\s]+$/.test(word)){
        console.log(word.replace(/[^a-zA-Z0-9\s]/g,''));
        return word.replace(/[^a-zA-Z0-9\s]/g,'');
    }
    console.log(word);
    return word;
}

cypher('whe?!@&@)@_+');
cypher('wahaha');
export {cypher}