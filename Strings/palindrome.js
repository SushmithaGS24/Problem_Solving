function palindrome(s) {
    let arr = s.split('');
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        if(arr[start] !== arr[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;

}


console.log(palindrome("haninah"));