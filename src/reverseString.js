function reverseString(word){
    if(!word || /\S/.test(word) === false){
        return 'Error: Input Empty'
    }
    if(isNaN(word)=== false){
        return 'Error: Input is a Number'
    }
    else{
        return word.split('').reverse().join('')
    }
}
export {reverseString}