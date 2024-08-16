
export default function SortArray(){

    let arr = [2,6,3,1,8,9];
    for(let i =0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }

    }
    console.log("sort array in ascending order", arr);
}

// using buildin method
// export default function SortArray(){

//     let arr = [2,6,3,1,8,9];
//     arr.sort();
//     console.log("sort array in ascending order", arr);
// }


// Descending order 

// export default function SortArray(){

//     let arr = [2,6,3,1,8,9];
//     for(let i =0; i<arr.length; i++){
//         for(let j = i+1; j<arr.length; j++){
//             if(arr[i]<arr[j]){   // only condition is changed
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }

//         }

//     }
//     console.log("sort array in descending order", arr);
// }


// let arr = [1,2,3,4,6,9,0];

// arr.sort();
// console.log(arr)