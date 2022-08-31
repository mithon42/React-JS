
// function sum (a, b){
//   return a + b
// }

// function sub (a, b){
//   return a - b
// }

// function times (a, b){
//   return a * b
// }

// const a = 10
// const b = 20

// const r = Math.abs(times(sum(a, b), sub(a, b)))
// console.log(r);



// Function is a first class citizen
// We can treat function as value
// 10, 'test', true -> function

/**
 * Benefits:
 * - We can store function in a variable
 * - We can store function inside an Object / Array
 * - We can pass function as an argument
 * - We can also return a function from another function
*/


// Prove -> Function is a value
// function testFunction(){
//   console.log('I am a Test Function');
// }

// const fn = testFunction
// console.log(fn);
// fn()

// const ar = [fn, testFunction]
// const ob = {
//   fn, testFunction
// }

// function returnFn(){
//   return testFunction
// }






// Let's Construct a Function
// new Function()

// function strToObj(str) {
//   let obj = {}
//   for (let s of str){
//     if(s !== ' '){
//       obj[s] = s
//     }
//   }
//   return obj
// }
// console.log(strToObj('Mithon Islam'));


// const fn = new Function(
//   'str',
//   `let obj = {}
//   for (let s of str){
//     if(s !== ' '){
//       obj[s] = s
//     }
//   }
//   return obj`
// )

// console.log(fn('Mithon Islam'));


// const fData = {
//   params: ['a', 'b'],
//   body: [
//     'const r = a+b',
//     'return r'
//   ]
// }

// const fBody = fData.body.reduce((acc, cur) => {
//   acc += cur + '; ';
//   return acc
// }, '')

// const tf = new Function(...fData.params, fBody)
// console.log(tf(100, 200));






const greetFn = new Function(
  'name',
  'email',
  `
  const fName = name.split(' ')[0];
  console.log("Hello,", fName, "Is that your email?", email)
  console.log("Yeah, this is mine")
  return fName
  `
)
console.log(typeof greetFn);
console.log(greetFn.__proto__);
console.log(greetFn.toString());
const fName = greetFn('likhon', 'ex@gmail.com')
console.log('First Name', fName);


function starBox(n){
  for(let i = 0; i < n; i++){
    let line = '';
    for(let j = 0; j < n; j++){
      line += '* ';
    }
    console.log(line);
  }
}
starBox(6)