// const userEmail = "m@gmail.com" //true
// const userEmail = "" //false
const userEmail = [] //true

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Do not have user email");
}

//false values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}

// if(userEmail.len == 0) {
//     console.log("Array is empty")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length == 0) {
    console.log("Object is empty")
}

//console
//false == 0 //true
//false == '' //true
//true == 0 //true

//Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? undefined ?? 20

console.log(val1)

//Ternary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
