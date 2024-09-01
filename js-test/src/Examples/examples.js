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

// callback
function message(){
    console.log("callback function");
}

setTimeout(()=>{
    message()
},1000);
// ---------------------------------------------------------

// Fetch()
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>console.log(data))
// ---------------------------------------------------------

// axios
axios('https://jsonplaceholder.typicode.com/posts')
.then(response=> console.log(response))
// ---------------------------------------------------------

// slice
let arr = [5,6,7,2,9,1]

const test = arr.slice(3,5);
console.log(test)
// ---------------------------------------------------------

// splice
let arr = [5,6,7,2,9,1]
// remove elements
arr.splice(3,3);
console.log(arr); 

// add elements - here 8 will get add at index 2 and 0 element will remove
arr.splice(2,0,8) 
console.log(arr);

// replace element - here 1 index and 1 element will be replaced with 0S
arr.splice(1,1,0) 
console.log(arr);
// ---------------------------------------------------------

let arr = [1,2,3,4,5,6];

// map
let sample = arr.map((x)=>x*2);
console.log(sample)

// filter
let sample1 = arr.filter((x)=>x%2===0)
console.log(sample1)

// reduce
let sample2 = arr.reduce((result,number)=> result = result+number)
console.log(sample2)
// ----------------------------------------------------------

// callback hell
setTimeout(()=>{
    console.log("first")
    setTimeout(()=>{
        console.log("second")
        function test(){
            console.log("third")
            setTimeout(()=>{
                console.log("four")
                    setTimeout(()=>{
                console.log("five")
            },3000)
            },2000)
        }
        test();
    },1000)
},500)
// ----------------------------------------------------------

// call, apply, bind
obj = {
    name: "Nikita",
    age: 27
};

function message(town){
    console.log(`My name is ${this.name} and my age is ${this.age} I live in ${town}`);
};

message.call(obj);
message.apply(obj,["Pune"]);
const sample = message.bind(obj,"Pune");
sample();

// ----------------------------------------------------------

// ways to create object
// Object Literal
obj = {
    name: "test",
    age: 10
}

obj1 = {
    town: "Pune"
}

console.log(obj.name, obj.age)

// Object.create
const sample = Object.create(obj)
console.log(sample.name, sample.age)

// Object.assign
const test = Object.assign({},obj,obj1)
console.log(test)

// Using new keyword
function Person(name,age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Nikita', 28);

console.log(person1.name);
console.log(person1.age); 
// ----------------------------------------------------------

// ways to create array
// array literal
let arr = [1,2,3,4,5]
console.log(arr)

// using new keyword and Array constructor
let arr1 = new Array(6,7,8,9,10)
console.log(arr1)

// Array.from()
let arr2 = Array.from('nikita')
console.log(arr2)

// using split()
let arr3 = "Sourabh";
console.log(arr3.split(""));

// Array.of
let arr4 = Array.of(5)
console.log(arr4)
// ----------------------------------------------------------

// array destructuring
let arr = [1,2,3,4,5];

const[a,b] = arr;
console.log(a,b);

// object destructuring
let obj = {
    name: "Nikita",
    age: 27
}

const{name,age} = obj;
console.log(name, age)
// ----------------------------------------------------------

// Generator function

function* sample(x){
    yield x;
    yield x*10;
    yield x*100;
}

const gen = sample(5);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
// ----------------------------------------------------------

// loops
let arr = [1,2,3,4,5];

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

let i=0;
while(i<arr.length){
console.log(arr[i])
    i++
}

let i=0;
do{
    console.log(arr[i])
    i++
}while(i<arr.length)

arr.forEach((a)=>{
    console.log(a*2);
})

for(let i in arr){
    console.log(arr[i])
}

for(let i of arr){
    console.log(i)
}
// ----------------------------------------------------------

// function currying
function test(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(test(2)(2)(2))

// ----------------------------------------------------------

// factory function
function person(name,age){
    return{
        name: name,
        age: age
    }
}

const person12 = person("nikita", 28);
console.log(person12.age)
// ----------------------------------------------------------
