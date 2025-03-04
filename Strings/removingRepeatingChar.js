function repeated (s) {

    const nonRepeated = new Set();
    let result = '';
    for(let char of s) {
        if(!nonRepeated.has(char)) {
            result += char;
            nonRepeated.add(char);
        }
    }
    return result;
}
console.log(repeated("banana")); 