let arr = [1,2,1,2,1,3,4,5,6,2,1,6];
let exists = {}

for(let i=0; i<arr.length; i++){
    if(exists[arr[i]]){
        exists[arr[i]] += 1
    }else{
        exists[arr[i]] = 1
    }
}
console.log(exists)

let most = 0;
let mostvaleu = null

for(let key in exists){
    if(exists[key] > most){
        most = exists[key]
        mostvalue = key
    }
}
console.log(mostvalue)
