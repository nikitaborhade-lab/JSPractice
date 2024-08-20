// 1) convert into uppercase

// export default function SmallAllCode(){
//     let string = "nikita";
//     const sample = string.toUpperCase();
//     console.log(sample);
// }

// 2) convert into lowercase

// export default function SmallAllCode(){
//     let string = "NIKITA";
//     const sample = string.toLowerCase();
//     console.log(sample);
// }

// 3) First letter uppercase

export default function SmallAllCode(){
    let string = "nikita";
    const sample = string.charAt(0).toUpperCase() + string.slice(1);
    console.log(sample);
}