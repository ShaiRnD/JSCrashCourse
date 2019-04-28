// riddle: make this work
const ans = add(1)(2);
console.log(ans);// 3

function add(a){
    return (b => a + b);
};