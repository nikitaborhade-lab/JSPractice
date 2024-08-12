// Sorting array of Objects based on age property

// export default function SortObject(){
//     let response = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 25 },
//         { name: 'Charlie', age: 35 }
//     ]

// // response.sort((a,b)=> b.age - a.age)   // Descending Order
// response.sort((a,b)=> a.age - b.age)   // Ascending Order
// console.log( "Sort Object", response)
// }

// Numerical Comparison: This method works well for numerical properties. 
// For strings or other data types, different comparison logic might be needed.

// Sorting array of Objects based on name property
// Strings: Use localeCompare for alphabetical sorting.

export default function SortObject(){
    let response = [
        { name: 'Charlie', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'alice', age: 35 }
    ]

// response.sort((a,b)=>a.name.localeCompare(b.name))   // Descending Order
// response.sort((a,b)=>b.name.localeCompare(a.name))   // Ascending Order

// Sorting array of object without using localCompare
// response.sort((a, b) => a.name > b.name ? 1 : -1); 

// case-insensitive sorting
response.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1); 
console.log( "Sort Object", response)
}



