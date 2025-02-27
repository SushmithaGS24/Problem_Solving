
function rotateString(s, goal) {
    if(s.length !== goal.length){
        return false;
    }
    for(let i = 0; i<goal.length;i++){
        const rotate = s.substring(i) + s.substring(0,i);
        if(rotate === goal){
            return true;
        }
    }
    return false;
   
}

const s = "apple";
const goal = "ppela"
console.log(rotateString(s, goal));