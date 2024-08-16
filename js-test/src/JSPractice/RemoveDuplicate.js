export default function RemoveDuplicate(){
let arr = [2,2,3,1,1,4,4,5,6,7,8,8];
// let newArr = new Set(arr);
let newArr = arr.filter((item,index)=>{
    return arr.indexOf(item) === index
})
console.log(newArr);
}