
function longestCommonPrefix(str) {
        str.sort();
        let str2 = ''
        //console.log(str);
        const first = str[0];
        const last = str[str.length - 1];
        const min = Math.min(first.length, last.length);
        for(let i=0; i<min;i++){
            if(first[i] === last[i]) {
              str2+= first[i];
            } else {
                break;
            }
           
        }
         return str2;

              

        }

const str = ["apple","apgo","apdf","appl"];

console.log(longestCommonPrefix(str));

    



    
