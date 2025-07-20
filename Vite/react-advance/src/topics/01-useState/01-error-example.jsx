import React, { useState } from 'react'

let count =0;

function HandleClick(){
    count++;
}

const ErrorExample = () => {
  return (
    <div>
      <h1>Error Example: {count}</h1>
      <button onClick={HandleClick}>Click Me</button>
    </div>
  )
}

export default ErrorExample
