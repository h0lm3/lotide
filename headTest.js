const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

// Test code

it("returns '5' for ['5']", () => {
  // Revert back to the correct expected value
  assert.strictEqual(head(['5']), '5');
});
