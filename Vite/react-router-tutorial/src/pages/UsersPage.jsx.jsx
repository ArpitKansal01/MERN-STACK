import {useState, useEffect } from "react"
import { Link } from "react-router";

const BASE_URL = "https://dummyjson.com/users";

const UsersPage = () => 
{
    const [users,setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);

    async function fetchUsers()
    {
        setIsLoading(true);
        try
        {
            const response = await fetch(BASE_URL);
            const result = await response.json();       
            setUsers(result.users);     
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
        fetchUsers();
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

    //const {indexOf, firstName, lastName, university, image} = users;
    return(
        <main>
            <section className="users">
                {users.map((user) =>
                {
                const { id, firstName, lastName, university, image} = user;
                return(
                    <article key={id} className="user">
                        <img src={image} alt={firstName} />
                        <h3>
                            {firstName} {lastName}
                        </h3>
                        <p>University: {university}</p>

                        <Link to={`/users/${id}`}><u>See Details</u></Link>
                    </article>
                    );
                }    
                )}
            </section>
        </main>
    );
;}
export default UsersPage

