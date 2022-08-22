import { reverseString } from "./reverseString"

test('check empty input/whitespace', ()=>{
    expect(reverseString()).toBe('Error: Input Empty');
    expect(reverseString('')).toBe('Error: Input Empty');
    expect(reverseString('     ')).toBe('Error: Input Empty');
});

test('check if input is number', ()=>{
    expect(reverseString(123)).toBe('Error: Input is a Number');
    expect(reverseString('123')).toBe('Error: Input is a Number');
})

test('check if the word is reversed', ()=>{
    expect(reverseString('looping')).toBe('gnipool');
    expect(reverseString('hell')).toBe('lleh');
})