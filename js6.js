/*Write a function called "computeSummationToN".

Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

Notes:
* If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.

Copy and paste this outside the function to test it.

var output = computeSummationToN(6);
console.log(output); // --> 21
*/

function computeSummationToN(n) {
  
var computedTotal = 0;

  for(var i = 1; i < n + 1; i++){
    
    computedTotal += i;}
    
  return computedTotal;}

computeSummationToN(6);

