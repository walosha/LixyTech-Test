/**
 * @description Returns Boolean if number is priime number
 *
 * @param {number} Number to check if it's boolean
 *
 * @returns {Boolean} returns true if it is a prime or false
 */
export const isPrime = (n) => {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * @description Returns generate an array of prime number
 *
 * @param {number} Number the length of array
 *
 * @returns {Array} returns an array of prime number
 */

export const generatePrime = (num) => {
  const arr = [];
  let i = 2;
  while (arr.length < num) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i = i === 2 ? i + 1 : i + 2;
  }
  return arr;
};

/**
 * @description Returns table row and column headers
 *
 * @param {number} Number the length of array
 *
 * @returns {Object} returns an array of prime number
 */

export function tableHeaderAndContent(value) {
  const rowAndColumnheader = generatePrime(value);
  let tableContent = [];
  rowAndColumnheader.forEach((el) => {
    const res = rowAndColumnheader.map((num) => num * el);
    tableContent.push(res);
  });

  return { rowAndColumnheader, tableContent };
}
