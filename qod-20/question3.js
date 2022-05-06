const wealth = [
  [1, 4, 7, 8],
  [2, 5, 6, 9],
  [10, 9, 2, 2],
];

// result = 23

let wealthsOfEachPerson = [];

for (let i = 0; i < wealth.length; i++) {
  let sum = 0;
  for (let j = 0; j < wealth[i].length; j++) {
    sum += wealth[i][j];
  }
  wealthsOfEachPerson.push(sum);
  sum = 0;
}

let maxWealth = wealthsOfEachPerson[0];

for (let i = 0; i < wealthsOfEachPerson.length; i++) {
  const currWealth = wealthsOfEachPerson[i];
  if (currWealth > maxWealth) maxWealth = currWealth;
}

console.log(maxWealth);
