import React, {useState} from 'react'

export default function FetchData(){
    const [state, setState] = useState([]);

    function fetchApi(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data=> setState(data))
    }

    return(
        <>
        <button onClick={fetchApi}>FetchData</button>
        {JSON.stringify(state)}
        </>
    )
}