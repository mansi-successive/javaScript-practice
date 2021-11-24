//  total no counts in array
const arr1 = [4, 3, 6, 3, 4, 3, 6, 6, 4, 5, 4, 1]

function duplicateCount(array) {
   let counts = {}
   for (let i = 0; i < array.length; i++) {
      if (counts[array[i]]) {
         counts[array[i]] += 1
      } else {
         counts[array[i]] = 1
      }
   }
   console.log(counts)
}

duplicateCount(arr1);



// // preventing adding dublicate keys in array

// function ab(value) {
//    const a = [1, 2, 3, 8, 10];
//    if (a.includes(value)) {
//       console.log("Already exist");
//       return;
//    }else {
//        a.push(value);
//    }
//   console.log(a);
// }
// ab(1);

function func(value) {
   const arr = [1, 2, 3, 8, 10];
   const isUniqueValue = arr.indexOf(value) === -1;
   if (isUniqueValue) {
      arr.push(value);
   } else {
      console.log("Already exist");
      return;
   }
   console.log("arr", arr)
}
func(2);