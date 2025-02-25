

function numberOfOddDigits (n) {
    if(n === 0){
        return 0;
    }
    let count = 0;
    while( n > 0){
        const rem = Math.floor(n%10);
        if(rem%2 !== 0){
            count ++;
        }
        n = Math.floor(n/10);
    }
return count;

};

const n = numberOfOddDigits(1);
console.log(n);



