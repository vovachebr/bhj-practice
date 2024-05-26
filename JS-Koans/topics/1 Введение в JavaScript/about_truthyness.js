
describe("About Truthyness (about_truthyness.js)", function() {
  it("truthyness of positive numbers", function() {
    let oneIsTruthy = 1 ? true : false;
    // is one truthy?
    expect(FILL_ME_IN).toBe(oneIsTruthy);
  });

  it("truthyness of negative numbers", function() {
    let negativeOneIsTruthy = -1 ? true : false;
    // is -1 truthy?
    expect(FILL_ME_IN).toBe(negativeOneIsTruthy);
  });

  it("truthyness of zero", function() {
    let zeroIsTruthy = 0 ? true : false;
    // is 0 truthy?
    expect(FILL_ME_IN).toBe(zeroIsTruthy);
  });

  it("truthyness of null", function() {
    let nullIsTruthy = null ? true : false;
    // is null truthy?
    expect(FILL_ME_IN).toBe(nullIsTruthy);
  });
});
