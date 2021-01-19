## Closure
- a nested function that accesses variables from the outer function

## Callback

- is an argument that is a function

Does not have to be an arrow function
Will sometimes be an anonymous function

## Promises

- for organizing asynchronous code
- the solve the problem of "callback HELL"
    - aka working with deeply nested callback function

Practically speaking, the best thing to do is use async and await

- it's an object
- with a .then() fn
    - pass it a callback fn
- and it has a .catch() fn

- it's an object 
- it exists in one of three states
    - pending
    - fulfilled
    - rejected


### How do I wait for a bunch of Promises to finish?

Use `Promise.all()`, which will "await" for an Array of Promises to finish.




When you call fetch() it returns a promise.
A promise is then awaitable