import React, {useState} from 'react'

export default function DropDown(){
    const [value, setValue] = useState('')

    function dropdown(e) {
        setValue(e.target.value)
    }
    
    return(
        <>
            <select onChange = {dropdown} value= {setValue}>
                <option value=''>--select--</option>
                <option value='Pune'>Pune</option>
                <option value='Mumbai'>Mumbai</option>
                <option value='Delhi'>Delhi</option>
            </select>

            {setValue && (
            <p>{`Selected value is: ${value}`}</p>
            )}
        </>
    )
}
