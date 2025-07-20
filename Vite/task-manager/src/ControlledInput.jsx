import React from 'react'
import { useState } from 'react'

const ControlledInputs = () => {

    const [user,setUser] = useState({
      name: "",
      email: "",
      password: ""
    })

    function handleChange(e) {
      // console.log(e.target.value);
      setUser({...user,[e.target.name]: e.target.value})
      console.log(user);
    }

      function handleSubmit(e) {
        e.preventDefault()
      }
  
  return (
    <div>
      <h2>Controlled Inputs</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"  onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email"  onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="pass">Password</label>
        <input type="password" name="pass" id="pass"  onChange={handleChange} />
      </div>
      <button>Submit</button>
      </form>
    </div>
  ) 
}

export default ControlledInputs
