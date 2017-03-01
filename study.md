# Study: Modules in Node and JavaScript

Modules are valuable to our ability to organize our code on several levels.
You're already familiar with modular code from Ruby and from using the
browser-template, where your application code was split into many files, which
were all executed as part of one process.

## Objectives
- Explain the advantages of having modular code.
- Write an inline module.
- Write a module that is exported to another file.

## Interfaces

Modules let us choose what we expose. The module patterns we will explore all
have this in common. This is the core purpose of a module. It allows you to hide
details that are not necessary for a user to know, such as implementation
details and module internals that are best left to their own devices.

The other side of this coin is that it also lets us expose a collection of
properties and methods called an **interface**. This is the part of the
libraries we use that we can see. We often call this an API, short for
*application programmable interface*.

## Abstraction

By writing a module to fulfill a purpose, we save ourselves the trouble of
doing those tasks directly elsewhere in our code where we need it. It allows
us to write simple code using the module's interface that is more easily
checked for correctness.

## Simplification

Modules (usually) spare you the trouble of having to read someone else's
code in order to use it. If we are given good documentation for the exposed
interface, we never have to read how they implemented it, provided it is
working as intended.

## Module Patterns

Study the following example patterns. They are intentionally ambiguous in order
to highlight the general application of the pattern. Studying these patterns
should get you warmed-up for completing the labs that follow.

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

let myModule = ModuleFactory(someArgs);
// How would you use the getter and setter methods? What would they do?
```

### IIFEs

A undressed, unembellished, inline module:

```js
let myModule = (function(arg, transform) {
  // secret internals
  let value = arg;

  // exports
  return function() {
    // has access to secret internals!
    value = transform(value);

    return value;
  };
})(someValue, someFunction);

// How would you use myModule?
```

From outside, we can't access the variable `value` inside the module. This is
the hiding bit we were talking about. However, we do get a return value, which
is a function in this case. It can just as easily be an array or an object
with many properties. Note that the function we built inside the module has
access to the `value` variable even after being exported.

## Lab: Exploring Inline Modules in JavaScript

Here, we will build an inline module like the following step-by-step:

```js
var myModule = (function(arg, transform) {
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

1.  Open [`lib/inline.js`](lib/inline.js).
1.  Read the code in detail and attempt to understand the intent.
1.  Leave `f` as-is or alter it to create a more interesting module.
1.  Leave the statements toward the end of the document as-is or alter them to
    do something more interesting.
1.  Run the script with `node inline.js`.

### Checkpoint 1

1.  Open [`lib/inline.js`](lib/inline.js).
1.  Put a pair of parens (`(` and `)`) around the function assigned to `f`.

    Recall that the function expression begins with the keyword `function` and
    ends with the closing curly brace (`}`) following the function body. Your
    opening paren belongs before the letter 'f' in `function` and your closing
    paren belongs after `}`.
1.  Run the script again. Observe that this makes no actual change in what the
    code does. Surrounding a value with parens does nothing to change it.

### Checkpoint 2

Since we named our function `f`, we know that the `f` being called where we
define `myModule` is the same function, right? We can replace `f` with the
actual function expression, then, and it'll be the same, won't it?

1.  Copy the declaration of `f` in [`lib/inline.js`](lib/inline.js), with the
    parens that surround it.
1.  Substitute the declaration you copied for `f` in the line where we declare
    and define the variable `myModule`.
1.  Remove the declaration of `f` from the lines above our declaration of
    `myModule`.
1.  Run the script again and observe any difference in the result.

### Checkpoint 3

Compare the code you've created and compare it to the code at the beginning of
this section.

## Lab: Exploring Modules in Node (CommonJS Standard)

Node modules are your principal means of including external libraries, core
libraries, and other files you've written to be part of the same application.
Creating and using node modules is straightforward and imposes little on you.

Use `common.js` to build your module. The comments will light the way. Use
`index.js` to load up `common.js` and utilize it. Run `index.js`.

### Notes

`require` is a function provided to you in the global namespace under Node. It
is used for loading a module for use in the current script or module. It takes a
string and returns a module.

Initially, your module will have two names for one object: `module.exports` and
`exports`. By convention, and for practical reasons, exporting is done one of
two ways:

1.  Assigning properties to `exports`: `exports.property = value;`
1.  Overwriting `module.exports`: `module.exports = {}`

The reasons why are detailed in the comments in `common.js`.

## Comparing Node Modules with Inline Modules

While the two module patterns we worked through above are different in
appearance, they are the same in functionality. Some module libraries, in
fact, use the inline module pattern above to modularize scripts.

While they are similar insofar as making and exposing a module goes, CommonJS
stands apart by also managing modules in a node application. CommonJS modules
are **singletons**, which means that they are only loaded once by `require`.

This presents the benefit of modifying `require`d modules in one file, and
having the changed module in other files that use it.

## Response

Open a pull request with your response. It should include the changes you made
during your lab exercises.
