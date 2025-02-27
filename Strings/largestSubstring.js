
 function largeOddNum(s) {
        let str = '';
        let str1=''
        for(let i=s.length-1; i>=0; i--){
            if(parseInt(s[i]) % 2 !== 0){
                str = s.substring(0, i+1);
                break;
            }
        }
        let leadingzeros = true;
        for(let i = 0; i<str.length; i++){
            if(str[i] !== '0' || !leadingzeros){
                //console.log(str[i]);
                leadingzeros = false;
                str1+= str[i];
                //console.log(str1);
            }
        }
        return str1;
        
    }

    console.log(largeOddNum("07898"));
    