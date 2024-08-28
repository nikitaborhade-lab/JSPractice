// closure
function first(){
    let name = "Nikita";
    
    function second(){
        let age= 27
        console.log(name,age)
    }
    second();
}
first();
// ------------------------------------------------------------------------------

// Default parameter
function sample(a=2,b){
    return a*b;
}
console.log(sample(2))
// ------------------------------------------------------------------------------

// IIFE
(function sample(){
    console.log("IIFwwwwE");
})();
// ------------------------------------------------------------------------------