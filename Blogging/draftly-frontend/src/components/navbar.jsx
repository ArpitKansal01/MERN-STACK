import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="py-4">
      <div className="container px0-2 mx-auto">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold italic">
          <NavLink to="/">Draflty</NavLink>
        </h1>

        <nav>
          <ul className="flex gap-4">
            <li>
              <NavLink to="/" className="text-lg">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="text-lg">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="text-lg">
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
          <button className=" text-sm bg-neutral-800 text-white px-4 py-1 rounded-full ">Login</button>
          <button className="text-sm bg-neutral-200 text-black px-4 py-1 rounded-full ">Register</button>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Navbar;
