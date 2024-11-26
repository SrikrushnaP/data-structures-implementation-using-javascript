const calculator = require('./calculator');

test("Returning the result of two number based on operator", () => {
  const add = calculator(10,5,'+');
  expect(add).toBe(15);

  const sub = calculator(10,5, '-');
  expect(sub).toBe(5);

  const mul = calculator(10,5, '*');
  expect(mul).toBe(50);

  const div = calculator(10,5, '/');
  expect(div).toBe(2);
});
