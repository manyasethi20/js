//singleton
// Object.create // known as constructor method

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Manya",
    "full name": "Manya Sethi",
    [mySym]: "mykey1",
    age: 18,
    location: "Solan",
    email: "manya@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "manya@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "manya@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello Js user")
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())