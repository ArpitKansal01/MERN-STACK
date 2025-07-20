import React from 'react'
import { useState,useEffect } from 'react'

const MultipleReturn = () => {

    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },3000)
    },[])

if(isLoading)
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  )

return(
    <div>
        <h1>Multiple Returns </h1>
    </div>
)
}

export default MultipleReturn
