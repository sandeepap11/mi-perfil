import * as React from "react";
import { useParams } from "react-router";
import { blogList } from "../../../utils/BlogsList";
import BlogCard from "./BlogCard";
import { isNullOrUndefined } from "util";

export const Blog = () => {
  const { blogId } = useParams();
  const currentIndex = blogList.findIndex(
    blog => blog.id.toString() === blogId.toString()
  );

  return (
    <div className="profile-blog-main">
      <BlogCard isLatest={false} {...blogList[currentIndex]} />
      <div className="profile-blog-blog-main">
        {blogList[currentIndex].content.map(contentItem => (
          <BlogContentTile
            key={contentItem.id}
            type={contentItem.type}
            header={
              !isNullOrUndefined(contentItem.header) ? contentItem.header : null
            }
          >
            {contentItem.data}
          </BlogContentTile>
        ))}
      </div>
    </div>
  );
};

interface BlogContentTileChildren {
  type: string;
  children: string[];
  header?: string | null;
}

const BlogContentTile = ({
  type,
  children,
  header
}: BlogContentTileChildren) => {
  switch (type) {
    case "pre":
      return (
        <>
          {children.map(child => (
            <div className="profile-blog-content-preamble">{child}</div>
          ))}
        </>
      );
    case "p":
      return (
        <>
          {children.map(child => (
            <p className="profile-blog-content-paragraph">{child}</p>
          ))}
        </>
      );
    case "code":
      return (
        <div className="profile-blog-content-code-main">
          {!isNullOrUndefined(header) && (
            <div className="profile-blog-content-code-header">{header}</div>
          )}
          {children.map(child => (
            <code className="profile-blog-content-code">{child}</code>
          ))}
        </div>
      );
    case "post":
      return (
        <>
          {children.map(child => (
            <div className="profile-blog-content-postscript">{child}</div>
          ))}
        </>
      );
    case "aside":
      return (
        <>
          {children.map(child => (
            <aside className="profile-blog-content-aside">{child}</aside>
          ))}
        </>
      );
    case "sectionhead":
      return (
        <>
          {children.map(child => (
            <h1 className="profile-blog-content-section-header">{child}</h1>
          ))}
        </>
      );

    default:
      return null;
  }
};
