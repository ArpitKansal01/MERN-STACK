import React from 'react'
import UserContainer from './UserContainer'
const NavLinks = () => {
  return (
    <>
      <ul className="nav-links">
        <li>HOME</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <UserContainer />
    </>
  )
}

export default NavLinks
