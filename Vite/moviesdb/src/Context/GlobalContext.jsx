import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`

const GlobalContext = ({children}) => {

    const [movies,setMovies] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    async function fetchMovies(url){
        setIsLoading(true)
        try {
            const response = await fetch(url)   
            const data = await response.json()

            if(data.response === "true"){
                setMovies(data)
                setIsError(false)
            }
            else{
                setIsError(true)
            }
        } catch (error) {
            setIsError(true)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchMovies(API_ENDPOINT)
    },[])

  return (
    <AppContext value={{isLoading, isError, movies}}>{children}</AppContext>
  )
}

export default GlobalContext
