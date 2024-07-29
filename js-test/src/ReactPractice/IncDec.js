import React, {useState} from 'react';

export default function IncDec(){
    const[state, setState] = useState(0);

    const increament = ()=>{
        setState(state+1);
    }

    const decreament = ()=>{
        setState(state-1)
    }

    return(
        <>
        <button onClick={increament}>+</button>
        {state}
        <button onClick={decreament}>-</button>
        </>
    )
}