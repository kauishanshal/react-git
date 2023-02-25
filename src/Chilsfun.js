import React from 'react'

const Chilsfun = (props) => {
  return (
    <div>{
      
    }
        <h1>Chilsfun</h1>
        <button onClick={()=>props.childFun("Child")}>Child Button</button>
    </div>
  )
}

export default Chilsfun