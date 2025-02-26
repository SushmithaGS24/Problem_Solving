
// function isSorted(arr, n){

//     const org = [...arr];
//     arr.sort((a,b)=>a-b);
//     return org.every((value,index) => value === arr[index]);
// }


function isSorted(arr, n){
    for(let i=1;i<=n;i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;

}

const arr = [ 1,2,,4,5];
console.log(isSorted(arr, 5));