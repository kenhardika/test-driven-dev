function calculator(A,B){
    let numA = parseFloat(A);
    let numB = parseFloat(B);

    if(!A && A != 0 || !B && B != 0 ){
        console.log('Error: input invalid')
        return 'Error: Input Invalid'
    }
    if(/\S/.test(A) === false || /\S/.test(B) === false ){
        console.log('Error: Whitespace');
        return 'Error: Input Invalid'
    }   
    if(isNaN(A) === true || isNaN(B) === true){
        return 'Error: Input Is Not a Number'
    }

    
    return{
        addSum: ()=>{
            return numA + numB;
        },
        subtract: ()=>{
            return numA - numB;
        },
        multiply: ()=>{

            let result = (numA * numB).toFixed(2);
            return parseFloat(result);
        }
    }    
}

console.log(calculator(2,2.1).multiply());

export {calculator}