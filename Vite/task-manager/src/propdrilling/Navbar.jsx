import React from 'react'
import { useState, createContext } from 'react'
import NavLinks from './NavLinks'

export const NavContext = createContext()

const Navbar = () => {
    const [user,setUser] = useState({
        name: "Nitin",
    })

function logout(){
    setUser(null)
}

  return (
    <NavContext.Provider value={{user:user,logout:logout}}>
      <nav className='navbar'>
        <h2>PropDrilling</h2>
        <NavLinks />
      </nav>
    </NavContext.Provider>
  )
}

export default Navbar
