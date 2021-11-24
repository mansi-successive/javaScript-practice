// ******question-one*****


// Question 1 : Return object into a array of '[key, value]' pairs.


console.log(result);
var obj = {
   red: "#FF0000",
   green: "#00FF00",
   white: "#FFFFFF",
}
var result = Object.entries(obj);

console.log(result);

//  Question 2:  Revert the value key will become the value and vice versa.

const obj = {
   red: "#FF0000",
   green: "#00FF00",
   white: "#FFFFFF",
}

function objectFlip(obj) {
   return Object.entries(obj).reduce((acc, [key, value]) => (acc[value] = key, acc), {})
}
console.log('input:  ', obj);
console.log('output: ', objectFlip(obj));




// ******* Question 3 : Write a function inside the object to find the major and minor.
//  Input should be provided while calling the function.
//  expected output
//  Age above 18 return Major
//  Age below 18 return Minor

var obj = {
   myfun(age) {
      if (age <= 18) {
         console.log(`age is Minor ${age}`);
      } else {
         console.log(`age is Major ${age}`);
      }
   }
}
console.log(obj.myfun(18));
console.log(obj.myfun(19))





// JavaScript Objects notes\\prectice



// JavaScript is an object - based language.Everything is an object in JavaScript.

// JavaScript is template based not class based.Here, we don't create class to get the object. But, we direct create objects.


// Creating Objects in JavaScript

// There are 3 ways to create objects.


// By object literal



// emp = {
//    id: 102,
//    name: "Shyam Kumar",
//    'salary id': 40000
// }

// console.log(emp);
// console.log(emp.name)
// console.log(emp['salary id'])
// console.log(emp['name'])

//* Unassigned properties of an object are undefined(and not null).

// By creating instance of Object directly(using new keyword)

// var emp = new Object();
// emp.id = 101;
// emp.name = "Ravi Malik";
// emp.salary = 50000;
// console.log(emp)

// By using an object constructor(using new keyword)

// function emp(id, name, salary) {
//    this.id = id;
//    this.name = name;
//    this.salary = salary;
// }
// e = new emp(103, "Vimal Jaiswal", 30000);

// 1 *****  delete*****
// emp = {
//    id: 102,
//    name: "Shyam Kumar",
//    'salary id': 40000
// }
// delete emp.id;
// console.log(emp);

// 2**** adding new property*****

// emp = {
//    id: 102,
//    name: "Shyam Kumar",
//    'salary id': 40000
// }

// emp.bank = "abs"
// console.log(emp);

// 3 ****updating*****

// emp = {
//    id: 102,
//    name: "Shyam Kumar",
//    'salary id': 40000,

// }

// emp.name = "abs"
// console.log(emp);


// Comparing objects
// In JavaScript, objects are a reference type.Two distinct objects are never equal, even if they have the same properties.
// Only comparing the same object reference with itself yields true.

// // Two variables, two distinct objects with the same properties

// var fruit = { name: 'apple' };
// var fruitbear = { name: 'apple' };

// fruit == fruitbear; // return false
// fruit === fruitbear; // return false

// Two variables, a single object
// var fruit = { name: 'apple' };
// var fruitbear = fruit;  // Assign fruit object reference to fruitbear

// // Here fruit and fruitbear are pointing to same object
// fruit == fruitbear; // return true
// fruit === fruitbear; // return true

// this keyword(it always target to parent)
// A function's this keyword behaves a little differently in JavaScript compared to other languages.
//  It also has some differences between strict mode and non-strict mode.
// const test = {
//    prop: 42,
//    func: function () {
//       return this.prop;
//    },
// };

// console.log(test.func());