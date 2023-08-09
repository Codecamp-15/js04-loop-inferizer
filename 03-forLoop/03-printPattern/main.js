let str = '*';
let re_str = '';

for (i = 0 ; i <= 5; i++){
    for(let j = 1; j <= 1; j++){
        re_str = `${re_str}` + " " + `${str}` 
    }
    console.log(re_str)
    console.log('\n')
}

// let str = "";
// for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= 4; j++) {
//         if(j <= i) str += '*';
//     }
//     str += '\n';
// }
// console.log(str);