// task one to reverse value of array witout using reverse method

// function reverse(array) {
//     let output = [];
//     while (array.length) {
//         output.push(array.pop());
//     }

//     return output;
// }

// console.log(reverse([1, 2, 3, 4, 5, 6, 7]));



//****** task- two //Tip calculator****

let applyGst = function (price) {
    let bill = {
        price: "",
        gst: "",
        gstPrice: "",
        total: ""
    };
    if (price <= 100) {
        bill.price = price;
        bill.gst = "15%";
        bill.gstPrice = price * 15 / 100;
        bill.total = price + (15 * price) / 100;
    } else {
        bill.price = price;
        bill.gst = "20%";
        bill.gstPrice = price * 20 / 100;
        bill.total = price + (20 * price) / 100;
    }
    return bill;
}
console.log(applyGst(500));
















/**** Notes Arrays in JavaScript  ****/


// two ways of writing Array

//  type-one  Array literal syntax:

// const arr =[1,2,3,4];

// type-second Array constructor syntax:

// const y = new Array(1,2,3,4);


//  Points to Remember:
// An array is a special type of variable that stores multiple values using a special syntax.
// An array can be created using array literal or Array constructor syntax.
// Array literal syntax: var stringArray = ["one", "two", "three"];
// Array constructor syntax: var numericArray = new Array(3);
// A single array can store values of different data types.
// An array elements(values) can be accessed using zero based index(key).e.g.array[0].
// An array index must be numeric.
// Array includes length property and various methods to operate on array objects.


// ******why we use Array*****

// When we use var, we can stored only one value at a time. 
// var friend1 = 'ramesh';
// var friend2 = 'arjun';
// var friend3 = 'vishal';

// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

// When we feel like storing multiple values in one variable then 
// instead of var, we will use an Array.


// how to access an Array

// ******first all array Access *******

// var myFriends = ['vinod','ramesh','arjun','vishal'];
// console.log(myFriends); output in array ['vinod','ramesh','arjun','vishal'];
// toString()we get value in string ==> vinod,'ramesh','arjun','vishal'



// *******Access an Array item using the index position******


// let fruits = ['Apple', 'Banana'] if we know index position
// console.log(fruits[0])

// // Apple


// console.log(fruits[fruits.length - 1]) if we dont know index position whant to know last array
// // Banana

// *****if we write[fruit.lenght - 1] it tell index no not value*****












// travarsal of array
// let mySisName = ['mansi','devanshi','kamini','rani'];
// // console.log (mySisName);
// if we whant single arry
// // console.log (mySisName[3]);
// if we want length
// // console.log(mySisName.length)
// index no
// // console.log(mySisName.length-1)
// if we whant value
// console.log(mySisName[0])
// var newArry = mySisName[mySisName.length - 1]






// The following table lists all the Array methods.

// Method &	Description

//every()	Returns true or false if every element in the specified array satisfies a condition specified in the callback function. Returns false even if single element does not satisfy the condition.
//filter()	Returns a new array with all the elements that satisfy a condition specified in the callback function.
// forEach()	Executes a callback function for each elements of an array.
//indexOf()	Returns the index of the first occurrence of the specified element in the array, or - 1 if it is not found.
//join()	Returns string of all the elements separated by the specified separator
// lastIndexOf()	Returns the index of the last occurrence of the specified element in the array, or - 1 if it is not found.
//map()	Creates a new array with the results of calling a provided function on every element in this array.
// pop()	Removes the last element from an array and returns that element.
// push()	Adds one or more elements at the end of an array and returns the new length of the array.
//reduce()	Pass two elements simultaneously in the callback function (till it reaches the last element) and returns a single value.
//reduceRight()	Pass two elements simultaneously in the callback function from right - to - left(till it reaches the last element) and returns a single value.
// reverse()	Reverses the elements of an array.Element at last index will be first and element at 0 index will be last.
//  shift()	Removes the first element from an array and returns that element.
//  slice()	Returns a new array with specified start to end elements.
//  some()	Returns true if at least one element in this array satisfies the condition in the callback function.
// sort()	Sorts the elements of an array.
// splice()	Adds and / or removes elements from an array.
// toString()	Returns a string representing the array and its elements.
// unshift()	Adds one or more elements to the front of an array and returns the new length of the array.



// searching in an array  ===>(indexOf,lastIndexOf,Includes)

// (((return value)))
// indexOf,lastIndexOf ==> present( index-no) & absent (-1)
// Includes ==> present(true) & absent(false)  // includes(return boolean value)


// let see the example
// let mySisName = ['mansi','devanshi','kamini','rani','mansi','devanshi','rani' ];

// *******indexOf*********
// console.log(mySisName.indexOf "rani"); //return the index no which is first
// // console.log(mySisName.indexOf("rani",4)); //4 index no se start kiya hai search krna


// *******lastIndexOf*********
// // last indexOf return last greater index no
// // console.log(mySisName.lastIndexOf("rani"))

// *******Includes*********
// // includes only farward search
// console.log(mySisName.includes("rani"))




// CRUD (create read update delete )method insert,add,replace,delete

//  push,unshift,pop,shift,splice

// example 

// let fruits = ['Apple', 'Banana']

// *****push add at the end*****

// let fruits = ['Apple', 'Banana']
// fruits.push('Orange','kiwi')
// console.log(fruits)  //one way
// console.log(fruits.push('Orange','kiwi')) //secway in single line


// let newLength = fruits.push('Orange','kiwi') //in new array
// console.log(newLength)
// // ["Apple", "Banana", 'Orange','kiwi']


//  ****pop Remove an item from the end of an Array***

// let fruits = ['Apple', 'Banana']
// let last = fruits.pop() // remove Orange (from the end)
// // ["Apple"]

