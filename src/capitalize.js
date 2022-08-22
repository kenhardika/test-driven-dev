// A capitalize function that takes a string and 
// returns it with the first character capitalized.

function capitalize(word){    
    if(!word || /\S/.test(word) === false){
        return 'Error: no input'
    }
    if(isNaN(word)=== false){
        return 'Error: input are number'
    }
    else{
        let upperCaseLetter = word.slice(0,1).toUpperCase();
        let sliceWord = word.substr(1);
        return upperCaseLetter.concat(sliceWord)
    }
}

export {capitalize}