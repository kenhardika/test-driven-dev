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

    console.log('capitalising ' + word);
    return word
}

function capitalize(word){    
    return capitalizeIt(word);
}

export default capitalize;