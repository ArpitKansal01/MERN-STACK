import {Search} from "lucide-react";
import {useEffect, useState} from "react";
import BlogCard from "../components/blogCard";

import blogs from "../data/blogs";

const BlogsPage = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    const fetchBlogs = () => {
      setIsLoading(true);
      setTimeout(() => {
        setLatestBlogs(blogs);
        setIsLoading(false);
      }, 3000);
    };

    fetchBlogs();
  }, []);
  return (
    <main>
      <section className="min-h-screen">
        <div className="py-18 bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="container mx-auto p-2">
          <form>
          <div className="relative max-w-lg mx-auto"><input
          type="text"
          placeholder="search blogs..."
          className="border border-nuetral-300 py-2 px-4 w-full"/>
          <button className="absolute top-1/2 right-2 -translate-y-1/2">
          <Search /></button>
          </div>
          
        </form>

        </div>
        </div>
        <div className="container mx-auto px-2">
          {/* filter form */}
          {/* list of blogs */}

          {isLoading ?(<>Loading...</>)  : (
          <>
          <div className="flex flex-col gap-5 p-5">
            {latestBlogs.map((el,i)=>{
            return <BlogCard key={el._id} blogDetails={el}/>;})}
            </div>
          </>)}

        </div>
        
      </section>
    </main>
  )
};

  
  
  


export default BlogsPage;