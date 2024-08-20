import { useContext } from "react"
import {MyContext}  from './Parent'
// Passing data from parent component to child component using props
// Using state

// export default function Child(props){
//     return(
//         <>
//         <p>I got this message from Parent: {props.message}</p>
//         </>
//     )
// }

// Using ***context***

export default function Child(){
    const data = useContext(MyContext)
    return(
        <div>{data}</div>
    )
}