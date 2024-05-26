describe("About Numbers (about_numbers.js)", function() {
  it("types", function() {
    let typeOfIntegers = typeof(6);
    let typeOfFloats = typeof(3.14159);
    // are ints and floats the same type?
    expect(FILL_ME_IN).toBe(typeOfIntegers === typeOfFloats);
    // what is the javascript numeric type?
    expect(FILL_ME_IN).toBe(typeOfIntegers);
    // what is a integer number equivalent to 1.0?
    expect(FILL_ME_IN).toBe(1.0);
  });

  it("NaN", function() {
    let resultOfFailedOperations = 7/'apple';
    // what will satisfy the equals assertion?
    expect(trFILL_ME_INue).toBe(isNaN(resultOfFailedOperations));
    // is NaN == NaN?
    expect(FILL_ME_IN).toBe(resultOfFailedOperations == NaN);
  });
});