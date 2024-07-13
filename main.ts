import chalk from "chalk"

// TypeScript operators are symbols or keywords that perform operations on one or more operands.

// 1 AIRTHMETIC OPERATORS [ +, _ , * , / , % , ** ]
let a=10;
let b=5;
let c=(a+b);

console.log(a+b); // Addition =15
console.log(a-b); // Subtraction =5
console.log(a*b); // Multiplication = 50
console.log(a/b); // Division // 2

// Modulus
let d=7;
let e=3;
console.log(d % e ) // 7/3 = 1
// EXPONENTIATION
let f=5;
let g=2;
console.log(f ** g); // 5*5 =25
console.log(g ** f); // 2*2*2*2*2= 32

// 2- ASSIGNMENT OPERATORS [ = , += , -= , *= , /= , % = ,]
a +=5;
console.log(a) // 10 + 5 = 15
a -=3;
console.log(a); // now a=15 so 15-3=12
a /=2;
console.log(a) //now a = 12, so 12/2=6
a *=2;
console.log(a); // a=6 so 2*6=12
a %=5;
console.log(a); // a=12 so 5 % 12 = 2

// 3- COMPARISON OPERATORS
// 1 ==(equal to)
let result = 5==5;
console.log(result); // True
// !=( Not equal to)
// Make sure both are numbers
let num1: number = 5;
let num2: number = 3;

// Compare the numbers
let result1: boolean = num1 != num2; // This should be true
console.log(result1); // True

// strict Equal ===
let result2= 5===5;
console.log(result2); // True

// Greater Than >
let result3 = 5 > 3;
console.log(result3);// True

// Less Than <
let result4 = 3 < 5;
console.log(result4); // True

// Greatger Than or Equal >=
let result5 = 5 >= 5;
console.log(result5); // True

// Less Than or Equal
let result6 = 3 <= 5;
console.log(result6); // True

// 4- LOGICAL OPERATORS { && (AND) || (OR) }
let result7 = true && true;
console.log(result7); //true
let result8 = true || false;
console.log(result8); // True
let result9 = ! true;
console.log(result9); // False

/* 5- BITWISE OPERATOR
 & (and)
Convert Numbers to Binary:

First, we need to convert the decimal numbers to their binary equivalents.
Decimal 5 in binary is 101.
Decimal 3 in binary is 011.*/
let num = 5 & 3;
console.log(num); // The binary result is 001 which is = 1

// & and 
let x;
x = 5 & 1;
console.log(x); // Ans = 1

// | OR
let m;
m = 5 | 1;
console.log(m); // Ans = 5

// ^ XOR
let y;
y = 5 ^ 1
console.log(y); // Ans 4

/* TypeScript String Operators
In TypeScript, string operators and features are used for 
manipulating and working with string values.*/

// 1- String Concatenation (+)	{String Concatenation (+)}


let firstName="Muhammad";
let middleName="Tariq";
let lastName="Mahboob";
let fullName=firstName + " "+ middleName + " " + lastName;
console.log(chalk.greenBright.bold(fullName));

// 2- TEMPLATE LITERLS
let age=50;
let message=`I am ${age} years old`
console.log(chalk.magentaBright.italic(message));

// 3- STRING INTERPOLATION (It is same as Template Literals)

let city="Karachi";
let district="East";
let descripition=`I live in ${city} ${district}`;
console.log(chalk.blueBright.italic(descripition));






















