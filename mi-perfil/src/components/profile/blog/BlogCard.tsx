import * as React from "react";
import { Link } from "react-router-dom";
import { Content } from "../../../utils/BlogsList";

interface BlogCardProps {
  isLatest: boolean;
  id: number;
  title: string;
  content: Content[];
  date: string;
  tags: string[];
  author: string;
  isFromRelatedArticle?: boolean;
  isInsideBlog?: boolean;
}

const BlogCard = ({
  isLatest,
  id,
  title,
  content,
  date,
  tags,
  author,
  isFromRelatedArticle,
  isInsideBlog
}: BlogCardProps) => {
  return (
    <div
      className={`profile-blog-card ${
        isLatest ? "profile-blog-card-latest" : ""
      }`}
    >
      <div className="profile-blog-tags">
        {tags.map(tag => (
          <BlogTag key={tag} tag={tag} />
        ))}
      </div>
      <Link
        to={`/blog/${id}`}
        onClick={() => {
          if (isFromRelatedArticle)
            document
              .getElementsByClassName("profile-blog-card")[0]
              .scrollIntoView();
        }}
      >
        <h1
          className={`profile-blog-title ${isInsideBlog ? "inside-blog" : ""}`}
        >
          {title}
        </h1>
      </Link>

      {isLatest && content.length > 0 && (
        <h2 className="profile-blog-subtitle">{content[0].data}</h2>
      )}
      <div className="profile-blog-info">
        <div className="profile-blog-info-detail">{date}</div>
        {/* <div className="profile-blog-info-detail">{author}</div> */}
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
