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
// the other operators will only do the arithmetic operatoins only
// console.log(10 -" 6")
// console.log(10 - 6)
// console.log(10 *" 6")
// console.log(10 * 6)


            //  4  Accept age and print it

// what previously we  were doing we were hardoing the value now we will takes the value from the user
// converting the user nas which is string into number
// let age = Number(prompt("Enter your age"));
// console.log(age);

        //   5 Swap two variables via 3 methods

//  /*1 using a third variable*/  let a=10;
//         let b= 20;
//         let c;
//         c=a;
//         a=b;
//         b=c;
//         console.log(a,b);
// /*2 destructuring asignmnet operator*/  let a=10;
//        let b= 20;
//        [a,b] =[b,a];
//        console.log(a,b)
/*3 using arithmetic operations  */
    //    let a=20;
    //    let b=10;
    //    a= a+b // 30
    //    b=a-b // 20;
    //    a=a-b;
    //    console.log(a,b)       


    //   6 opeartors in JavaScript
                            // Arithmeticn op (+,-,/,%,*)
    // here is a thing that in case of dsa always go for the integers and try to avoid the floating point numbers so for that in case of % the ans will always be int but for the / the ans will always be floating for that convert into int
    // console.log(Math.floor(13/2)); // division the final answer
    // console.log(13%2); // remainder the left over

    // console.log(Math.floor(2/13))

                               // interview qs

    // if dividend is smaller than the dividend tha the answer will always be dividend
    // console.log(2%10)


                           // Relational operators
        //    (==,===,>=,<=,!==,!===)
//   console.log(10>=19); 
// console.log(10 == "10");                        
// console.log(10 === "10");//in dsa the datatype matters the most so uses the strict comparison always bcoz in medium comaprison it will returns the true that is not a good practice

                       // Logical Operators
//  console.log(10>12 && 2<9 && 23<12) 
 // in case of and opeartor it checks all the conditions if any one is false than all will be false okay iff all are true than it will only gave the true or if the first one is false than executes out form there

//  console.log(10<12 || 2<9 || 23<12)
 // or opeartor gives true if any one oof condition is true okay 

                      //  unary Operators
// those operators who works with only  a single operand okay  (++ , -- pre and post)

// pre increment pehle increment than print karo
// let a = 10;
// console.log(++a) 
// console.log(a++) 
// let a = 10;
// let b;
// b = ++ a;
// console.log(a);
// console.log(b);

// post incement first print than increment
// let a = 10;
// let b;
// b =a++;
// console.log(a);
// console.log(b);
// same goes with decrement operator 

//  some qs
//  let a= 10;
//  console.log(a++ + ++a);
// console.log(++a + a++ );


        //        some errors
        // let a= 10++ // operators on constants(or numbers) are not acceptable only acceptable on variables
        // but  let a = true // operators on booleans are acceptabe only in js bcoz in terms of js true=1 and false=0 but in terms if java nd c++ not acceptable




                                // Practice qs

//                                 1.
//  Correct Numeric Sum with Type Conversion You are given two variables, a and b, which can be either strings or numbers. Write a function that returns their numeric sum. You must ensure that "5" + 3 returns 8, and not "53". You may not use parseInt — use Number() or another safe conversion method.

// function sum(a,b){
//   return Number(a) +Number(b) ;
// }

// console.log(("10"+20));


//                                       2.
//  Understanding + Operator Precedence
// In JavaScript, the + operator can perform both addition and string concatenation. Given two integers, write two console outputs:
// One that concatenates the numbers to a string with "Value: " at the start.
// One that first sums them, then concatenates to "Value: ".
// Explain the difference in results.

// let a =10;
// let b=20;

// console.log("value: "+a+b)
// console.log("value: "+(a+b))


//                                   3.
//  Type Checking Before Sum
// Write a function that takes two inputs, x and y. If both are numbers, return their sum. If not, print an error message:
// "Invalid types: x is <type>, y is <type>"
// where <type> is determined using typeof.

// wrong
// function sum(x,y){
//         if(typeof(x) === Number && typeof(y) === Number){
//                 return(x+y)
//         }
//         else{
//                 console.log(`invalid types typeof x is ${typeof(x)} and typeof y is ${typeof(y)}`)
//         }
// }

// sum(10,20)

//right
// function sum(x,y){
//         if(typeof(x) === "number" && typeof(y) === "number"){
//                 console.log(x+y)
//         }
//         else{
//                 console.log(`invalid types typeof x is ${typeof(x)} and typeof y is ${typeof(y)}`)
//         }
// }

// (sum("10",20))

 
//                           4.
//  Swap Variables in Three Ways
// Given two numbers, a and b, write three different implementations to swap their values:
// Using a third variable.
// Without a third variable, using arithmetic.
// Using JavaScript’s destructuring assignment.

//  1
// let a=10;
// let b=5;
// let c;
// c=a;
// a=b;
// b=c;
// console.log(a,b);

// 2
// let a=5;
// let b=10;
// [a,b]=[b,a];
// console.log(a,b)

//3
// let a=10;
// let b=20;
// a= a+b // 30;
// b=a-b;
// a=a-b;
// console.log(a,b)

//                           5.
//  Integer Division and Remainder
// Write a function that takes two integers dividend and divisor and returns:
// The integer division result (rounded down, using Math.floor)
// The remainder (using %)
// Example: 13, 2 → quotient: 6, remainder: 1

// function division(dividend,divisor){
//         console.log(`Quotient: ${Math.floor(dividend/divisor)}`)
//         console.log(`Remainder: ${dividend%divisor}`)
// }

// division(3,13)

//                       6.
//  Loose vs. Strict Equality
// Write a function that compares two values using both == and ===.
// If they are strictly equal (===), return "strictly equal".
// If they are loosely equal (==), return "equal".
// Otherwise, return "not equal"
// // 
// function equality(a,b){
//   if(a===b){
//         console.log("Strictly equal")
//   }
//   else if (a==b){
//         console.log("equal");
//   }
//   else{
//         console.log("not equal")
//   }
// }

// equality("10",10)


// 7.
//  Logical Operators AND / OR
// Given three boolean expressions, cond1, cond2, and cond3, return two results:
// true if all are true (&&).
// true if at least one is true (||).
// Print both results.

// let cond1 = true;
// let cond2 = false;
// let cond3 = true;

// console.log(cond1 && cond2 && cond3 )
// console.log(cond1 || cond2 || cond3 )


// 8. Pre- and Post-Increment Evaluation
// Let a = 5. Evaluate the expressions a++ + ++a and ++a + a++. Return both results along with the final value of a after each operation. Be ready to explain the difference between pre-increment and post-increment.

// let a = 5;
// console.log(`a++ + ++a: ${a++ + ++a}`); // 11
// a++: post-increment → use 5, then a becomes 6
// ++a: pre-increment → first increment a (6 → 7), then use 7
// So: 5 + 7 = 12

// console.log(`++a + a++: ${++a + a++}`); // 12



// 9. Invalid Increment Operation
// Demonstrate what happens if you attempt to increment a number literal directly, e.g., 10++. Write a small program that catches the error and prints its message. Explain why JavaScript disallows this.


// 10. Age Prompt Simulation
// Simulate prompting a user for their age (pass it as a string argument to the function). Convert it to a number, then print "Adult" if age ≥ 18, else "Minor". You must ensure the conversion handles numeric strings correctly.

// let age = prompt("ENter your age");
// let promptAge = Number(age);

// if (promptAge>=18){
//    console.log("Adult")
// }
// else{
//         console.log("Minor")
// }