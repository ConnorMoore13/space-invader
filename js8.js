/*
Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.


Copy and paste this outside the function to test it.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3


Use a for loop to scan through the string and compare the characters. 

*/

function countCharacter(str, char) {
  
  var count = 0;
  
  for (var x in str){
    
    if (str[x] == char){
      
      count += 1;
      
    }}
    
  return count;
  
    
  }

countCharacter('I am a hacker', 'a');
