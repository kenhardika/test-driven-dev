// A capitalize function that takes a string and 
// returns it with the first character capitalized.

function capitalizeIt(word){
    if(!word){
        return 'Error: no input'
    }
    if(/\S/.test(word) === false){
        return 'Error: no input'
    }
    if(isNaN(word)=== false){
        return 'Error: input are number'
    }
    else{
        //
        //let firstLetter = word.slice(0,1);
        let upperCaseLetter = word.slice(0,1).toUpperCase();
        let sliceWord = word.substr(1);
        let capitalWord =upperCaseLetter.concat(sliceWord);
        //console.log('capitalising ' + word);
        return capitalWord
    }
}

function capitalize(word){    
    return capitalizeIt(word);
}

// function reverseString(word){
//     if(!word){
//         return 'Error: no input'
//     }
//     if(/\S/.test(word) === false){
//         return 'Error: no input'
//     }
//     if(isNaN(word)=== false){
//         return 'Error: input are number'
//     }
//     else{
//         return word
// }
// }

// capitalize('tesying');

export {capitalize}