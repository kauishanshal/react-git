import React, { useState } from 'react'

const Event = () => {
    const[name,setName]=useState('Kaushal');
    const[city,setCity]=useState('Noida');
    const[count,setCount]=useState(0);

    const changeEvent=()=>{
        name:setName('Ishan')
        city:setCity('London')
        count:setCount(count+1)
        console.log('clicked')
    }

  return (
    <div>
        <h1>Name :- {name}</h1>
        <h1>City :- {city}</h1>
        <h1>Count :- {count}</h1>
        <button onClick={changeEvent}>Click</button>
    </div>
  )
}

export default Event