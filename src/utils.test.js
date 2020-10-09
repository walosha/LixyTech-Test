import { isPrime, generatePrime, tableHeaderAndContent } from "./utils";

it("Prime Number is working", () => {
  expect(isPrime(7)).toEqual(true);
  expect(isPrime(9)).toEqual(false);
});

it("Generate Prime Numbers is working", () => {
  expect(generatePrime(2)).toEqual([2, 3]);
  expect(generatePrime(5)).toEqual([2, 3, 5, 7, 11]);
});

it("Generate an arrays of table headers and content are working", () => {
  expect(tableHeaderAndContent(2)).toEqual({
    newArr: [
      [4, 6],
      [6, 9],
    ],
    result: [2, 3],
  });
});
