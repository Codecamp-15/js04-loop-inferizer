console.log("learn while loop")

console.log("Starting...")

// let i =1;

// while(i <= 20){
// loop block

    // if ( i % 3 == 0) {
    //     console.log(i);
    // } else if (i % 5 == 0) {
    //     console.log(`${i} : High Five`);
    // }

    // if (i % 5 == 0) {
    //     console.log(`${i} : High Five`);
    // } else if ( i % 3 == 0) {
    //     console.log(i);
    //     }


//     i++;
// }

// FizzBuzz
//Range : 1 - 20;
//divide by 3 : PRINT Fizz
//divide by 5 : PRINT Buzz
//divide by 3 and 5 : PRINT Fizzbuzz
//Others : PRINT number
//เริ่มเขียนโค๊ดจาก version ที่ง่ายที่สุดก่อน
//handle จาก ปัญหาที่เยอะก่อน

let i = 1

while(i <= 20) {
    if (i % 5 == 0 && i % 3 ==0){
        console.log('Fizzbuzz');
    } else if (i % 5 == 0){
        console.log('Buzz');
    } else if (i % 3 ==0){
        console.log('Fizz');
    } 
    else {
        console.log(i);
    }

    i++;
}

console.log("End...")