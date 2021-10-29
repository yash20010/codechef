// You are asked to calculate factorials of some small positive integers.

// Input
// An integer t, 1<=t<=100, denoting the number of testcases, followed by t lines, each containing a single integer n, 1<=n<=100.

// Output
// For each integer n given at input, display a line with the value of n!

// Example
// Sample input:
// 4
// 1
// 2
// 5
// 3
// Sample output:

// 1
// 2
// 120
// 6

process.stdin.resume()
process.stdin.setEncoding('utf-8')
let factorialArr = [1]
function factorial(n) {
  if (factorialArr[n]) {
    return factorialArr[n]
  } else {
    factorialArr[n] = factorial(n - 1) * n
    return factorialArr[n]
  }
}
let input = ''
process.stdin.on('data', function (chunk) {
  input = input + chunk
})

process.stdin.on('end', function () {
  let array = input.trim().split('\n')
  let t = Number(array[0])
  let sum = array
    .slice(1, t + 1)
    .map((n) => factorial(Number(n)))
    .join('/n')
  console.log(sum)
})
