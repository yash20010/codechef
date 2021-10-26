// The purpose of this problem is to verify whether the method you are using to read input data is sufficiently fast to handle problems branded with the enormous Input/Output warning. You are expected to be able to process at least 2.5MB of input data per second at runtime.

// Input
// The input begins with two positive integers n k (n, k<=107). The next n lines of input contain one positive integer ti, not greater than 109, each.

// Output
// Write a single integer to output, denoting how many integers ti are divisible by k.

// Example
// Input:
// 7 3
// 1
// 51
// 966369
// 7
// 9
// 999996
// 11

// Output:
// 4

const fs = require('fs')
let count = 0
fs.readFile(0, 'utf8', (error, data) => {
  let myData = data.trim().split('\n')
  let [n, k] = myData[0].split(' ').map(Number)
  if (k > 10000000 && k <= 0 && n <= 0 && myData.length - 1 !== n) {
    return
  }

  for (let index = 1; index < myData.length; index++) {
    let numberTest = Number(myData[index])
    if (numberTest <= 1000000000 && numberTest > 0 && numberTest % k === 0) {
      ++count
    }
  }
  return console.log(count)
})
