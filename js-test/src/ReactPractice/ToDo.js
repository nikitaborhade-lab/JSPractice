import React from 'react';
import { useState } from 'react';

export default function App(){

  const [value, setValue] = useState('');
  const [submit, setSubmit] = useState([]);
  
  function ToDo(e){
   setValue(e.target.value);
  }
  
  function submitted(e){
    e.preventDefault();
    setSubmit([...submit, value])
    setValue('')
  }
  
  return(
    <>
    <input type = 'text' value = {value} onChange = {ToDo} placeholder='Enter Value'></input>
    <button onClick = {submitted}>Submit</button>
    <ul>
        {submit.map((item)=> (
          <li>{item}</li>
        ))}
    </ul>
    </>
  )
}
