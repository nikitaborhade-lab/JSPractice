// 1) convert into uppercase
// 2) convert into lowercase
// 3) First letter uppercase

export default function SmallAllCode(){
    let string = "nikita";
    let string1 = "BORHADE";
    const sample = string.toUpperCase();
       const sample1 = string1.toLowerCase();
       const sample2 = string.charAt(0).toUpperCase() + string.slice(1);
    console.log(sample);
       console.log(sample1);
       console.log(sample2);

       let sum = 5 + 10;
   // debugger; // Execution will pause here
   return sum;
}


 