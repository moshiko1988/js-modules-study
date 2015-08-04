#Introduction to Node.JS and Modules

#Introducing Node
##What is Node?
Node is JavaScript outside of the browser. Specifically, it's Google Chrome's
JavaScript engine outside of the browser with evented I/O.

As a starting point, here's the package description from the Ubuntu package
repository:

>Node.js is a platform built on Chrome's JavaScript runtime for easily
>building fast, scalable network applications. Node.js uses an
>event-driven, non-blocking I/O model that makes it lightweight and
>efficient, perfect for data-intensive real-time applications that run
>across distributed devices.

###What do those other words mean?
**I/O** is an umbrella term for operations that read or write data from or to a
device or other resource, usually other than system memory.

Examples of I/O: reading from and writing to files, querying a database,
accessing a remote resource over a network.

**Evented** refers to a paradigm that will deeply characterize your experience
writing code for Node. This means that you interact with a functionality by
listening for events and supplying handlers for them, as opposed to waiting for
tasks to complete so that you can run your desired code afterward.

**Non-blocking** has to do with how a busy resource impacts your code's
execution. Under a blocking model, if you want to access a resource that is
unavailable, your code waits for it to become available before continuing to
run. Under a non-blocking model, you launch your task, proceed to execute
other, unrelated code, and let it get back to you once it's done.

###Why use Node?
This is where the two above sections come together.

A performance problem in many types of applications that can't be solved by
using a fast compiled language or more efficient algorithms to process data is
time lost waiting.

Some operations are unsafe when done concurrently by two different processes.
To solve this problem, the resource is **locked** by the process that finds it
available first, and the one that tries to access it second, third, or last must
wait for it to become available again.

If we were using synchronous I/O, our code would sit, stalled, racking up
second spent **blocking** while that resource remains locked by another
process. Node saves us this time through its evented, non-blocking I/O model,
letting us schedule a task to be done with the resource once it frees up, and
execute other code in the meantime.

###What's the catch?
You didn't think you were getting all that for free, did you?

In exchange for that performance benefit, we pay a price in how we develop for
Node. Our development paradigm resembles that of attaching event listeners
to front-end HTML elements, which are then executed in an unpredictable order
based on events that are outside our control. More on this later.


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
###Bare bones
A undressed, unembellished, inline module:

	var module = (function(arg, transform) {
		// secret internals
		var value = arg;
	
		// exports
		return function() {
			// has access to secret internals!
			value = transform(value);
	
			return value;
		};
	})(something);

From outside, we can't access the variable `value` inside the module. This is
the hiding bit we were talking about. However, we do get a return value, which
is a function in this case. It can just as easily be an array or an object
with many properties. Note that the function we built inside the module has
access to the `value` variable even after being exported.

####What in the hell is that creature?
We'll demystify what we saw above by observing a gradual transition.

![Gradual transition](/img/gradual_transformation.jpg "Gradual transition")

Detour: [exercise 1](https://github.com/ga-wdi-boston/wdi-js-module-inline)

###Node modules, aka CommonJS
Node modules are your principal means of including external libraries, core
libraries, and other files you've written to be part of the same application.
Creating and using node modules is straightforward and imposes little on you.

Detour: [exercise 2](https://github.com/ga-wdi-boston/wdi-node-modules-commonjs)

##NPM and installing Node modules
NPM is a package management application for our Node modules. It provides
many useful facilities, some of which we'll see today.

1. Searching: `npm search cors` will search for packages containing 'cors' in
their name or description.
2. Installing: `npm install cors --save` will install the cors package and
register it in your `package.json` file.
3. Removing: `npm remove cors` will remove the package from disk and your
`package.json` file.

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

#Demo
#Unstructured code-along
Topics to hit:
* Importing modules
* Filesystem access (`fs`)
* Organizing project files
