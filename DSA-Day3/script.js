
// 8 Accept a year a check whether its a leap yera or not
// years every 4 years in acentry are leap yeras (2000,2004,2028,2012,2016,2020,2024)
// also every century year is not a leap yera but evry 400 centry yera is a leap year(400,800,1200,1600,2000)

// let year = Number(prompt("Enter the year"));
// if(year%4==0 && year%100 != 0){
//     console.log("leap year");
// }else if(year % 400 ==0){
//     console.log("leap year");
// }else{
//     console.log("Not a leap year");
// }

// 9  flat/threshold  Pattern to calculate all the amount in a single output or range
//   Approach 1
// Discount is given and calculate the amount you have paid in the given range:
//  let amount = Number(prompt("Enter the amount : "));
//  if(amount>=0 && amount<=5000){
//     console.log(`Amount : ${amount}`)
//  }else if(amount>=5001 && amount <=7000){
//     console.log(`Amount :${amount-(5*amount)/100}`)
//  }else if(amount>=7001 && amount <=9000){
//      console.log(`Amount :${amount-(10*amount)/100}`)
//  }else if(amount>=9000){
//      console.log(`Amount :${amount-(20*amount)/100}`)
//  }else{
//    console.log("Invalid Input")
//}


// Approach 2
//   let amount = Number(prompt("Enter the amount : "));
//   let dis = 0;
// if(amount>=0 && amount<=5000)dis = 0;
// else if(amount>5000 && amount <=7000)dis = 5;
// else if(amount>7000 && amount <=9000)dis = 10;
// else if(amount>9000)dis = 20;
// else console.log("Invalid Input")

// console.log(amount-(dis*amount)/100)


// 10 calculate the electricity bill per unit 
// to calculate each aprt differently piecewise /slab patern
// let units = Number(prompt("Enter the number of units"));
// let bill =0;
// if(units>=0 && units<=100){
//     console.log(units*4.2)
// } else if(units>=101 && units<=200)
// {
//     console.log((100*4.2) + (units-100)*6)
// }else if(units>=201 && units<=400)
// {
//     console.log((100*4.2) + (100*6) + (units-200)*8)
// }else if(units>400)
// {
//     console.log((100*4.2) + (100*6) + (100*8) + (units-400)*13)
// }else{
//     console.log("Invalid inputs")
// }


                //   for loop

// initialization or declaration ,condition , change(increment or decrement)
// for (let i=1; i<=5; i++){
//     console.log("Hello World");
// }

// for (let i=1; i<=5;){
//     console.log("Hello World");
// }

// for (let i=1; ;){
//     console.log("Hello World");
// }

// for (; ;){
//     console.log("Hello World");
// }

// all of these conditions are true only that loop wants 2 semicolons inside of it otherwise its false