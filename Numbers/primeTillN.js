
function isPrime(n) {

    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;

}

function primetillN(n) {
    let count = 0;
    let arr = [];

    for(let i = 2;i<=n;i++){
        if(isPrime(i)){
            arr.push(i);
            count ++;
        }
    }
    return { count, arr } ;
}


console.log(primetillN(10));
