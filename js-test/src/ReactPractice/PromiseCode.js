// import React, { useState, useEffect } from 'react';

// export default function PromiseCode() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []); // Empty dependency array ensures this runs once on mount

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>Data</h1>
//       {data}
//     </div>
//   );
// }


// -----------------------------------------------------------------------------------------------


// ***Promise Chaining***

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1);
//     },1000)
// }).then( function(result){
//     console.log(result);
// return result *2;
// }
// ).then(function(result){
//   console.log(result);
// return result *3;  
// }
// ).then(function(result){
//   console.log(result);
// return result *4;  
// })
// -----------------------------------------------------------------------------------------------

// ***Promise.all()***

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values); // [3, 42, 'foo']
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// -----------------------------------------------------------------------------------------------

// ***Promise.race()***

// var promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("one")
//     },1000)
// })

// var promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("two")
//     },5000)
// })

// Promise.race([promise1, promise2]).then(function (value){
//     console.log(value)
// })

// -----------------------------------------------------------------------------------------------

// In React, Promises are commonly used for handling asynchronous operations like making API calls, 
// managing state updates, and controlling the component lifecycle.

// Pending: This is the initial state of a Promise. It represents that the asynchronous operation is ongoing,
// and the result is not available yet.

// Resolved (Fulfilled): When the asynchronous operation is successful, a Promise transitions to the resolved
// state. It contains the result of the operation, such as data fetched from a server.

// Rejected: If an error occurs during the asynchronous operation, the Promise transitions to the rejected 
// state. It holds an error object that provides details about the failure.

// .then() and .catch()
// Promises are equipped with .then() and .catch() methods. 
// You can attach these methods to a Promise to handle the results when it resolves 
// or to catch errors when it rejects.
// Promises have built-in error handling through the .catch() method,