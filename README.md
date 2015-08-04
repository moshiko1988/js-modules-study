#CommonJS modules

##General Directions
Use `module.js` to build your module. The comments will light the way.
Use `index.js` to load up `module.js` and utilize it.
Run `index.js`.

##Important topics
###`require`(string)
`require` is a function provided to you in the global namespace under Node.
It is used for loading a module for use in the current script or module.
It takes a string and returns a module.

###module.exports
Initially, your module will have two names for one object: `module.exports` and
`exports`. By convention, and for practical reasons, exporting is done one of
two ways:

1. Assigning properties to `exports`: `exports.property = value;`
2. Overwriting `module.exports`: `module.exports = {}`

The reasons why are detailed in the comments in `module.js`.
