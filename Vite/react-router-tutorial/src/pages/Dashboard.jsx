import { Link, Outlet } from "react-router";

const Dashboard = () => 
{
    return(
        <>
        <aside>
            <ul>
                <li><Link to="profile">Profile</Link></li>
                <li><Link to="settings">Setting</Link></li>
            </ul>
        </aside>
        <main>
            <h1>Dashboard</h1>
            <Outlet />
        </main>
        </>
    )
}

export default Dashboard
