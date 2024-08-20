import React from "react";
import data from "../assets/mockData.json";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  const singlePost = data.blogPosts?.find((post) => post?.id == slug);
  if (!singlePost) {
    return <h1>Post not found</h1>;
  }
  return (
    <div className="bg-yellow-100  flex flex-col items-center gap-10 p-40">
      <div className="h-[24rem] overflow-hidden">
        <img src={singlePost.image} alt="" className=" object-contain" />
      </div>
      <div className=" flex flex-col items-center gap-5">
        <h2 className="text-black uppercase font-semibold text-2xl text-center">
          {singlePost.title}
        </h2>
        <p className="text-black ">{singlePost.description}</p>
      </div>
    </div>
  );
};

export default BlogPost;
