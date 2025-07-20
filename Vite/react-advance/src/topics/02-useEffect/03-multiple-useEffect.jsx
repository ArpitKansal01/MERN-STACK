import React from 'react'
import { useState , useEffect } from 'react'

const MultipleUseEffect = () => {

    const [firstState,setFirstState] = useState(10)
    const [secondState,setSecondState] = useState(100)

    useEffect(()=>{
      console.log("FirstState");
    },[firstState])
    useEffect(()=>{
      console.log("SecondState");
    },[secondState])

  return (
    <div>
      <h1>Multiple UseEffect</h1>
      <h2> First: {firstState}</h2>
      <button onClick={()=>{setFirstState(firstState+10)}}>Increment </button>
      <h2>Second: {secondState}</h2>
      <button onClick={()=>{setSecondState(secondState+100)}}>Increment</button>
    </div>
  )
}

export default MultipleUseEffect
