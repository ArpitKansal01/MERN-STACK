import React from 'react'
import { useState } from 'react'

const UseStateExtra = () => {

    const [count,setCount] = useState(0)

    function handleClick(){
        setCount((prevState)=>{
            const newVal = prevState + 1
            return newVal
        })
    }

  return (
    <div>
      <h1>UseStateExtra: {count}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default UseStateExtra
