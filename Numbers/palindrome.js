

function palindrome (n) {
    const originalNumber = n;
    if(n === 0){
        return true;
    }
    const arr = [];
    while(n > 0){
       let rem = 0;
       rem = n%10;
       arr.push(rem);
       n = Math.floor(n/10);
    }
    const createdNumber = arr.join('');
   
    return originalNumber === Number(createdNumber);

}

const num = palindrome(121);
console.log(num);
