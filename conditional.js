/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

var burgerPrice = 70;
var cokePrice = 50;

if (burgerPrice > 500) {
  cokePrice = 0;
} else {
  cokePrice = 30;
}
console.log("coke price:", cokePrice, "tk");


