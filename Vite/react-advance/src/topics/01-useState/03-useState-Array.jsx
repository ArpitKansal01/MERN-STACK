import React from 'react'
import { useState } from 'react'
import {people} from "../../data"

const UseStateArray = () => {
    const [items, setItems] = useState(people)

    function handleClick(){        
        setItems([])  
        console.log(items);
              
    }

    function handleRemove(id){
        setItems(items.filter((ele)=>{
            return ele.id!=id
        }))
    }

    return (
        <div>
        <h1>USeStateArray</h1>
        {
            items.map((ele)=>{
                return(
                    <div className="">
                        <h2 key={ele.id}>Name: {ele.name}   Age: {ele.age}</h2>
                        <button onClick={()=>{handleRemove(ele.id)}}>Remove</button>
                    </div>
                )
            })
        }

        <button onClick={handleClick}>Clear</button>

        </div>  
    )
}

export default UseStateArray
