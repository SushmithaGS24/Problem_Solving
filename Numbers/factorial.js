

function factorial (n) {
    if(n === 0 || n===1){
        return 1;
    }
    let result = 1;
    for(let i=1;i<=n;i++){
        result = result*i;
    }
    return result;


}

console.log(factorial(3));

s