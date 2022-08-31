
// const arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }


const chanel = 'BD Programmer';
const chanelIterator = chanel[Symbol.iterator]();

// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());
// console.log(chanelIterator.next());


for(let v of chanel){
  console.log(v);
}
