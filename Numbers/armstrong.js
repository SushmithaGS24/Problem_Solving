function isArmstrong(n) {
    let org = n;
    let rem = 0;
    let result = 0;
    const count = Math.floor(Math.log10(n))+1;

    
    // Extract digits and store them in reverse order
    while (n > 0) {
        rem = n % 10;
        result+= rem ** count;
       
        n = Math.floor(n / 10);
    }

    if(org ==+ result){
        return true;
    }
    else {
        return false;
    }


   
}

console.log(isArmstrong(153));