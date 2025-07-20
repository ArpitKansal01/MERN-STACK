import React from 'react'
import { useState,useEffect } from 'react'

const ApiEndpoint = "https://dummyjson.com/users"

const MultipleReturnFetchData = () => {
  const [users,setUsers] = useState([])
  const [isError,setIsError] = useState(false)
  const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        async function fetchUsers(){
            setIsLoading(true)
            try {
                const response = await fetch(ApiEndpoint)
                const data = await response.json()
                console.log(data);
                setUsers(data.users)
                
            } catch (error) {
                console.log(error);
                setIsError(true)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchUsers()
        },[])

        if(isLoading) return <div><h1>Loading...</h1></div>

    if(isError) return <div><h1>There is an Error! Try again later</h1></div>

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {
          users.map((el)=>{
            return (
              <li key={el.id} >
                <img src={el.image}/>
                <p>{el.username}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default MultipleReturnFetchData
