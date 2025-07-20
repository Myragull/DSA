                 // write a program to swap 2 values

// here i will be using the example of 2(glass1,glass2) empty glasses that 2 are filled and takes another empty one (glass3)
// filled glass3 with glass1 now glass1 is empty
// now filled glass1 with glass2 
// now glass2 is empty filled it with glass3 now both of the vlaues are swapped using a third empty glass

// method 1
let a=30;
let b=20;
let c=a;
a=b;
b=c;
// console.log(a,b);

// method 2/
let d=30;
let e=20;
[d,e]=[e,d]
// console.log(d,e)

// What is array destructuring?
// So instead of doing:

// let arr = [1, 2];
// let x = arr[0];
// let y = arr[1];
// You can do:

// let [x, y] = [1, 2];


// qs no 6 
const obj ={
      name : "Myra",
      age: 23,
}

obj.name="Gull";

// console.log(obj);


// q no 7
// let str = "50";
// let num = Number(str);
// console.log((str))

// q no 8 :
let str = "JavaScript";

if (str.search("Script") === -1){
    console.log("Script Founds")
}
else{
    console.log("Script not found")
}

// q no 9
let arr =[1,2,3,4,5];
let result = arr.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(result)

// q no 10 
let g = "hello" / 2; // Invalid math operation
console.log(g); // NaN
console.log(typeof NaN); // "number" (weird JS quirk)

// these are the built in methods for the arrays okay 
// .map
let nums = [1, 2, 3];
let result = nums.map(num => num + 1);
console.log(result); // [2, 3, 4]

// .filter
let nums = [1, 2, 3, 4, 5];
let evens = nums.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// .reduce
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
