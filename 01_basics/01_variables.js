const accountId = 54399250
let accountEmail = "manya@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2

accountEmail = "abc@gmail.com"
accountPassword = "2145326"
accountCity = "Bengaluru"

console.log(accountId)

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])