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