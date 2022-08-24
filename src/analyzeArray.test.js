//test analyze array

import { analyzeArray } from "./analyzeArray";

test('Test Empty',()=>{
    expect(analyzeArray()).toBe();
});

test('Test Type of Array or Not', ()=>{
    expect(analyzeArray('string')).toBe('Error');
});

test('Test Average Array', ()=>{
    expect(analyzeArray([1,3,5,7,9]).average()).toBe(5);
    expect(analyzeArray([11,23,35,47,30]).average()).toBe(29.2); // only use toContain if the returning function is array/obj
});

test('Test Minimum Value Array', ()=> {
    expect(analyzeArray([11,23,35,47,30]).min()).toBe(11);
    expect(analyzeArray([3,1,17,320]).min()).toBe(1);
})

test('Test Maximum Value Array', ()=> {
    expect(analyzeArray([11,23,35,47,30]).max()).toBe(47);
    expect(analyzeArray([3,1,17,320]).max()).toBe(320);
})

test('Test Array Length', ()=> {
    expect(analyzeArray([1,2,3,1,12,3,1]).length()).toBe(7);
})