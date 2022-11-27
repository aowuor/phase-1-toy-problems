// (BubbleSort)
// 1. Write a function that takes an array of numbers as input. It should output an array of those same numbers sorted from lowest to highest.

// sample input = [5,6,1,3,4,2]
// Expected output = [1,2,3,4,5,6]

function sortArr(arr){
   let output = arr.sort();
   return output;

}
console.log(sortArr([5,6,1,3,4,2]))