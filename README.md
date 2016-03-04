[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Study: Modules in Node and JavaScript

#Modules
Now, on modules. Modules are valuable to our ability to organize our code on
several levels. You're already familiar with modular code from Ruby, where your
application code was split into many files, which were all executed as part of
one process.

##What do modules do?
###Modules let us choose what we expose
The module patterns we will learn and explore in this lesson have this in
common. This is the core purpose of a module. It allows you to hide
details that are not necessary for a user to know, such as implementation
details and module internals that are best left to their own devices.

The other side of this coin is that it also lets us expose a collection of
properties and methods called an **interface**. This is the part of the
libraries we use that we can see. We often call this an API, short for
*application programmable interface*.

###Modules facilitate abstraction
By writing a module to fulfill a purpose, we save ourselves the trouble of
doing those tasks directly elsewhere in our code where we need it. It allows
us to write simple code using the module's interface that is more easily
checked for correctness.

###Modules simplify working with other people's code
Modules (usually) spare you the trouble of having to read someone else's
code in order to use it. If we are given good documentation for the exposed
interface, we never have to read how they implemented it, provided it is
working as intended.

##Module patterns
###Module constructor pattern
	function ModuleFactory(args) {
		var variable = someTransformationOf(args);

		return {
			property : value,
			getterMethod : function() {
				// has access to `variable` above
				return variable;
			},
			setterMethod : function(value) {
				// has access to `variable` above
				variable = value;
			}
		};
	}

	var ourModule = ModuleFactory(someArgs);

###Module returned from an IIFE
A undressed, unembellished, inline module:

	var ourModule = (function(arg, transform) {
		// secret internals
		var value = arg;

		// exports
		return function() {
			// has access to secret internals!
			value = transform(value);

			return value;
		};
	})(someValue, someFunction);

From outside, we can't access the variable `value` inside the module. This is
the hiding bit we were talking about. However, we do get a return value, which
is a function in this case. It can just as easily be an array or an object
with many properties. Note that the function we built inside the module has
access to the `value` variable even after being exported.

####What in the hell is that creature?
We'll demystify what we saw above by observing a gradual transition.

![Gradual transition](/img/gradual_transformation.jpg "Gradual transition")

Detour: [exercise 1](https://github.com/ga-wdi-boston/js-module-inline-lab)

###Node modules, aka CommonJS
Node modules are your principal means of including external libraries, core
libraries, and other files you've written to be part of the same application.
Creating and using node modules is straightforward and imposes little on you.

Detour: [exercise 2](https://github.com/ga-wdi-boston/node-modules-commonjs-lab)

##NPM and installing Node modules
NPM is a package management application for our Node modules. It provides
many useful facilities, some of which we'll see today.

1. Searching: `npm search cors` will search for packages containing 'cors' in
any field that describes them.
2. Installing: `npm install cors --save` will install the cors package and
register it in your `package.json` file.
3. Removing: `npm remove cors` will remove the package from your project directory.

NPM is also useful as a script runner; when we used `npm start` earlier, we were
using it to run a script called 'start' written in our `package.json` file.

##Using Node modules
While the two module patterns we worked through above are different in
appearance, they are the same in functionality. Some module libraries, in
fact, use the inline module pattern above to modularize scripts.

While they are similar insofar as making and exposing a module goes, CommonJS
stands apart by also managing modules in a node application. CommonJS modules
are **singletons**, which means that they are only loaded once by `require`.

This presents the benefit of modifying `require`d modules in one file, and
having the changed module in other files that use it.

#Demos
Topics to hit:

1. Importing modules
2. Singleton demonstration
3. Factory demonstration
4. Organizing project files
