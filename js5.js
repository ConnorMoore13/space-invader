/*Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
*/



function findMinLengthOfThreeWords(word1, word2, word3) {
  if (word1.length < word2.length) {
   if (word1.length < word3.length) {
      return word1.length;
   }}
  else {
      return word2.length;
  
  
}}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);


  
  