// ****shiftRemove an item from the beginning of an Array*****
// let fruits = ['Apple', 'Banana']
// let first = fruits.shift() // remove Apple from the front
// // ["Banana"]


// note Array elements can be deleted using the JavaScript operator delete.

// Using delete leaves undefined holes in the array.

// Use pop() or shift() instead.

//*****unshift */ Add an item to the beginning of an Array
// let fruits = ['Apple', 'Banana']
// let newLength = fruits.unshift('Strawberry') // add to the front
// // ["Strawberry",'Apple', 'Banana']

// *****replace value using index no****
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "Kiwi";
// console.log(fruits);
// ["Kiwi, Orange, Apple, Mango"]


// ****** The splice() method can be used to add new items to an array and to delete or replace :********

// ***The splice() method can be used to add new items to an array:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);
//Banana, Orange, Lemon, Kiwi, Apple, Mango//

// notes The first parameter(2) defines the position where new elements should be added(spliced in).

// The second parameter(0) defines how many elements should be removed.

// The rest of the parameters("Lemon", "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

//****** */ Using splice() to Remove Elements

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);

//notes The first parameter(0) defines the position where new elements should be added(spliced in).

// The second parameter(1) defines how many elements should be removed.

// The rest of the parameters are omitted.No new elements will be added.





// Merging(Concatenating) Arrays
// The concat() method does not change the existing arrays.It always returns a new array.


//     Example(Merging Three Arrays)
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren)


// Example(Merging an Array with Values)
// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter");
// console.log(myChildren)


// Slicing an Array
// The slice() method creates a new array.It does not remove any elements from the source array.last no is excluded


// Automatic toString()
// JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());



// Sorting an Array
// The sort() method sorts an array alphabetically:

// Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits)
// Apple, Banana, Mango, Orange

// *********mazor drawback in numeric 1000<2************

// to fix it we have
// Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings("Apple" comes before "Banana").

//     However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:

//     Example
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b) { return a - b }); assending
// points.sort(function (a, b) { return b - a }); desending


// Reversing an Array
// The reverse() method reverses the elements in an array.
// The reverse() method reverses the elements in an array.

// By combining sort() and reverse() you can sort an array in descending order: 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();

// Orange, Mango, Banana, Apple


// ******find<filter<map*****



// find method 

// // find method only give one value and give undefine if not found
//  const price=[200,300,400,500,600];

// const findElem = price.find((currval)=>{
// return currval<400
// // });
// console.log(findElem); 

// findindex give index no only one element if not found then -1


// filter method
//  filter method if we whant all data(in find  we get only one value which get satisfy) + index no which satisfy the value
//  if not satisfy then give empty array(give all value which satisfy [find se bettor]but not return new arrray {map se kam bettor})

//   const price=[200,300,400,500,600];
//   const newPrice  = price.filter((elem,index)=>{
// return elem<400;
//   })
//   console.log(newPrice) 



// Map  ( currentElement,index,array) and Reduce  (accumulator, currentElement,index,array) Method

// Array.prototype.map() 

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
//   }[, thisArg]);

// Returns a new array containing the results of calling a 
// function on every element in this array. 

// const array1 = [1, 4, 9, 16, 25];
// num > 9
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem > 9;
// })
// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((curElm, index, arr) => {
//     return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// }).reduce().
// console.log(newArr);


// let newArrfor = array1.forEach((curElm, index, arr) => {
//   return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// })
// console.log(newArrfor);

// It return new array without mutating the orignal array 


// reduce 
// 2d,3d to single dimention flater the array
// 4 argument
// accumulator not found in map
// current value ,index, array

// let arr =[5,6,2];
// let newArry = arr.reduce((accumulator, currentElement,index,array)=>{
//  return accumulator += currentElement;
//                      
// },8) //add extra no to aaray
// console.log(newArry); 


//  SPred 
// const color = ['red','blue','green'];
// const newColor = [...color,'yellow'];
// console.log(newColor)

// 6. every()
// This method checks every element in the array that passes the condition, returning true or false as appropriate.

// 7. some()
// This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.

// 8. includes()
// This method checks if an array includes the element that passes the condition, returning true or false as appropriate.

// 9. join()
// This method returns a new string by concatenating all of the array’s elements separated by the specified separator.

// 10. reduce()
// This method applies a function against an accumulator and each element in the array to reduce it to a single value.

// 11. find()
// This method returns the value of the first element in an array that pass the test in a testing function.

// 12. findIndex()
// This method returns the index of the first element in an array that pass the test in a testing function.

// 13. indexOf()
// This method returns the index of the first occurrence of the specified element in the array, or - 1 if it is not found.

// 14. fill()
// This method fills the elements in an array with a static value and returns the modified array.

// 15. slice()
// This method returns a new array with specified start to end elements. last index in not included if we pass single value it take it to the last

// 16. reverse()
// This method reverses an array in place.Element at last index will be first and element at 0 index will be last.

// 17. push()
// This method adds one or more elements to the end of array and returns the new length of the array.

// 18. pop()
// This method removes the last element from the end of array and returns that element.

// 19. shift()
// This method removes the first element from an array and returns that element.

// 20. unshift()
// This method adds one or more elements to the beginning of an array and returns the new length of the array.
// fill()
// This method fills all the elements of a given array with the same value, from a start index(default 0) to an end index(default array.length).
// const myAwesomeArray = [1, 2, 3, 4, 5]

// // The first argument (0) is the value
// // The second argument (1) is the starting index
// // The third argument (3) is the ending index
// myAwesomeArray.fill(0, 1, 3)
// //-------> Output : [1, 0, 0, 4, 5]