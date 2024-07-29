
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
    console.log("sort array", arr);
}