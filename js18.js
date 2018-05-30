Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

What is a factorial?

Examples:
1! = 1
2! = 1×2 = 2
3! = 1×2×3 = 6
4! = 1×2×3×4 = 24
5! = 1×2×3×4×5 = 120

Example Code: Copy and paste this below your function to test it.

var output = computeFactorialOfN(3);
console.log(output); // --> 6


var output = computeFactorialOfN(4);
console.log(output); // --> 24


function computeFactorialOfN(n) {
  var mult = 1;
  for (var i = 1; i <= n; i++) {
    mult *= i;
  }
  return mult;
}

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24
