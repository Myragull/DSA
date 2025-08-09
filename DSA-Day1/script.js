         //    1 sum of two integers

// let a =10;
// let  b=20;
// console.log(a+b);

         // 2 relationship between integer and string

// some basic rules before starting
// string + stirng = string(Concatenation) (Means combining of things)
// string + int = string(concatenation)
// or anything joined with a string is concatenation okay
// you can also use typeof operator here to check the type of values or outputs
// int + int = int (Arithmetic operations)
// let a = "Hello ";
// let b = "World";
// console.log(a+b);
// let a = 10;
// let b =20;
// console.log(typeof(a+b));

// let a = 10;
// let b = 20;
// console.log("sum of "+ a + " and "+ b +" is equal to "+a+b);
// here in this qs the ans will be 1020 not 30 bcoz any complier or nay js engine will starts solving the qs from the left side okay so if he gets twp operands and a single operator than e will stops there and solve thme than moves forward 
// "Sum of 10 "+ " and "+ b +" is equal to "+a+b;
{
// "Sum of 10 and " + b +" is equal to "+a+b;
// "Sum of 10 and 20 "+" is equal to "+a+b;
//"Sum of 10 and 20 is equal to  " +a+b;
// "Sum of 10 and 20 is equal to 10 " +b;
// "Sum of 10 and 20 is equal to 1020";
}

// console.log("Sum of 10 "+ " and "+ b +" is equal to "+(a+b)) ;
// there is something called typechesion means which will gets first priority so firstly brackets are solved than others okay 
// also if we put it at front than ans will be 30 okay
// console.log(a+b +" is equal to "+"Sum of 10 " + " and "+ b ) ;


               // 3 type cohesion

// in js whenever you will see the + it will do 2 things one is concatenation and other is arithmetic operations okay 
// let a = 10;
// let b = 20;
// console.log("a"+"b");
// console.log(a +" b");
// console.log(a + b);
// the other operators will only do the srithmetic operatoins only
// console.log(10 -" 6")
// console.log(10 - 6)
// console.log(10 *" 6")
// console.log(10 * 6)