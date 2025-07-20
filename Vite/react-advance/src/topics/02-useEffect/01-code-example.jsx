import React from 'react'
import { useState } from 'react'

const CodeExample = () => {

    const [value,setValue] = useState(0)

    const sayHello = () => {
        console.log("Hello WOrld");
        
    }

    sayHello()

  return (
    <div>
      <h1>value: {value}</h1>
      <button onClick={function(){
        setValue(value+1)
      }}>click me</button>
    </div>
  )
}

export default CodeExample
