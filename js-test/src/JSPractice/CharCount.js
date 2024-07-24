export default function CharCount(){
const str = "banana";
let exists = { }
for(let i=0; i<= str.length-1; i++){
    if(exists[str[i]]){
        exists[str[i]] += 1
    }else{
        exists[str[i]] = 1
    }
}
console.log(exists);
}