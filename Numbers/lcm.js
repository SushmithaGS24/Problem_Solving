
function gcd(a,b) {

    while(b!== 0){
        [a, b] = [b, a%b];
    }

    return a;
}

function lcm(a, b) {

    return ((a*b)/gcd(a,b));
}

console.log(lcm(4,6));