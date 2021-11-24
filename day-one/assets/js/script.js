// difference between let var const

// 1- reassign with in scope = var ,let not in const
//2- redeclared value = var not in let & const
//3- functional scope(var)&Global scope(let,const)
//4- update(let,var) /not update(const)










// first difference (we can reassign value in var ,let but not in const)
//    var name = "mansi"

//  name = "indu"      //value can assign
//  let name = "mansi"
//  name = "indu"       

// const name = "mansi"
// name = "indu"


//=> redeclare value only in var not in let const
// var a = 1;
// var a = 3
// console.log(a)



//=> hoisting we can declare var before its execution or define 
// x = 10;
// console.log(x)
// var  x;     // not possible in let const




//=>  function scope (var)/ block scope(let,const)
// {
//   let x = 2;
//   console.log(x);   //block scoop let,const
// }
//  console.log(x);   // functional scope var

//  for (var i = 0; i < 3; i++) {
//     console.log(i);
//  }

//console.log(i);

// DataType
// two type primitive non primitive

// primitive seven type
// Number
// String
// Boolean
// Undefined
// Null
// Object
// Symbol
// non primitive
// (object) Array function

// non primitive
// Numbers:

// A number data type can be an integer, a floating point value, an exponential value, a ‘NaN’ or a ‘Infinity’.

// example
// var a = 250;  // integer value
// var b = 25.5;  // a number containing a decimal 
// var c = 10e4 //  an exponential value which evaluates to 10*10000;


// There are special numeric values e.g.NaN and Infinity.

// If a number is divided by 0, the resulting value is infinity.


// 5 / 0;    // results in infinity
// The type of infinity is a number
// typeof (infinity);   // returns number


// A ‘NaN’ results when we try to perform an operation on a number with a non - numeric value


// ‘hi’ * 5; // returns NaN
// typeof (NaN);  // returns a number


// We can also create a number literal by using the Number() function:


// var c = Number(5);
// console.log(c);  // This will return 5




// String:

// The string data type in JavaScript can be any group of characters enclosed by a single or double - quotes or by backticks.


// var str1 = “This is a string1”;  // This is a string primitive type or string literal
// var str2 = ‘This is a string2’;
// var str3 = `This is a string3`;


// Boolean:

// The boolean data type has only two values, true and false.It is mostly used to check a logical condition.
// var a = 5;
// var b = 6;
// a == b // returns false
// Symbol:

// The ‘symbol’ data type is new in es6.It is one of the new features of es6.The symbol data type defines a property of an object which is private to the object.It refers to the ‘key’ of the key - value pair of an object.


// var object1 = {
//     name: ‘Shalini’,
//     age: 25,
//     city: ‘Mumbai’
// }
// var occupation = Symbol(‘engineer’);
   //some imp question
// console.log(10 + "20");
// console.log(10 - "4");
// console.log(10 - "20");
// console.log("j" +    "s");
// console.log("" + "");
// console.log("" + 0);
// console.log("Hello" - "world");
// console.log(5 - "world");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);
// console.log(false - false);
// console.log(false + false);
// console.log(undefined - "undefined");
// console.log(undefined - undefined);
// console.log(undefined - 5);
// console.log(undefined - "5");
// console.log(undefined - 9);
// console.log(null - 9);
// console.log(0 - 9);
// console.log(null - null);
// console.log(null + null);
// console.log(null - "9");
// console.log(undefined + 5);