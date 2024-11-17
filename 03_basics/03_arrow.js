const user = {
    username: "Manya", 
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     let username = "Manya"
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let username = "Manya"
    // console.log(this.username)
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2 //implicit return
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Manya"})

// console.log(addTwo(2, 5))

const myArray = [3, 4, 6, 2, 5]

myArray.forEach()