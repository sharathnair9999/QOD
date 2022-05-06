// given a matrix
// const mat =
// [
//    [1,2,3] ,
//    [4,5,6],
//    [7,8,9]
// ]
// ans = [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// clockwise

for (let i = 0; i < mat.length; i++) {
  for (let j = i; j < mat[0].length; j++) {
    [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
  }
}

for (let i = 0; i < mat.length; i++) {
  for (let j = 0; j < mat.length / 2; j++) {
    [mat[i][j], mat[i][mat.length - j - 1]] = [
      mat[i][mat.length - j - 1],
      mat[i][j],
    ];
  }
}

console.log(mat);

// anti-clockwise

let mat2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// output :
// [
//   [ 3, 6, 9 ],
//   [ 2, 5, 8 ],
//   [ 1, 4, 7 ]
//  ]

for (let i = 0; i < mat2.length; i++) {
  for (let j = i; j < mat2[0].length; j++) {
    [mat2[i][j], mat2[j][i]] = [mat2[j][i], mat2[i][j]];
  }
}

[mat2[0], mat2[mat2.length - 1]] = [mat2[mat2.length - 1], mat2[0]];

console.log(mat2);
