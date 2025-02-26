function reverse(arr, n) {
        let start = 0;
        let end = arr.length - 1;
        while(start < end) {
            [arr[start], arr[end]]  = [arr[end], arr[start]];
            start++;
            end--;
        }
        return arr;

}

const arr = [78, 56, 89];

console.log(reverse(arr, 3));