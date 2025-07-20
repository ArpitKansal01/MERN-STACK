import { useNavigate } from "react-router"

const NotFoundPage = () => 
{
    const navigate = useNavigate();
    return(
        <main>
            <section>
                <h1>Page not found</h1>
                <button onClick={()=>navigate("/")}>Go back to home</button>
            </section>
        </main>
    )
}

export default NotFoundPage
