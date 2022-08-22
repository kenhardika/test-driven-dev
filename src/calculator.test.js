import { calculator } from "./calculator"

test('Test Empty Input', ()=>{
    expect(calculator()).toBe('Error: Input Invalid');
    expect(calculator('','')).toBe('Error: Input Invalid');
    expect(calculator('  ','    ')).toBe('Error: Input Invalid');
})

test('Test Sum Number', ()=>{
    expect(calculator(2,3).addSum()).toBe(5);
    expect(calculator(-4,3).addSum()).toBe(-1);
    expect(calculator(0,2).addSum()).toBe(2);
    expect(calculator('12','1').addSum()).toBe(13);
})

test('Test Subtract Number', ()=>{
    expect(calculator(3,1).subtract()).toBe(2);
    expect(calculator(-12, '-3').subtract()).toBe(-9);
    expect(calculator(0,5).subtract()).toBe(-5);
})

test('Test Multiply', ()=>{
    expect(calculator(2,3).multiply()).toBe(6.00);
    expect(calculator(2.2,3).multiply()).toBe(6.60);
    expect(calculator(1.25,3).multiply()).toBe(3.75);
    expect(calculator(2, 3.557).multiply()).toBe(7.11);
})