let sum = 0;
let even = 0;
let odd = 0;
let expo2 = 0;
let expo3 = 0;
let re_expo = 0;

for (let i = 1; i <= 100; i++){
    sum = sum + i;
        if(i % 2 == 0) even = even + i;
        if(i % 2 != 0) odd = odd + i;
        if(i % 2 == 0) expo2 = expo2 + (i ** 2);
        if(i % 3 == 0) expo3 = expo3 + (i ** 2);
            re_expo = expo2 - expo3;
    }


console.log(sum) // 5050
console.log(even) // 2550
console.log(odd) // 2500
console.log(expo2) // 171700
console.log(expo3) // 112761
console.log(re_expo) // 58939





