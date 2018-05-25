/*

Fahrenheit and centigrade are two temperature scales in use today.  The Fahrenheit scale was developed by the German physicist Daniel  Gabriel Fahrenheit . In the Fahrenheit scale, water freezes at 32  degrees and boils at 212 degrees. 

The centigrade scale, which is also called the Celsius scale, was  developed by Swedish astronomer Andres Celsius. In the centigrade scale,  water freezes at 0 degrees and boils at 100 degrees. 

 Centigrade and Fahrenheit conversion formulas:

C = (5/9) * (F - 32)

F = (C × 1.8) + 32  


Sample Output:

60°C is 140°F.
45°F is 7.222222222222222°C.


Note:
Instead of document.write(), use console.log() in repl.it


To print the degrees symbol, use '\xB0' 



*/


function cToF(celsius) {
  var cTemp = celsius;
  
  var cToFahr = cTemp * 9 / 5 + 32;
  
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
  
    console.log(message);
    
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  
  var fToCel = (fTemp - 32) * 5 / 9;
  
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
  
    console.log(message);
} 
cToF(60);
fToC(45);




