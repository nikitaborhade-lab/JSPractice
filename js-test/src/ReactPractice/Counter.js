import React, {useState, useEffect} from 'react';

export default function Counter(){
    const [count, setCount] = useState(0);
    const [running, isRunning] = useState(null);
    let interval;
        useEffect(() => {
            if(running){
                interval = setInterval(() => {
                    setCount(prevCount => prevCount + 1);
                  }, 500);
            }
            return () => clearInterval(interval);
          }, [running]);

  function Start(){
     isRunning(true)
  }

  function Stop(){
    isRunning(false)
 }

  return (
    <>
    <button onClick={Start}>Start</button>
    <h3>Counter: {count}</h3>
    <button onClick={Stop}>Stop</button>
    <div>-------------------------------------------------------------</div>
    </>  
  );
}