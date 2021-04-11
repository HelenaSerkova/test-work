"use strict";

function zeros(n) {
  if (n < 0) {
    return -1;
  }
  else if (n == 0) {
    return 1;
  }
  var counter = 0;
  for (var i = 5; n/i >= 1; i *= 5)
    counter += Math.floor(n/i);
  return counter;
}
console.log(zeros(40));


// function factorial(num) {
//     if (num < 0) {
//       return -1;
//     }
//     else if (num == 0) {
//       return 1;
//     }
//     else {
//       return (num * factorial(num - 1));
//     }
// }

//
// Задание №3: написать запрос
// https://services.odata.org/V2/Northwind/Northwind.svc/Customers?$expand=Orders&$filter=City%20eq%20%27Berlin%27&$select=CustomerID,CompanyName,City,Orders/OrderID,Orders/OrderDate&$format=json




// const rx= new RegExp('abc');
