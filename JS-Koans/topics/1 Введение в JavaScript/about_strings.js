
describe("About Strings (about_strings.js)", function() {
  it("delimiters", function() {
    let singleQuotedString = 'apple';
    let doubleQuotedString = "apple";
    // are the two strings equal?
    expect(FILL_ME_IN).toBe(singleQuotedString === doubleQuotedString);
  });

  it("concatenation", function() {
    let fruit = "apple";
    let dish = "pie";
    // are the two strings equal?
    expect(FILL_ME_IN).toBe(fruit + " " + dish);
  });

  it("character Type", function() {
    let characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    // Javascript has no character type
    expect(FILL_ME_IN).toBe(characterType);
  });

  it("escape character", function() {
    let stringWithAnEscapedCharacter  = "\u0041pple";
    // what  is the value of stringWithAnEscapedCharacter?
    expect(FILL_ME_IN).toBe(stringWithAnEscapedCharacter);
  });

  it("string.length", function() {
    let fruit = "apple";
    // what is the value of fruit.length?
    expect(FILL_ME_IN).toBe(fruit.length);
  });

  it("slice", function() {
    let fruit = "apple pie";
    // what is the value of fruit.slice(0,5)?
    expect(FILL_ME_IN).toBe(fruit.slice(0,5));
  }); 
});
