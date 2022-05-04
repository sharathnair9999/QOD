const arr = [...Array(100)].map((_, id) => id + 1);

const ans = arr.reduce((acc, curr) => {
  if (curr % 3 == 0 && curr % 5 !== 0) {
    return [...acc, "Fizz"];
  } else if (curr % 3 !== 0 && curr % 5 === 0) {
    return [...acc, "Buzz"];
  } else if (curr % 3 === 0 && curr % 5 === 0) {
    return [...acc, "FizzBuzz"];
  } else {
    return [...acc, curr];
  }
}, []);

console.log(ans);
