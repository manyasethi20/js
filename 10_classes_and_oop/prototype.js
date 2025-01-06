let myName = "Manya     "
let myChannel = "thereitis     "

console.log(myName.truelength)

let myHeroes = ["Thor", "Spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.manya = function() {
    console.log(`manya is present in all objects`)
}

Array.prototype.heyManya = function() {
    console.log(`Manya says hello`)
}

//heroPower.manya()
// myHeroes.manya()
// myHeroes.heyManya()
// heroPower.heyManya()

//inheritance

const User = {
    name: 'meow',
    email: 'meow@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'ChaiAurCode      '

String.prototype.trueLength = function() {
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is ${this.trim().length}`)
}

anotherUsername.trueLength()
"manya".trueLength()
"manyaSethi".trueLength()