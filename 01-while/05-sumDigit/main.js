let num = +prompt('enter number:');
let count = 0;
let sum = 0;

if(num < 0) num = -num;
while (num){
    let remainder = num % 10;
    num = (num - remainder) / 10;
    sum += remainder;
    count++;
 }

 console.log(count, sum) ;