
Convert a phrase to its acronym.

Techies love their TLA (Three Letter Acronyms)!

Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).


Copy and paste this outside the function to test your program:

output = acronymMaker("Portable Network Graphics");

console.log(output);






function acronymMaker (str) {
  
  bigrick = '';
  
  for (x = 0;x < str.length; x++){
    
    if (str[x] == str[x].toUpperCase()){
      
      bigrick = bigrick + str[x];
    }}
    
bigrick = bigrick.replace(' ', '');

bigrick = bigrick.replace(' ', '');

return bigrick;

}

output = acronymMaker("Portable Network Graphics");
console.log(output);
