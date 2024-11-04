//Primitive (call by value (a copy is made))

//7 types: string, Number, boolean, bigint, null, undefined, symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

// const bigNumber = 42543737685984674n

//JS is a dynamically typed language e.g. const score = 100 here we did not not defined that it is a number

//reference (Non-Primitive)

//Array, objects, functions
const heros = ['shaktiman', 'naagraj', 'doga']

let myObj = {
    name: "Manya",
    age: 18
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber)