
 function sum(arr,n) {
    console.log(arr);
    let result = 0;
   for(let i =0;i<n;i++){
    result += arr[i];
    console.log(result);
     
   }
   return result;
 
}

const arr = [25,74,8];
console.log(sum(arr, 3));