// Task 1: Calculate the tip

let bill = 275;
let tip = (bill >= 50 && bill <=300) ? bill * 0.15 : bill * 0.20;

// Task 2: Output Details

console.log (`The bill was {200}, the tip was {30}, and the total value is {200 + 30}`);

// Task 3: Create a Function

function calculateTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

let testBill = 100;
let testTip = calculateTip(testBill);
console.log(`For a bill of {100}, the tip is {15}`);
