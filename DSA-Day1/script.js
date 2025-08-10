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
        let a= 10++ // operators on constants(or numbers) are not acceptable only acceptable on variables
        // but  let a = true // operators on booleans are acceptabe only in js bcoz in terms of js true=1 and false=0 but in terms if java nd c++ not acceptable