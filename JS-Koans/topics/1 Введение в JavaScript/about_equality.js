
describe("About Equality (about_equality.js)", function(){
  it("numeric equality", function() {
    expect(3 + FILL_ME_IN).toBe(7);
  });

  it("string equality", function() {
    // concatenate the strings
    expect("3" + FILL_ME_IN).toBe("37");
  });

  it("equality without type coercion", function() {
    // what is exactly equal to 3?
    expect(3 === FILL_ME_IN).toBeTruthy();
  });

  it("equality with type coercion", function() {
    // what string is equal to 3, with type coercion?
    expect(3 == FILL_ME_IN).toBeTruthy();
  });

  it("string literals", function() {
    // quote types are interchangable, but must match.
    expect(FILL_ME_IN === "frankenstein").toBeTruthy();
    // quote types can use both single and double quotes.
    expect(FILL_ME_IN === 'frankenstein').toBeTruthy();
  });
});