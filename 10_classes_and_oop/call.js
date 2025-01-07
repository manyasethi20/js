function SetUsername(username) {
    //Complex database calls
    this.username = username
}

function createUser(username, email, password) {
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const set = new createUser("manya", "manya@fb.com", "123")
console.log(set)