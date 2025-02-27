
function reverse(s){
    let arr = s.split('');

    let end = s.length - 1;
    let start = 0;
    while(start < end) {
        [arr[start], arr[end]] = [ arr[end], arr[start]];
        start++;
        end--;
    }
    return arr.join('');

}


console.log(reverse("hello"));

