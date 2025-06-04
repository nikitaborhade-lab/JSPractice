// Convert array into object 

const arr = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];
const obj = {};

for(let i in arr){
    const [key, value] = arr[i];
    obj[key] = value
}
console.log(obj);
