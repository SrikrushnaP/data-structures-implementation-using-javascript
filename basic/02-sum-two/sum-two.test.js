const sumTwoNum = require('./sum-two');

test("Returning sum of two number", () => {
  const result = sumTwoNum(2,3);
  expect(result).toBe(5);
});
