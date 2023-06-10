import React from "react";
import "./Style/Blog.css";
import BlogHeader from "./Components/BlogHeader";
import BlogCard from "./Components/BlogCard";
import ContentBlogHeader from "./Content/ContentBlogHeader";
import ContentBlogCard from "./Content/ContentBlogCard";
const Blog = () => {
  return (
    <div className='Blog'>
        <BlogHeader data={ContentBlogHeader}/>
        <BlogCard data={ContentBlogCard}/>
    </div>
  );
};

export default Blog;
