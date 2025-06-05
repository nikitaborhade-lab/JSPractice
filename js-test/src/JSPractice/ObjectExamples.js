// find keys of object

const obj = { a: '1', b: '2', c: '3', d: '4'}
const obj1 = Object.keys(obj);
console.log(obj1);

// count keys of object
const obj1 = Object.keys(obj).length;

// swap key and value of object

const obj = { a: '1', b: '2', c: '3', d: '4'};
const value = {};

for(let i in obj){
    value[obj[i]] = i;
}
console.log(value);

// check if key exist

const obj = { a: '1', b: '2', c: '3', d: '4'};
// console.log("a" in obj)
const test = obj.hasOwnProperty("d");
console.log(test);

// find largest key from object

const obj = { a: '1', b: '2', c: '3', d: '4'};
let largest = 0;
let maxkey = null;

for(let i in obj){
    if(obj[i]>largest){
        largest = obj[i];
        maxkey = i;
    }
}
console.log(maxkey);


// find most occured name from array of object

const people = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Alice' },
  { name: 'Charlie' },
  { name: 'Bob' },
  { name: 'Bob' }
];
let exists = {}
let max = 0;
let maxkey = null;

for(let i of people){
    if(exists[i.name]){
        exists[i.name] += 1
    }else{
        exists[i.name] = 1
    }
    
    if(exists[i.name]> max){
        max = exists[i.name]
        maxkey = i.name 
    }
}
console.log(maxkey)
