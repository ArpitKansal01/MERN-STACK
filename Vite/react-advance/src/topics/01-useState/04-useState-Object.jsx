import React from 'react'
import { useState } from 'react'

const UseStateObject = () => {

    const [user, setUser] = useState({
        name: "Kashish",
        age: 21,
        job: "Developer "
    })

    const updatePerson = () =>{
        setUser({
            name: "Arpit",
            age: 20,
            job: "Developer"
        })
    }

  return (
    <div>
        <h1>USer Details</h1>
        <h3>Name : {user.name}</h3>
        <h3>Age : {user.age}</h3>
        <h3>Job : {user.job}</h3>

        <button onClick={updatePerson}>Update Person</button>
    </div>
  )
}

export default UseStateObject
