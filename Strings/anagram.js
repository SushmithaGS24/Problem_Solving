
function anagramStrings(s, t) {
    const str1 = s.split('').sort().join('');
     const str2 = t.split('').sort().join('');
     return str1 === str2;
}

const s = "anagram";
const t = "nagaram"

console.log(anagramStrings(s, t))