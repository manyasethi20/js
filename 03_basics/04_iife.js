//immediately invoked function expression (IIFE)

(function chai() {
    //named IIFE
    console.log(`DB connected`)
})();

( (name) => {
    console.log(`DB connected two ${name}`)
}
)("MANYA"); //first one is for definition and second for function call

( function aurcode() {
    console.log(`DB connected two`)
    }
)()