const { match } = require("assert");

let count = 5;
let n = count;
let str = ''
for (let i = 0; i < count; i++) {
    n--
    for (let j = 0; j < count; j++) {
        if (j >= n) {
            str += '*' 
        }else{
            str += '_' 
        }
        if (j <= n) {
            str += '*' 
        }else{
            str += '_' 
        }
    }
    str += '\n'
    
}

console.log(str);