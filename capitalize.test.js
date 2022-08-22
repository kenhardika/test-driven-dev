// test('two plus two is four', () => {
//     expect(2 + 2).toBe(4);
//   });

import capitalize from "./capitalize"

test('Check empty input', ()=>{
    expect(capitalize()).toBe('Error: no input')
});
test('Check empty input string', ()=>{
    expect(capitalize('        ')).toBe('Error: no input')
});

test('Check number input', ()=>{
    expect(capitalize(123)).toBe('Error: input are number')
});

test('Check number inside of string', ()=>{
    expect(capitalize('15')).toBe('Error: input are number')
});

test('Check String Capitalize', ()=>{
    expect(capitalize('test')).toBe('Test')
});