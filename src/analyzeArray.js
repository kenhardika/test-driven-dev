// function that takes an array of numbers and returns an object with the following 
// properties: average, min, max, and length

function analyzeArray(array){
    //guard clauses
    if(!array){
        return
    }
    if(typeof array !== 'object'){
        return 'Error'
    }
    else{
        return {
            average:()=>{
                let val= 0;
                for (let i=0; i<array.length; i++){
                   val += array[i];
                }
                let avg = (val/array.length)
                return parseFloat(avg.toFixed(2));
            },
            min: ()=>{
                return Math.min.apply(null, array);
            },
            max: ()=>{
                return Math.max.apply(null, array); 
            },
            length: ()=>{
                return array.length
            }
        }
    }
}

console.log( "Average: " + analyzeArray([1,8,3,4,2,6]).average());
console.log("Min: " + analyzeArray([1,8,3,4,2,6]).min());
console.log("Max: " + analyzeArray([1,8,3,4,2,6]).max());
console.log("Lengeth: " + analyzeArray([1,8,3,4,2,6]).length());


export {analyzeArray}