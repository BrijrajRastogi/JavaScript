//Arithmetic Operators in JavaScript
let a = 10;
let b = 5;

console.log("a =",a , "& b =",b);

console.log("a + b =", a + b);//Addition operator: it adds the two operands
console.log("a - b =", a - b);//Subtraction operator: it subtracts the two operands
console.log("a * b =", a * b);//Multiplication operator: it multiplies the two operands
console.log("a / b =", a / b);//Division operator: it divides te first operand with the second operand
console.log("a ** b =", a ** b);//Exponential operator: it raises the value of second operand to the first operand
console.log("a % b =", a % b);//Modulus operator: it gives the remainder after dividing the first operand with the second operand



//Unary Operators in JavaScript
//unary operators perform arithmatic operations on single operands 

//Increment operator(++)
let c = 2;
console.log("c =",c);
c++; //increments the value by 1
console.log("c =",c);

//pre-increment operator
let d = 5;
console.log("++d =", ++d); //it firstly increments the value by 1 and then prints it

//post-increment operator
let e = 5;
console.log("e++ =", e++); //it firstly prints the value and then increments the value by 1 on the next line
console.log(e); //prints the updated value


//Decrement operator(--)
let f = 20;
console.log("f =", f);
f--; //decrements the value by 1
console.log("f =", f);

//pre-decrement operator
let g = 15;
console.log("--g =", --g); //it firstly decrements the value by 1 and then prints it

//post decrement operator
let h = 25;
console.log("h-- =", h--); //it firstly prints the value and then decrements the value by 1 on the next line
console.log(h); //prints the updated value