const reverseString = require('./reverse-string');

test("Returning the result of reverse string", () => {
  // const add = reverseString("hello");
  // expect(add).toBe("olleh");

  expect(reverseString("hello")).toBe("olleh");

  expect(reverseString("World")).toBe("dlroW");

  expect(reverseString("World123")).toBe("321dlroW");

  
});
