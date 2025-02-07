
function gcd(a, b){
    let min = a<b ? a : b;
    while(min >0){
        if(a%min === 0 && b%min === 0){
            return min;
        }
        min --;
    }
    return min;
}

console.log(gcd(4,6));