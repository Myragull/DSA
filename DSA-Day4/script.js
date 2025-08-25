             // for Loops
            //  Question No 1:
// let num = Number(prompt("Enter a number"));
// for (let i=0; i<num; i++){
//     console.log("Hello World");
// }

               // Question No 2: scope of i 
// let i;   
// let num = 9; 
// for (i=1; i<=num; i++){
//     console.log("Hello World");
// }
// console.log(`fails at ${i}`)

              // Question No 3
   
// let num = Number(prompt("Enter a number"));
// if(isNaN(num)){
//     console.log("Invalid Input");
// }else{
// let i;
// for (i=1; i<=num; i++){
//     console.log("Hello World");
// }
// console.log(`fails at ${i}`)
// }

                    // Question no 4:

// let n = Number(prompt("Enter a number"));
// for(let i=1; i<=n; i++){
//     console.log(i);
// }

                 // Question No 5

// let n = Number(prompt("Enter a number"));
// for(let i=n; i>=1; i--){
//     console.log(i);
// }

                   // Question no 6 :
// take  a number and prints its table:
// let n =Number(prompt("Enter a number"));
// for (let i=1; i<=10; i++){
// console.log(`${n} * ${i} = ${n*i}`);
// }

                        // Question No 7:
// Print a reverse table:
// let n = 8;
// for (let i=10; i>0; i--){
//     console.log(`${n} * ${i} = ${n*i}`)
// }

                   // Question no 8:
//  let n=Number(prompt("Enter your number"))
//  let sum =0;
//  for (let i=1; i<=n; i++){
//     sum = sum+i;
//     //sum++
//  }
//     console.log(`${sum}`);


                         // Question No 9 :
// let n= Number(prompt("Enter a number"));
// let fac =1;
// for(let i =1; i<=n; i++){
//     fac = fac*i;
// }
// console.log(fac);

                              // Question No 8:
// Even and odd sum of a anumber in a given range
// let n=10;
// let evenSum = 0;
// let oddSum = 0;
// for(let i=1; i<=n; i++){
//     if(i%2==0){
//         evenSum=evenSum+i;
//     }else{
//         oddSum= oddSum+i;
//     }
// }
// console.log("Even Sum",evenSum);
// console.log("Odd Sum",oddSum);

                // Question No 9:
// Print all the factors of a number:
// let n =12;
// for(let i=1; i<=n; i++){
//     if(n%i==0){
//          console.log(i);
//     }
// }



// code optimizations:
// let n =19;
// for(let i=1; i<=n/2; i++){
//     if(n%i==0){
//         console.log(i);
//     }
// }


// Question No 10:
// check a number is prime or not:
let n=7;
let count =0;
for(let i=1; i<=n; i++){
    if(n%i==0){
        count++;
    }
}
if(count==2){
    console.log("Prime")
}else{
    console.log("Not Prime")
}