import React from 'react'
import { useState } from 'react';


const UseStateBasics = () => {
  let count=0;

  //return array of two elements firts is a variable and second is function 
  const [countState, setCountState] = useState(0);

  function HandleClick(){
    setCountState(countState+1)
  }


  return (
    <div>
      <h1>UseState: {countState}</h1>
      <button onClick={HandleClick}>Click Me</button>
    </div>
  )
}

export default UseStateBasics
