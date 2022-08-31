
function name(){}
const myFn = function(){}
const myFatArray = () => {}

function sum(a, b){
  return a + b
}
console.log(sum(10, 20)); // 30

// Side effect
let limit = 100
function changeLimit(){
  limit = 5000
}
changeLimit(limit)