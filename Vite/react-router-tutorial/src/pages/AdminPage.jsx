import { useNavigate } from "react-router"
const AdminPage = () => 
{
    const navigate = useNavigate(); 
    return(
        <main>
            <section className="admin-sec">
                <h1>Admin Page</h1>
                <button onClick={()=>navigate("/")}>Go to home</button>
            </section>
        </main>
    )
  
}

export default AdminPage
