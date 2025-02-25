

function perfectNumber (n) {

    const arr = [];
    for(let i =1;i<=n/2;i++){
        if(n%i === 0){
            arr.push(i);

        }
    }

    const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum === n;

}

console.log(perfectNumber(9));


