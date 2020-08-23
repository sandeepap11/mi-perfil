import * as React from "react";
import { Link } from "react-router-dom";
import { Content } from "../../utils/TravelBlogsList";

interface BlogCardProps {
  isLatest: boolean;
  id: number;
  title: string;
  content: Content[];
  date: string;
  tags: string[];
  author: string;
}

const TravelBlogCard = ({
  isLatest,
  id,
  title,
  content,
  date,
  tags,
  author
}: BlogCardProps) => {
  return (
    <div
      className={`profile-blog-card ${
        isLatest ? "profile-blog-card-latest" : ""
      }`}
    >
      <div className="profile-blog-tags">
        {tags.map(tag => (
          <TravelBlogTag key={tag} tag={tag} />
        ))}
      </div>
      <Link to={`/travel/${id}`}>
        <h1 className="profile-blog-title">{title}</h1>
      </Link>

      {isLatest && content.length > 0 && (
        <h2 className="profile-blog-subtitle">{content[0].data}</h2>
      )}
      <div className="profile-blog-info">
        <div className="profile-blog-info-detail">{date}</div>
        <div className="profile-blog-info-detail">{author}</div>
      </div>
    </div>
  );
};

interface TravelBlogTagProps {
  tag: string;
}

export const TravelBlogTag = ({ tag }: TravelBlogTagProps) => (
  <div className="profile-blog-tag" key={tag}>
    <Link to={`/travel/tags/${tag}`}>#{tag}</Link>
  </div>
);

export default TravelBlogCard;
