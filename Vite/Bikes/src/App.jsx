import React from 'react'
import "./app.css"
import BikeList from './BikeList.jsx'

const App = () => {
  return (
    <div className='MAIN'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Royal_Enfield_logo_new.svg/2560px-Royal_Enfield_logo_new.svg.png" alt="Royal Enfield Logo" />
      <BikeList />
    </div>
  )
}

export default App
