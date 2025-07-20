import { NavLink } from "react-router";

const Header = () => {
  return (
    <header>
        <h4>React-router</h4>
        <nav>
            <ul>
                <li><NavLink to="/">Homepage</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/userspage">Users</NavLink></li>
                <li><NavLink to="/admin">Admin</NavLink></li>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
