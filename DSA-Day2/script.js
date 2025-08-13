// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.round(4.4));
// console.log(Math.abs(-4)); // 4
// console.log(Math.trunc(-6.8)); // remove the deciaml part
// console.log(Math.min(-6.8,4,8));
// console.log(Math.max(-6.8,4,8));
// console.log(Math.cbrt(27)); // 3
// console.log(Math.sqrt(36)); // 6
// console.log(Math.pow(2,5)); //2*2*2*2*2
// console.log(Math.random()) // 0 to 1
// let a = 132.3241422;
// console.log(a.toFixed(3));

        1 //  compound Interest:
//  a = p * (1 + r / 100)^t; formula;
// let p = 1000; // principal amount
// let r = 5; // rate of interest
// let t = 2; // time in years
// let a = p * Math.pow((1 + r / 100), t);
// console.log(a);

       2  // OTP Generation
// console.log(Math.floor(Math.random()*9000+1000));

       3  // Area of a triangle:
    //    let a = Number(prompt("Enter number a"));
    //    let b = Number(prompt("Enter number b"));
    //    let c = Number(prompt("Enter number c"));
    //    let s = (a+b+c)/2
    //    if(a+b<=c || b+c<=a || a+c<=b){
    //     console.log("Not possible");
    //    }
    //    else{
    //     console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
    //    }

        4 // circumference of a circle:
        let r = Number(prompt("Enter the radius :"));
        console.log(2*Math.PI*r);
