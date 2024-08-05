import {useState} from 'react';

export default function ChangeColor(){
    const [state, setState] = useState(false)

    function changeColor(){
        setState(!state)
    }
    return(
        <>
            <button onClick = {changeColor}
                style = {{backgroundColor : state ? 'yellow': 'pink' }}>
            Click Me</button>
        </>
    )
}