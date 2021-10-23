// Pooja would like to withdraw X $US from an ATM. The cash machine will only accept the transaction if X is a multiple of 5, and Pooja's account balance has enough cash to perform the withdrawal transaction (including bank charges). For each successful withdrawal the bank charges 0.50 $US. Calculate Pooja's account balance after an attempted transaction.

// Input
// Positive integer 0 < X <= 2000 - the amount of cash which Pooja wishes to withdraw.

// Nonnegative number 0<= Y <= 2000 with two digits of precision - Pooja's initial account balance.

// Output
// Output the account balance after the attempted transaction, given as a number with two digits of precision. If there is not enough money in the account to complete the transaction, output the current bank balance.

// Example - Successful Transaction
// Input:
// 30 120.00
// Output:
// 89.50

// Example - Incorrect Withdrawal Amount (not multiple of 5)
// Input:
// 42 120.00
// Output:
// 120.00

// Example - Insufficient Funds
// Input:
// 300 120.00
// Output:
// 120.00

function ATM(withdrawal, balance) {
    if (withdrawal % 5 !== 0) {
        return balance;
    } else if (balance < withdrawal + 0.5) {
        return balance;
    } else {
        return balance - (withdrawal + 0.5);
    }
}

console.log(ATM(30, 120));
// 89.5
console.log(ATM(42, 120));
// 120
console.log(ATM(300, 120));
// 120