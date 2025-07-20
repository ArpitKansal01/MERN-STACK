import React from 'react'
import { useState,useEffect } from 'react'

const ApiEndpoint = "https://dummyjson.com/users"
const FetchData = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        async function fetchGithubusers(){
      try {
         const response = await fetch(ApiEndpoint)
         const data = await response.json()
         console.log(data);
         setUsers(data.users)
         
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchGithubusers()
    },[])

  return (
    <div>
      <h1>FetchData</h1>
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

export default FetchData
