'use strict';

// we want to do some work in this function
// then return a module from it
// we want to store our generated module in `module`
const myModule = (function f(initialValue) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `g` will have access to variables in this scope, such as `a`
  function g() {
    return a++;
  }

  // return the function so we can access it from outside
  return g;
})(0); // `myModule` now contains `g` from inside `f`!

// we want to store our generated module in `ourModule`
// const ourModule = f(0); // `ourModule` now contains `g` from inside `f`!

// from here, use the module you've created
for (let index = 0; index < 10; index++) {
  let messageToBeLogged = myModule();
  console.log(messageToBeLogged);
}
