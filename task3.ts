//array methods
let myArray:number[]=[1,2,3,4,5];
//push
myArray.push(6,7)
console.log("after push",myArray);
//pop
myArray.pop();
console.log("after pop",myArray);
//unshift
myArray.unshift(0,-1);
console.log("after unshift",myArray);
//shift
myArray.shift();
console.log("after shift",myArray);


//using slice and splice
let array1:number[]=[1,2,3,4,5,6,7,8];
//using slice to create subarray
let slicedArray:number[]=array1.slice(1,4);
console.log("sliced Array",slicedArray);
console.log("original Array:",array1);
//using splice to remove elements from original array
let splicedArray:number[]=array1.splice(3,4);
const subArrysplice=array1.splice(3,4);
console.log("originalArray",splicedArray);
console.log("spliced Array",splicedArray);
