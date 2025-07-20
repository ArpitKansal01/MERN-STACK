import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffectBasics = () => {

    const [value,setValue] = useState(0)

    const sayHello = () => {
        console.log("Hello WOrld");
        
    }

    useState(()=>{
        sayHello()
    },[])

  return (
    <div>
      <h1>value: {value}</h1>
      <button onClick={function(){
        setValue(value+1)
      }}>click me</button>
    </div>
  )
}

export default UseEffectBasics
