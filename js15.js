Welcome back from Spring Break 3.0

Please read the instructions carefully...  I'm sure you all of been diligently programming on your own the past couple weeks, but if not, here's a nice review problem from our Python days.

We are going to re-create our coin flip program now.  We should know how to code all of the logic already, but we haven't gone over inputs or random numbers.

INPUTS
For an input, we are going to create a "prompt". This is a dialogue box that will pop up on our screen to prompt the user for input. We can then store this prompt into a variable.

Copy and paste this program for the prompt to see how it works. Delete this when you're done.

Test Example 1

var person = prompt("Please enter your name", "Text goes here");

if (person != null) {
    console.log("Hello " + person + "! How are you today?");
}


RANDOM NUMBERS
Now for generating random numbers. This involves 2 functions in python. It looks more complicated than it is.

    Use Math.random() to generate a random decimal.
    Multiply that random decimal by 20.
    Use another function, Math.floor() to round the number down to its nearest whole number.



Copy and paste this program for the prompt to see how it works. Delete this when you're done.

Test Example 2

for (i = 0; i < 10; i++) {

   var num = Math.floor(Math.random() * 100)

   console.log(num);

}

This generates a random number from 1 to 100, ten times.

If you wanted to generate a random number from 1 to 20, you would make your statement look like this:

var num = Math.floor(Math.random() * 20)



Assignment
Re-create the Coin Flip program from A33.

Your output should look like this:



Good luck! Make sure to finish your other assignments when you're done.












var flips = prompt("How many flips would you like?", "");

heads = 0;
tails = 0;

for (x = 0; x < 10; x++){
  
  var num = Math.floor(Math.random() * 100);
  
  if (num >= 50){
    
    heads += 1;
    
  } else if (num < 50){
    
    tails += 1;
    
  }}
  
console.log('Total coin flips: ', flips);

console.log('=====================================================');

console.log('Heads:', heads);

console.log('Tails', tails);
