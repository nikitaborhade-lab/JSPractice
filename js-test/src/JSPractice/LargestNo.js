export default function LargestNo(){
    let arr = [2,9,3,4,1,7,8];
    let largest = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    console.log("Largest Number", largest)
}

// Smallest Number

// export default function LargestNo(){
//     let arr = [2,9,3,4,1,7,8];
//     let Smallest = arr[0];

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<Smallest){
//             Smallest = arr[i]
//         }
//     }
//     console.log("Smallest Number", Smallest)
// }

// find 2 elements from array whose addition is 9
const arr  = [2,1,4,5,6];

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] + arr[j] === 9){
            console.log(`${arr[i]} + ${arr[j]} = 9`);
        }
    }
}
