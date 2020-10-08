const isPrime = (n) => {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrime = (num) => {
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

export function tableHeaderAndContent(value) {
  const result = generatePrime(value);
  let newArr = [];
  result.forEach((el) => {
    const res = result.map((num) => num * el);
    newArr.push(res);
  });

  return { result, newArr };
}
