// Age calculator

function ageCalculator(name, yearOfBirth, currentYear) {
    var age = currentYear - yearOfBirth;
    // return (name + " is " + age + " years old.");
    return (`${name} is ${age} year old`);
}
console.log(ageCalculator("swati", 2000, 2021));

//  BMI calculator
function bmiCalculator(name, weight, height) {
    var bmi = weight / height * height;
    return (name + " bmi is " + bmi)
}
console.log(bmiCalculator("swati", 40, 2));





// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator " + 27%4);






// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);


// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = --num + 5; 
// console.log(num);
// console.log(newNum);


// Prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.








// 3️⃣Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.

// var a = 30;
// var b = 10;

// Equal (==)
// console.log(a == b);

// Not equal (!=)
// console.log(a != b);

// // Greater than (>)
// console.log(a > b);

// // Greater than or equal (>=)
// console.log(a >= b);

// // Less than (<)
// console.log(a < b);

// // Less than or equal (<=)
// console.log(a <= b);

// What is the Difference between == vs === ?


// sol 
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2 );

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

// console.log(num1 === num2 );



// function
// A function is a group of reusable code which can be called anywhere 
// in your program. This eliminates the need of writing the same code 
// again and again.


// type of function
// Function declaration
// Function expression
// Function (fat-arrow-function)


// 1)normal function(function-declaration)
//  function name(){
//   return
// }
// name();



// 2) function exprestion
// let sum = function (){
//   return
// }
// sum()

// *****difference in both we can not call in function expression before initilisation but in Function declaration we call it is also called Hoisting


// fat arrow function(****this keyword and argument object,hoisting does not work if we want to use we use take help of rest operator)
// let name =()=>{}

// var num =function (){
//   console.log(arguments);
// }
// num(5,6,8); 
// (argument kai sath rest operator ka use krte hai in arrow function)
// var sum = (...args)=>{
//   console.log(args);
// }
// sum(5,6,8); 
// rest operator
// default value  
// argument parameter



