function nonRepeating(s) {

const charCount = {};
let nonrepeating = [];


for(let char of s){
    charCount[char] = (charCount[char] || 0) + 1;
}

for(let char of s) {
    if (charCount[char] === 1) {
        nonrepeating.push(char);
    }
}

return nonrepeating.length === 0 ? null : nonrepeating;

}

console.log(nonRepeating("hheell"));