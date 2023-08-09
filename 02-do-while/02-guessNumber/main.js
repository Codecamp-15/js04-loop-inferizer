// Program-1 : Input User-1


    // let ansNumber = prompt ('Enter your magic number')

    // // let isNUll = ansNumber === null;
    // // let isEmpty = ansNumber.trim() === '';
    // // let isNan = isNan (ansNumber)

    // let isValid = ansNumber == null || ansNumber.trim() === '' || isNan (ansNumber)
    // let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99
    // let inInRange = Number(ansNumber) > 1 || Number(ansNumber) < 99

    // if(isValid) {
    //     alert('Invalid input');
    // }   
    //     else if (outOfRange) {
    //         alert('Invalid range');
    //     }

    //     else if (inInRange); {
    //         alert('Try to guess number');
    // }
    
    // V2 : ให้รับ input ได้เรื่อยๆจนกว่าจะทายถูก
    // Program : 
    let ansNumber = ''
    let isEmpty;
    let isNan;
    let outOfRange;

    do {
        ansNumber = prompt('Enter your magic number') || ''; // ดัก null
        isEmpty = ansNumber.trim() === '';
        isNan = isNaN(ansNumber);
        outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
        if (isEmpty || isNan){
            alert('Invalid input. Try 1-99');
        } else if (outOfRange){
            alert('Invalid range. Try 1-99');
        }
    } while (isEmpty || isNan);

    // Program 2: Guess
    // Invalid input
    // Invalid range
    // Too high
    // Too low

    // let guessNumber;

    // do{
    //     guessNumber = prompt('Enter your answer') || '';
    //     isEmpty = guessNumber.trim() === '';
    //     isNan = isNaN(guessNumber);
    //     outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
    //     if (isEmpty || isNan){
    //         alert('Invalid input. Try 1-99');
    //     } else if (outOfRange){
    //         alert('Invalid range. Try 1-99');
    //     } else if (guessNumber > ansNumber){
    //         alert('Too high')
    //     } else if (guessNumber < ansNumber){
    //         alert('Too low')
    //     } else alert('Correct');

    // } while(+guessNumber != ansNumber || count == 5 )


    //Limit : guess  5 time ** can't

    let guessNumber;
    let count;

    do{
        guessNumber = prompt('Enter your answer') || '';
        isEmpty = guessNumber.trim() === '';
        isNan = isNaN(guessNumber);
        outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
        if (isEmpty || isNan){
            alert('Invalid input. Try 1-99');
        } else if (outOfRange){
            alert('Invalid range. Try 1-99');
        } else if (guessNumber > ansNumber){
            alert(`Too high (${+count} of 3)`)
            count++;
        } else if (guessNumber < ansNumber){
            alert(`Too low (${+count} of 3)`)
            count++;
        } else if (count == 3) break;
        else alert('Correct');
        

    } while(+guessNumber != ansNumber)