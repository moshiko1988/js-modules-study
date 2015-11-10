#Module Exercise

Here, we will build an inline module like the following step-by-step:

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

This repository features a `solved` branch for future reference.

##Step 1
Once you've forked and cloned this repo, you're ready to start the exercise.

1. Open `index.js`.
2. Look at the code and ask questions if anything looks foreign.
3. Leave `f` as-is or alter it to create a more interesting module.
4. Leave the statements toward the end of the document as-is or alter them to
do something more interesting.
5. Run the script with `npm start` or `node index.js`.

##Step 2
1. Open `index.js`.
2. Put a pair of parens (`(` and `)`) around our declaration of `f`.

Recall that the function declaration begins with the keyword `function` and
ends with the closing curly brace (`}`) following the function body. Your
opening paren belongs before the letter 'f' in `function` and your closing paren
belongs after `}`.

3. Observe that this makes no actual change in what the code does. Surrounding a
value with parens does nothing to change it. Run the script again if you like.

##Step 3
Since we named our function `f`, we know that the `f` being called where we
define `ourModule` is the same function, right? We can replace `f` with the
actual function declaration, then, and it'll be the same, won't it?

1. Copy the declaration of `f` in `index.js`, with the parens that surround it.
2. Substitute the declaration you copied for `f` in the line where we declare
and define the variable `ourModule`.
3. Remove the declaration of `f` from the lines above our declaration of
`ourModule`.
4. Run the script again and observe any difference in the result.

##Step 4
1. Look at the code you've created to generate and store a module in `ourModule`.
2. Look at the code at the top of this page.
