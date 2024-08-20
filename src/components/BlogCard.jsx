/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="flex flex-col gap-2 justify-between">
      <img className="h-60 object-cover" src={post.image} alt="" />
      <div className="flex flex-col gap-1 ">
        <h4 className="font-semibold text-lg">{post.title}</h4>
        <p>{post.description}</p>
      </div>
      <Link to={`${post.id}`}>
        <button className="bg-blue-400 rounded-lg text-white w-fit px-3 py-1 ">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default BlogCard;
