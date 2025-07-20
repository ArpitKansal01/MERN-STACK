import React from 'react'
import { useState,useEffect } from 'react'

const ShotCircuitDemo = () => {

    const [text,setText] = useState("")
    const [name,setName] = useState("Rahul")

  return (
    <div>
      <h1>Shotcircuit</h1>
      <h3>False or: {text ||"HelloWOrld"}</h3>
      <h3>False and: {text &&"HelloWOrld"}</h3>
      <h3>Truth or: {name ||"HelloWOrld"}</h3>
      <h3>Truth and: {name &&"HelloWOrld"}</h3>
    </div>
  )
}

export default ShotCircuitDemo
