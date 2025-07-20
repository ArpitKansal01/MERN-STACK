import { useState,useEffect } from "react";
import { useParams } from "react-router";
import blogs from "../data/blogs"

const SingleBlogPage = () => {

  const {blogId} = useParams();
  const [singleBlog,setSingleBlog] = useState(null)
  const [isLoading,setisLoading] = useState(null)
  const [isError,setIsError] = useState(null)

  useEffect(()=>{
    const fetchBlogs = () => {
      setisLoading(true)
      setTimeout(()=>{
        const blogFound = blogs.find((el)=>{
          el._id==blogId  
        })
        setSingleBlog(blogFound)
        setisLoading(false)
      },1000)
    }
    fetchBlogs()
  },[])

  

  return <div>Single Blog Page {blogId}</div>;
};

export default SingleBlogPage;
