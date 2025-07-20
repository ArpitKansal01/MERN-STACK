import { Routes, Route } from "react-router";

import HomePage from "./pages/homePage";
import BlogsPage from "./pages/blogsPage";
import SingleBlogPage from "./pages/singleBlogPage";
import ProfilePage from "./pages/profilePage";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:blogId" element={<SingleBlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default App;
