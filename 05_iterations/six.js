// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values);

const myNumbs = [1, 2, 3, 4, ,5, 6, 7, 8, 9, 10]

// const newNumbs = myNumbs.filter((num) => {
//     return num > 4
// })

const newNumbs = []

myNumbs.forEach((num) => {
    if(num > 4) {
        newNumbs.push(num)
    }
})

console.log(newNumbs)