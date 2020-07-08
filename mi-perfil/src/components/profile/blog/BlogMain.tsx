import * as React from "react";
import { blogList } from "../../../utils/BlogsList";
import BlogCard from "./BlogCard";
import "../../../styles/profile/Blog.css";
import { useParams } from "react-router";
import { isNullOrUndefined } from "util";

export default function BlogMain() {
  let list = blogList.sort((blogA, blogB) =>
    blogA.date < blogB.date ? 1 : -1
  );

  const { tag } = useParams();

  if (!isNullOrUndefined(tag)) {
    list = list.filter(blog => blog.tags.includes(tag));
  }

  return (
    <div className="profile-blog-main">
      <BlogCard key={list[0].id} isLatest {...list[0]} />
      {list.slice(1).map(blog => (
        <BlogCard key={blog.id} isLatest={false} {...blog} />
      ))}
    </div>
  );
}
