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

// Task 4: Utiize Arrays

let bills = [275, 40, 430];
let tips = bills.map(calculateTip);
let totals = bills.map((bill, index) => bill + tips[index]);
console.log(bills);
console.log(tips);
console.log(totals);

let bills2 = [125,555,44];
let tips2 = bills2.map(calculateTip);
let totals2 = bills2.map((bill, index) => bill + tips2[index]);
console.log(bills2);
console.log(tips2);
console.log(totals2);
