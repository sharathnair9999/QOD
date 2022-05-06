// transpose of a matrix

let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
  [3, 4, 5, 6],
];

for (let i = 0; i < mat.length; i++) {
  for (let j = i; j < mat.length; j++) {
    [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
  }
}

console.log(mat);
