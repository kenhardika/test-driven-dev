// test the caesarCypher

import { cypher } from "./caesarCypher"

test('Test Empty', ()=>{
    expect(cypher()).toBe();
});
test('Test Symbol Passthrough ', ()=>{
     expect(cypher("!")).toBe("!");
     expect(cypher("?")).toBe(`?`);
     expect(cypher("!?")).toBe('!?');
     expect(cypher("??>")).toBe(`??>`);
     expect(cypher(' ')).toBe(' ');
});
// !/^[a-zA-Z0-9]+$/
