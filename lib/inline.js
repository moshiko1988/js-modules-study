'use strict';

// we want to do some work in this function
// then return a module from it
const incrementX = (function (initialValue) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `incrementor` will have access to variables in this scope, such as `a`
  const incrementor = function () {
    return a++;
  };

  // return the function so we can access it from outside
  return incrementor;
});

// we want to store our generated module in `countFromZero`
// `countFromZero` now contains `incrementor` from inside `incrementX`!
let countFromZero = incrementX(0);

// from here, use the module you've created
for (let index = 0; index < 10; index++) {
  let messageToBeLogged = countFromZero();
  console.log(messageToBeLogged);
}
