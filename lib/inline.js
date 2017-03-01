'use strict';

// we want to do some work in this function
// then return a module from it
const incrementX = function (initialValue) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `incrementor` will have access to variables in this scope, such as `a`
  const incrementor = function () {
    return ` There were ${a--} in the bed,

 And the little one said ‘roll over, roll over’,

So they all rolled over and one fell out.`;
  };

  // return the function so we can access it from outside
  return incrementor;
};

// we want to store our generated module in `countFromZero`
// `countFromZero` now contains `incrementor` from inside `incrementX`!
let countFromZero = incrementX(10);

// from here, use the module you've created
for (let index = 10; index > 0; index--) {
  let messageToBeLogged = countFromZero();
  console.log(messageToBeLogged);
}
