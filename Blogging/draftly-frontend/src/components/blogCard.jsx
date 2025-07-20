import { Bookmark } from "lucide-react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router";
const BlogCard = ({ blogDetails }) => {
  const { _id, title, excerpt, author, tags, category, likesCount, readTime } =
    blogDetails;

    const navigate = useNavigate()

  return (
    <article className="p-4 border border-neutral-200 rounded relative hover:shadow-xl transition-shadow cursor-pointer" onClick={()=>{
      navigate(`/blogs/${_id}`)
    }}>
      <span className="absolute top-2 right-2 bg-purple-50 border border-purple-500 text-purple-500 px-2 py-0.5 rounded">{category}</span>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-lg text-neutral-700 mb-4">{excerpt}</p>

      <div className="flex gap-2">
        {/* author details */}
        <div>
          <h4 className="text-lg font-semibold">{author}</h4>
        </div>
        {/* like functionality */}
        <div >
          <button>
            <Bookmark/>
          </button>
          <button>
            <Heart/>
          </button>
          {likesCount} 
        </div>
      </div>
    </article>
  );
};

export default BlogCard;