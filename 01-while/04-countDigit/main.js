let num = +prompt('enter number:');
let count = 0;
//PATTERN RECOGNITION
//1150/10 => 1150 => count =1;
//1150/10 => 1150 => count =2;
//1150/10 => 1150 => count =3;
//1150/10 => 1150 => count =4;

if(num < 0) num = -num; //handle with minus number

 while (num >= 1){
    console.log(num)
     num = num / 10;
     count++ ;
 }

 console.log(count) ;

