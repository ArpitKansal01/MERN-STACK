import React from 'react'
import { Routes,Route } from 'react-router'
import HomePage from './HomePage'
import MoviesPage from './MoviesPage'
import SingleMoviePage from './SingleMoviePage'
import NotFoundPage from './NotFoundPage'
import GlobalContext from './Context/GlobalContext'

const App = () => {

  console.log(import.meta.env.VITE_API_KEY);

  return (
    <GlobalContext>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path='/movie/:movieId' element={<SingleMoviePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </GlobalContext>
  )
}

export default App
