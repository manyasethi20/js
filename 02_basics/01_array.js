//array

const myArr = [0, 1, 2, 3, 4]
const myheroes = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(2, 3, 5, 6, 7)
// console.log(myArr[0]);

// Array methods

// myArr.push(5)
// myArr.push(6)
// myArr.pop() //removes the last element

// myArr.unshift(3) //insert the element in the start
// myArr.shift() //removes the first element

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof newArr)
// console.log(newArr)

//spice, splice

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C", myArr)