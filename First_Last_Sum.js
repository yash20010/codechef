// If Give an integer N . Write a program to obtain the sum of the first and last digits of this number.

// Input
// The first line contains an integer T, the total number of test cases. Then follow T lines, each line contains an integer N.

// Output
// For each test case, display the sum of first and last digits of N in a new line.

// Constraints
// 1 ≤ T ≤ 1000
// 1 ≤ N ≤ 1000000
// Example
// Input
// 3
// 1234
// 124894
// 242323

// Output
// 5
// 5
// 5

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin
})

process.stdin.on('end', (_) => {
  let inputArr = inputString.split('\n')
  let t = parseInt(inputArr[0])
  let outputString = inputArr
    .slice(1, t + 1)
    .map((str) => {
      let cleanStr = str.trim()
      return +cleanStr[0] + +cleanStr[cleanStr.length - 1]
    })
    .join('\n')
  console.log(outputString)
})
