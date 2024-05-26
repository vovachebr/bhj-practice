describe("About Scope (about_scope.js)", function() {
  thisIsAGlobalVariable = 77;

  it("global variables", function() {
    // is thisIsAGlobalVariable defined in this scope?
    expect(FILL_ME_IN).toBe(thisIsAGlobalVariable);
  });

  it("variables declared inside of a function", function() {
    let outerVariable = "outer";

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function() {
      let innerVariable = "inner";
      // is outerVariable defined in this scope?
      expect(FILL_ME_IN).toBe(outerVariable);
      // is innerVariable defined in this scope?
      expect(FILL_ME_IN).toBe(innerVariable);
    })();

    // is outerVariable defined in this scope?
    expect(FILL_ME_IN).toBe(outerVariable);
    // is innerVariable defined in this scope?
    expect(FILL_ME_IN).toBe(typeof(innerVariable));
  });
});
