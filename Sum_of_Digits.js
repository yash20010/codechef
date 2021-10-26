// You're given an integer N. Write a program to calculate the sum of all the digits of N.

// Input
// The first line contains an integer T, the total number of testcases. Then follow T lines, each line contains an integer N.

// Output
// For each test case, calculate the sum of digits of N, and display it in a new line.

// Constraints
// 1 ≤ T ≤ 1000
// 1 ≤ N ≤ 1000000
// Example
// Input
// 3
// 12345
// 31203
// 2123
// Output
// 15
// 9
// 8

process.stdin.resume()
process.stdin.setEncoding('utf8')

let input = ''
process.stdin.on('data', function (chunk) {
  input = input + chunk
})
process.stdin.on('end', function () {
  input = input.split('\n')
  let t = Number(input[0])
  let sum = input
    .slice(1, t + 1)
    .map((str) => str.split('').reduce((a, c) => a + +c, 0))
    .join('\n')
  console.log(sum)
})
