import Child from './Child'
import { createContext } from 'react'
// import React, {useState } from 'react'

// Passing data from parent component to child component using ***props***

// export default function Parent(){
//     return(
//         <>
//         <h2>Parent to Child</h2>
//         <Child message = {'Message from Parent to Child using props'} />
//         <div>-------------------------------------------------------------</div>
//         </>
//     )
// }

// Using ***state***

// export default function Parent(){
//     const[state, setState] = useState("message from parent using state");
//     return(
//         <>
//         <h2>Parent to Child</h2>
//         <Child message= {state}/>
//         <div>-------------------------------------------------------------</div>
//         </>
//     )
// }

// Using ***context***

export const MyContext = createContext();

export default function Parent(){
    const data = "message from parent using context";
    return(
        <>
        <h1>Parent to Child</h1>
        <MyContext.Provider value={data}>
            <Child />
        </MyContext.Provider>
        <div>-------------------------------------------------------------</div>
        </>
    )
}