// test the caesarCypher

import { cypher } from "./caesarCypher"

test('Test Empty', ()=>{
    expect(cypher()).toBe();
});
test('Test Remove symbol', ()=>{
     expect(cypher("!")).toBe(``);
     expect(cypher("?")).toBe(``);
     expect(cypher("what about this!???")).toBe('what about this');
     expect(cypher("??>")).toBe(``);

})
// !/^[a-zA-Z0-9]+$/
