import React, {useEffect, useState} from "react";

export default function EffectSample(){
    const [state, setState] = useState(0);

    function increment(){
        setState(state+1)
    }

    useEffect(()=>{
        console.log(`Count has changed to: ${state}`);
    },[state])   // passing state in dependency array

    return(
        <>
        <h4>EffectSample</h4>
        <button onClick = {increment}>Click</button>
        {state}
        <div>-------------------------------------------------------------</div>
        </>
    )
}