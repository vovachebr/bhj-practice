// https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain
describe("About Prototype Chain (about_prototype_chain.js)", function() {
  let father = {
    b: 3,
    c: 4
  };
  
  let child = Object.create(father);
  child.a = 1;
  child.b = 2;
  
  /*
   * ---------------------- ---- ---- ----
   *                      [a]  [b]  [c]
   * ---------------------- ---- ---- ----
   * [child]               1    2
   * ---------------------- ---- ---- ----
   * [father]                   3    4
   * ---------------------- ---- ---- ----
   * [Object.prototype]
   * ---------------------- ---- ---- ----
   * [null]
   * ---------------------- ---- ---- ----
   * */
  
  it("Is there an 'a' and 'b' own property on child?", function () {
    // child.hasOwnProperty(\'a\')?
    expect(FILL_ME_IN).toBe(child.hasOwnProperty('a'));
    // child.hasOwnProperty(\'b\')?
    expect(FILL_ME_IN).toBe(child.hasOwnProperty('b'));
  });
  
  it("Is there an 'a' and 'b' property on child?", function () {
    // what is \'a\' value?
    expect(FILL_ME_IN).toBe(child.a);
    // what is \'b\' value?
    expect(FILL_ME_IN).toBe(child.b);
  });
  
  it("If 'b' was removed, whats b value?", function () {
    delete child.b;
    // what is \'b\' value now?
    expect(FILL_ME_IN).toBe(child.b);
  });
  
  
  it("Is there a 'c' own property on child?", function () {
    // child.hasOwnProperty(\'c\')?
    expect(FILL_ME_IN).toBe(child.hasOwnProperty('c'));
  });
  
  // Is there a 'c' own property on child? No, check its prototype
  // Is there a 'c' own property on child.[[Prototype]]? Yes, its value is...
  it("Is there a 'c' property on child?", function () {
    // what is the value of child.c?
    expect(FILL_ME_IN).toBe(child.c);
  });
  
  
  // Is there a 'd' own property on child? No, check its prototype
  // Is there a 'd' own property on child.[[Prototype]]? No, check it prototype
  // child.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
  it("Is there an 'd' property on child?", function () {
    // what is the value of child.d?
    expect(FILL_ME_IN).toBe(child.d);
  });
});
