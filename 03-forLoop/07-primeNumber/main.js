// let count = 0;
// for (i = 2; i <= 100 ; i++){
//     for (j = 1; j <= i; j++){
//         if(i % j == 0) 
//         count++;
//     }
//     if (count == 2)
//     console.log(i)
//     count = 0;
// }

//****************************************************************//
//program : จำนวนที่กำหนดให้เป็นจำนวนเฉพาะรีเปล่า?
//program : find prime number (n)
let n = 5;
let isPrime = true; //flag

// 5/1
// 5/2
// 5/3
// 5/4
// 5/5

for( i = 2; i < n;i++) { 
    if( n % i == 0) isPrime = false;
    // n=2 5/2 = 2.5 => isPrime = true
    // n=3 5/3 = 1.6 => isPrime = true
    // n=4 5/4 = 1.25 => isPrime = true
    // n=5 
}
    if(isPrime == true) console.log(`number ${n} is prime number`);
    else console.log(`number ${n} not prime number`)

//****************************************************************//
//program : find prime number (1-100)


for (let n = 2; n <= 100; n++){
    let isPrime = true;
    for (let divider = 2; divider < n; divider++){
        if(n % divider == 0) 
        isPrime = false;
        break;
    }
    if(isPrime == true)console.log(n)
}