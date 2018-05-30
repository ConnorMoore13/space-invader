Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

Notes:
* If the array is empty, it should return an empty string ("").
* If the array contains no strings; it should return an empty string.

Copy and paste this outside the function to test it.

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'



function getLongestWordOfMixedElements(arr) {
  
  var max = 0;
  
  var word = "";
  
  for (var i in arr){
    
    if (arr[i].length > max){
      
      max = arr[i].length;
      
      word = arr[i];
      
    }} return word;
}
getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
