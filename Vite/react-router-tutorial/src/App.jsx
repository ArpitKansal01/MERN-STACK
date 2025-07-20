import { Routes, Route, Navigate } from "react-router"
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Header from "./components/header";
import UsersPage from "./pages/UsersPage.jsx";
import SingleUserPage from "./pages/SingleUser.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Setting.jsx";
import NotFoundPage from "./pages/NotFound.jsx";

const App = () => 
{
  return(
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/userspage" element={<UsersPage/>}/>
      <Route path="/users/:userId" element={<SingleUserPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="profile" element={<Profile/>} />
        <Route path="settings" element={<Settings/>} />
      </Route>
      <Route path="*" element={<NotFoundPage/>}/>
      <Route path="/admin" element={<ProtectedRoute><AdminPage/></ProtectedRoute>} />
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    </>
  )
};

const ProtectedRoute = ({children}) => 
{
  let isLoggedIn = true;
  return isLoggedIn ? children : <Navigate to="/login" />
}

const LoginPage = () => 
{
  return(
    <form>
      <input type="text" placeholder="name" />
      <button>login</button>
    </form>
  )
}

export default App

// <Routes> : Wraps miltiple <Route> components and ensures only one matching route is rendered 
// <Route> : Defines a mapping between a path and a component 

function pageLayout({children})
{
  return(
    <main>
      <section>
        <article>
          {children}
        </article>
      </section>
    </main>
  )
}

const Home = () => {
  return (
    <pageLayout>
      <h1>this is homepage</h1>
    </pageLayout>
  )
}

const About = () => {
  return (
    <pageLayout>
      <h1>this is About</h1>
    </pageLayout>
  )
}

const Contact = () => {
  return (
    <pageLayout>
      <h1>this is contact</h1>
    </pageLayout>
  )
}