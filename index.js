'use strict';

// we want to do some work in this function
// then return a module from it
function f(initialValue) {
	// declare some variables in here that will be hidden from outside
	var a = initialValue;

	// `g` will have access to variables in this scope, such as `a`
	function g() {
		return a++;
	}

	// return the function so we can access it from outside
	return g;
}

// we want to store our generated module in `module`
var module = f(0); // `module` now contains `g` from inside `f`!

// from here, use the module you've created
for(var index=0; index < 10; index++) {
	var messageToBeLogged = module();
	console.log(messageToBeLogged);
}
