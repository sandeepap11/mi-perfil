import * as React from "react";
import { blogList } from "../../../utils/BlogsList";
import BlogCard from "./BlogCard";

export default function BlogMain() {
  return (
    <div>
      <h1>Blogs</h1>
      {blogList.map(blog => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
}
