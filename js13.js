
Write a function  using a for loop to increment '*' by 1:

Look at A8 for help

Copy and paste this outside the function to test your code.

printStars(4);



Your sample output.

*
**
***
****



function printStars(n) {
  var star = "*";
  for(i=0;i<n;i++){
    console.log(star)
    star += "*";
  }
  
}
printStars(4);
