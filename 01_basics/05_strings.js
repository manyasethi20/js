const name = "Manya"
const repoCount = 50

// console.log(name + repoCount + "value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Manya-Sethi')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString)

const anotherString = gameName.slice(-11, 8)
// console.log(anotherString)

const newStringOne = "  Manya   "
// console.log(newStringOne)
// console.log(newStringOne.trim()) //remove extra spaces

const url = "https://manya.com/manya%20sethi"

console.log(url.replace("%20", "-"));
console.log(url.includes('neha'));
console.log(gameName.split('-'));

