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
console.log(a,b);

// method 2/
let d=30;
let e=20;
[d,e]=[e,d]
console.log(d,e)

// What is array destructuring?
// So instead of doing:

// let arr = [1, 2];
// let x = arr[0];
// let y = arr[1];
// You can do:

// let [x, y] = [1, 2];