

function reverseDigit (n) {

    let arr = [];

    if(n === 0) {
        return 0;
    }
    while(n>0){
        let rem = 0;
        rem = (n%10);
        arr.push(rem);
        n = Math.floor(n/10);
    }
   


    let reversedString = '';
    let leadingZero = true;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] !== 0 ||  !leadingZero) {
            leadingZero = false;
           reversedString += arr[i];

        }
    }

    return reversedString;
}

const n = reverseDigit(45070800);
console.log(n);