[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Study: Modules in Node and JavaScript

## Modules

Modules are valuable to our ability to organize our code on several levels.
You're already familiar with modular code from Ruby, where your application code
was split into many files, which were all executed as part of one process.

### Interfaces

Modules let us choose what we expose. The module patterns we will explore all
have this in common. This is the core purpose of a module. It allows you to hide
details that are not necessary for a user to know, such as implementation
details and module internals that are best left to their own devices.

The other side of this coin is that it also lets us expose a collection of
properties and methods called an **interface**. This is the part of the
libraries we use that we can see. We often call this an API, short for
*application programmable interface*.

### Abstraction

By writing a module to fulfill a purpose, we save ourselves the trouble of
doing those tasks directly elsewhere in our code where we need it. It allows
us to write simple code using the module's interface that is more easily
checked for correctness.

### Simplification

Modules (usually) spare you the trouble of having to read someone else's
code in order to use it. If we are given good documentation for the exposed
interface, we never have to read how they implemented it, provided it is
working as intended.

## Module Patterns

### Constructor Pattern

```js
function ModuleFactory(args) {
  let variable = someTransformationOf(args);

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

let ourModule = ModuleFactory(someArgs);
// How would you use the getter and setter methods? What would they do?
```

### IIFEs

A undressed, unembellished, inline module:

```js
let ourModule = (function(arg, transform) {
  // secret internals
  let value = arg;

  // exports
  return function() {
    // has access to secret internals!
    value = transform(value);

    return value;
  };
})(someValue, someFunction);

// How would you use ourModule?
```

From outside, we can't access the variable `value` inside the module. This is
the hiding bit we were talking about. However, we do get a return value, which
is a function in this case. It can just as easily be an array or an object
with many properties. Note that the function we built inside the module has
access to the `value` variable even after being exported.

## Lab: Exploring Inline Modules in JavaScript

Here, we will build an inline module like the following step-by-step:

```js
var ourModule = (function(arg, transform) {
  // secret internals
  var value = arg;

  // exports
  return function() {
    // has access to secret internals!
    value = transform(value);

    return value;
  };
})(something);
```

### Checkpoint 0

1.  Open `index.js`.
1.  Read the code in detail and attempt to understand the intent.
1.  Leave `f` as-is or alter it to create a more interesting module.
1.  Leave the statements toward the end of the document as-is or alter them to
    do something more interesting.
1.  Run the script with `npm start` or `node index.js`.

### Checkpoint 1

1.  Open `index.js`.
1.  Put a pair of parens (`(` and `)`) around our declaration of `f`.

    Recall that the function declaration begins with the keyword `function` and
    ends with the closing curly brace (`}`) following the function body. Your
    opening paren belongs before the letter 'f' in `function` and your closing
    paren belongs after `}`.

1.  Run the script again. Observe that this makes no actual change in what the
    code does. Surrounding a value with parens does nothing to change it.

### Checkpoint 2

Since we named our function `f`, we know that the `f` being called where we
define `ourModule` is the same function, right? We can replace `f` with the
actual function declaration, then, and it'll be the same, won't it?

1.  Copy the declaration of `f` in `index.js`, with the parens that surround it.
1.  Substitute the declaration you copied for `f` in the line where we declare
    and define the variable `ourModule`.
1.  Remove the declaration of `f` from the lines above our declaration of
    `ourModule`.
1.  Run the script again and observe any difference in the result.

### Checkpoint 3

Compare the code you've created and compare it to the code at the beginning of
this section.

## Lab: Exploring Modules in Node (CommonJS Standard)

Node modules are your principal means of including external libraries, core
libraries, and other files you've written to be part of the same application.
Creating and using node modules is straightforward and imposes little on you.

Use `module.js` to build your module. The comments will light the way. Use
`index.js` to load up `module.js` and utilize it. Run `index.js`.

### Notes

`require` is a function provided to you in the global namespace under Node. It
is used for loading a module for use in the current script or module. It takes a
string and returns a module.

Initially, your module will have two names for one object: `module.exports` and
`exports`. By convention, and for practical reasons, exporting is done one of
two ways:

1.  Assigning properties to `exports`: `exports.property = value;`
1.  Overwriting `module.exports`: `module.exports = {}`

The reasons why are detailed in the comments in `module.js`.

## Comparing Node Modules with Inline Modules

While the two module patterns we worked through above are different in
appearance, they are the same in functionality. Some module libraries, in
fact, use the inline module pattern above to modularize scripts.

While they are similar insofar as making and exposing a module goes, CommonJS
stands apart by also managing modules in a node application. CommonJS modules
are **singletons**, which means that they are only loaded once by `require`.

This presents the benefit of modifying `require`d modules in one file, and
having the changed module in other files that use it.
