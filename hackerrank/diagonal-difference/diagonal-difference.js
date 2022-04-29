// Diagonal Difference - Easy
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
  // Write your code here
  let rows = arr.length;
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;
  
  for(let i = 0; i < rows; i++) {
      leftDiagonalSum += arr[i][i];
      rightDiagonalSum += arr[i][rows - i - 1];
  }
  
  return Math.abs(leftDiagonalSum - rightDiagonalSum);
}