// var c = 300 // global scope
let a = 3

if(true) {       //if is the block scope
    let a = 10
    const b = 20
    // var c = 30

    // console.log("Inner:", a)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const username = "Manya"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) //error
    two()
}
// one()


if (true) {
    const username = "Manya"
    if (username === "Manya") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website) //error
}
// console.log(username) //error

// +++++++++++++++++++ interesting ++++++++++++++++++
console.log(addone(5))
function addone(num) {
    return num + 1
}

const addtwo = function(num) {
    return num + 2
}
addtwo(2)