import React from 'react'
import { useContext } from 'react'
import { NavContext } from './Navbar'
const UserContainer = () => {

    const data = useContext(NavContext)

    const {user,logout} = data

  return (
    <div className='user-details'>
        {user?(
            <>
                <p>Hello there, Arpit</p>
                <button onClick={logout}>Logout</button>
            </>
        ):(
            <p>Please Login</p>
        )}
    </div>
  )
}

export default UserContainer
