const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for(const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "cpp", "rb", "java", "py"];

for(const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");

for(const key in map) {
    // console.log(key); //will not print anything as it is not iterable
}