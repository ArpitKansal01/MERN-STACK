import { useParams } from "react-router";
import { useState,useEffect } from "react";
const SingleUserPage = () => 
{
    const {userId} = useParams();
   
    const BASE_URL= `https://dummyjson.com/users/${userId}`

    const [user,setUser] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);

    async function fetchUser()
    {
        setIsLoading(true);
        try
        {
            const response = await fetch(BASE_URL);
            const result = await response.json();       
            setUser(result);     
        }catch(error)
        {
            setIsError(true);
        }finally
        {
            setIsLoading(false);
        }
    }

    useEffect(()=>
    {
        fetchUser();
    },[]);

    if (isLoading)
    {
        return(
            <main>
                <section>
                    <h1>Loading...</h1>
                </section>
            </main>
        )
    }
    if (isError)
    {
        return(
            <main>
                <section>
                    <h1>Error!!!</h1>
                </section>
            </main>
        )
    }

    const { id, firstName, lastName, university, image} = user;

    return(
        <main>
            <img src={image} alt={firstName} />
            <h1>{firstName} {lastName}</h1>
            <hr />
            <h3>University</h3>
            <p>{university}</p>
        </main>
    )
}
export default SingleUserPage
