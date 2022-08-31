// Function: Sleep
// Param: name
// Definition: How to sleep

function sleep(name){
  console.log(`${name} is sleeping`);
}


// Function: Awake
// Param: name
// Definition: How to Awake

function awake(name){
  console.log(`${name} is Awake`);
}


// Function: Eat
// Param: name
// Param: Time
// Definition: How to Eat

function eit(name, time){
  console.log(`${name} is taking ${time}`);
}


// Function: Walk
// Param: name
// Param: Destination
// Definition: How to Walk

function walk(name, destination){
  console.log(`${name} is Walking to ${destination}`);
}


// Function: Study
// Param: name
// Definition: How to Study

function study(name){
  console.log(`${name} is Studying`);
}



// Function: Work
// Param: name
// Definition: How to Work

function work(name){
  console.log(`${name} is Working`);
}


function jobHolderLifecycle(name){
  awake(name)
  eit(name, 'Breakfast')
  walk(name, 'Office')
  work(name)
  eit(name, 'Lunch')
  walk(name, 'Home')
  eit(name, 'Dinner')
  sleep(name)
}

jobHolderLifecycle('Mithon Islam')
console.log('-------');
jobHolderLifecycle('Likhon Hossen')
console.log('-------');
jobHolderLifecycle('Roby Friend')
console.log('-------');
jobHolderLifecycle('Badsha Friend')
console.log('-------');


/**
 * Function: Student_Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'Breakfast'
 * - Study -> name
 * - Eat -> name 'Lunch'
 * - Study -> name
 * - Eat -> name 'Dinner'
 * - Sleep -> name
*/
function Student_Lifecycle(name){
  awake(name)
  eit(name, 'Breakfast')
  study(name)
  eit(name, 'Lunch')
  study(name)
  eit(name, 'Dinner')
  sleep(name)
}

Student_Lifecycle('Ariful')
console.log('-------');
Student_Lifecycle('Tamim')
console.log('-------');
Student_Lifecycle('Arina')
console.log('-------');


/**
 * Student_lifecycle -> "Mithon"
 * Student_lifecycle -> "Mamaun"
*/



function name_of_the_function(/** Input Something */){
  // Function Body
  // You can write any valid js code here

  // return a result
}

// There are two steps
// - Define a function
// - Invoke a function


// function testFunction(a, b){
//   const result = a + b + Math.max(a, b)

//   console.log(result);
// }

// testFunction(10, 20)