
function largest(n) {
    if(n === 0){
        return ;
    }
    let largestNum = 0;
    while(n>0){

        let rem = 0;
        rem = n%10;
        if(rem > largestNum) {
            largestNum = rem;
        }
        n = Math.floor(n/10);
    }
    return largestNum;

}

const n = largest(58997);
console.log(n);

