// ******question-one*****
const users = [
   { name: "John", age: 42 },
   { name: "Alex", age: 42 },
   { name: "smriti", age: 26 },
   { name: "kashi", age: 21 },
   { name: "Doe", age: 33 },
   { name: "user", age: 15 }
]
result = users.reduce(function (r, a) {
   r[a.age] = r[a.age] || [];
   r[a.age].push(a.name);
   return r;
}, {});

console.log(result);









//*** */ how to flattened an Array


// **first way by recusion method

const flatarray = (arr, result = []) => {
   for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      if (Array.isArray(arr[i])) {
         flatarray(value, result)
      } else {
         result.push(value)
      }
   }
   return result;
}

const arr = [11, 22, 34, 41, 52, [80, 9, 10], [11, 42, 13], [34]];
console.log(flatarray(arr))




// ******sec-way*****

var arr = [10, 20, 30, 40, [50, 60, [40, 50, 60, 90, [20, 50]]]];
arr = arr.flat(Infinity);
console.log(arr);


//  ***third-way*****


function flatten(arr) {
   return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};

const val = [[1, 2], [3, [4, [5]]]];

const flattened = flatten(val);
console.log(flattened);
