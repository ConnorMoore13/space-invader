Making a times table. Look at A20 for reference.

Criteria
You must use loops! Please don't hard code 100+ lines of code. The whole program should be less than 10 lines.

Problem
Create a times table going from 0 to 10. Your output must look EXACTLY like mine below.

Example output:  

0 TIMES TABLE 

0 x 0 = 0

0 x 1 = 0

0 x 2 = 0

0 x 3 = 0

0 x 4 = 0

0 x 5 = 0

0 x 6 = 0

0 x 7 = 0

0 x 8 = 0

0 x 9 = 0

0 x 10 = 0


1 TIMES TABLE

1 x 1 = 1

1 x 2 = 2




for (z = 0; z <= 10; z++){
  console.log(z, "Times Table");
  for (y = 0; y <= 10; y++){
    console.log(z, 'x', y, " = ", (z * y));
  }}
