describe("About Asserts (about_asserts.js)", function() {
  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', function() {
    // Your journey begins here: Replace the word false with true 
    expect(FILL_ME_IN).toBe(true);
  });

  // To understand reality, we must compare our expectations against reality.
  it('should expect equality', function() {
    let expectedValue = FILL_ME_IN;
    let actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it('should assert equality a better way', function() {
    let expectedValue = FILL_ME_IN;
    let actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', function() {
    let expectedValue = FILL_ME_IN;
    let actualValue = (1 + 1).toString();

  // toBe() will always use === to compare.
    expect(actualValue).toBe(expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
  it('should have filled in values', function() {
    expect(1 + 1).toEqual(FILL_ME_IN);
  });
});


