console.log('learn counting loop')

console.log('starting...')

// () = parenthesis
// {} = bracket
// [] = square bracket

// EX1 : Syntax
// for (let i = 0; i < 3; i++) {
//     console.log('>> hello')
// }

// EX2 : Fizzbuzz
// for (let i = 0; i <= 20; i = i + 1) {
//     if((i % 3 == 0) && (i % 5 == 0)) {
//         console.log('Fizzbuzz')
//     } else if (i % 5 == 0){
//         console.log('Buzz')
//     } else if (i % 3 == 0){
//         console.log('Fizz')
//     } else {
//         console.log(i)
//     }
//     }

// EX3 : Skip Fizz
// for (let i = 0; i <= 20; i = i + 1) {
//     if((i % 3 == 0) && (i % 5 == 0)) console.log('Fizzbuzz')
//     else if (i % 5 == 0) console.log('Buzz')
//     else if (i % 3 == 0) continue;
//     else console.log(i)
//     }

// EX3B :
// for (let i =1; i <= 20; i++){
//     if (i % 2 == 0) console.log(i);
//     else continue; //ให้ไป update ค่าที่ step และเริ่มรัน loop รอบถัดไป
//     console.log('even')
// }

// EX4 : Concat string
// let str = '';
// for (let i = 1; i <= 10; i++) {
//     // guard 
//     if( i % 3 == 0) continue;
//     str += i; //str = str + i; 
// }
// console.log(str);

// EX5 : Remove vowel (a,e,i,o,u)
// let src = 'codecamp'; //'cdcmp'
// let res = '';
// // src.length ==> 8
// // src[0] ==> c
// for (let i = 0; i < src.length; i++){
//     let c = src[i]
//     let isVowel = c == 'a'|| c == 'e' || c == 'i' || c == 'o' || c == 'u' 
//     if (isVowel) continue;
//     res = res + src[i];
// }
// console.log(res)

// ADVANCE : Nested Loop; ลูปซ้อนลูป
// Multiplication Table
// i => 2-12
for (let i = 2; i <= 12 ; i++){
//     console.log(`${i} * 1 = ${i * 1}`);
//     console.log(`${i} * 2 = ${i * 2}`);
//     console.log(`${i} * 3 = ${i * 3}`);
//     console.log(`${i} * 4 = ${i * 4}`);
//     console.log(`${i} * 5 = ${i * 5}`);
// j => 1-12
    for(let j = 1; j <= 12; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('\n')
}



console.log('End...')

