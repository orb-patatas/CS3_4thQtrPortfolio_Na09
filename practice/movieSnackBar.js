/*  You are working inside a Moviehouse Snack Bar and you need to check from time to time 
if the sales already reached your daily 1000 pesos quota.  


The input is a stringified JSON object containing the test cases with corresponding snack prices.
Output: Need nnn.nn to reach the 1000 pesos quota for the day || Quota reached already!

Constraints: 1 ≤ test_cases ≤ 100   ||  1 ≤ price ≤ 1000
{
  "transactions": 
  [
    {
      "transaction_id": "001",
      "items": 
      [
        { "snack": "Popcorn", "size": "Large","price": 5.99 },
        { "snack": "Soda", "size": "Medium", "price": 3.49 }
      ]
    },
    
    {
      "transaction_id": "002",
       "items": 
      [
        { "snack": "Nachos", "size": "Regular","price": 4.99 },
        { "snack": "Candy", "type": "Chocolate","price": 2.99}
      ]
     },
     
     {
      "transaction_id": "003",
       "items": 
      [
        {"snack": "Cheese Popcorn", "size": "Regular","price": 5.99},
        {"snack": "Coffee", "size": "Tall","price": 140.00}
      ]
     }
  ]

Output
Need 836.55 to reach the 1000 pesos quota for the day

Explanation:
 Since the total of all sales is just 163.45, hence the difference from 1000 is displayed, how much more is needed to reach the 1000-peso daily quota.
  
Template:

function ans(input){
    obj = JSON.parse(input) // JSON.parse converts text input into object data type. DO NOT REMOVE THIS PART
   // type your answer inside this function.  Use obj variable containing the input in object data type.
 
 
} 
// DO NOT REMOVE CODE FROM THIS POINT ON
    input =""
    process.stdin.on("data", d => input += d ).on('end', () => ans(input))  // to read input test cases

*/

function ans(input){
    obj = JSON.parse(input) // JSON.parse converts text input into object data type. DO NOT REMOVE THIS PART
   // type your answer inside this function.  Use obj variable containing the input in object data type.

    let total = 0;

    for (let transaction of obj.transactions) {
        for (let item of transaction.items) {
            total += item.price;
        }
    }
    
    if (total >= 1000) 
        console.log("Quota reached already!"); 
    else {
        let needed = 1000 - total;
        console.log(`Need ${needed.toFixed(2)} to reach the 1000 pesos quota for the day`);
    }
}
// DO NOT REMOVE CODE FROM THIS POINT ON
    input =""
    process.stdin.on("data", d => input += d ).on('end', () => ans(input))  // to read input test cases