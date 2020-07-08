import * as React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  isLatest: boolean;
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  author: string;
}

const BlogCard = ({ title, subtitle, date, tags, author }: BlogCardProps) => {
  return (
    <div className="profile-blog-card">
      <div className="profile-blog-tags">
        {tags.map(tag => (
          <BlogTag key={tag} tag={tag} />
        ))}
      </div>
      <h1 className="profile-blog-title">{title}</h1>
      <h2 className="profile-blog-subtitle">{subtitle}</h2>
      <div className="profile-blog-info">
        <div className="profile-blog-info-detail">{date}</div>
        <div className="profile-blog-info-detail">{author}</div>
      </div>
    </div>
  );
};

interface BlogTagProps {
  tag: string;
}

export const BlogTag = ({ tag }: BlogTagProps) => (
  <div className="profile-blog-tag" key={tag}>
    <Link to={`/blog/tags/${tag}`}>#{tag}</Link>
  </div>
);

export default BlogCard;
