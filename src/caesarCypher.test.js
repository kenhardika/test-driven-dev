// test the caesarCypher

import { cypher } from "./caesarCypher"

test('Test Empty', ()=>{
    expect(cypher()).toBe();
});
test('Test Symbol Passthrough ', ()=>{
     expect(cypher("!", 0)).toBe("!");
     expect(cypher("?", 0)).toBe(`?`);
     expect(cypher("!?", 0)).toBe('!?');
     expect(cypher("??>", 0)).toBe(`??>`);
     expect(cypher(' ', 0)).toBe(' ');
});

test('Test Convert with shift 1', ()=>{
    expect(cypher('a', 1)).toBe('b');
    expect(cypher('abba', 1)).toBe('bccb');
    expect(cypher('zccy', 1)).toBe('addz');
})

test('Test Convert with shift -1', ()=>{
    expect(cypher('a', -1)).toBe('z');
    expect(cypher('abba', -1)).toBe('zaaz');
    expect(cypher('zccy', -1)).toBe('ybbx');
})
// !/^[a-zA-Z0-9]+$/
