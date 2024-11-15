function sayMyName()  {
    console.log("M")
    console.log("A")
    console.log("N")
    console.log("Y")
    console.log("A")
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    
    return number1 + number2;
}

const result = addTwoNumbers(3, 5)
// console.log("Result:", result)

function loginUserMessage(username = "Sam") {
    // if(username === undefined) {
    //     console.log("Please enter a username")
    //     return
    // }
    if(!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Manya"))
// console.log(loginUserMessage("Manya"))

function calculateCartPrice(val1, val2, ...num1) { //... is rest here
    return num1
}

// console.log(calculateCartPrice(200, 300, 390, 549))

const user = {
    username: "Manya",
    price: 200000000
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArr = [200, 400, 600, 800]

function returnSecondValue(getArray) {
    return getArray[2]
}

// console.log(returnSecondValue(myNewArr))
console.log(returnSecondValue([200, 300, 500, 400]))