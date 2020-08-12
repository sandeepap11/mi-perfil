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
      <div className="profile-blog-related">
        <h1>Related Articles</h1>
        {blogList[currentIndex].relatedBlogs.map(blogIndex => {
          const currentBlogIndex = blogList.findIndex(
            blog => blog.id.toString() === blogIndex.toString()
          );
          return (
            <BlogCard
              key={currentBlogIndex}
              isLatest={false}
              {...blogList[currentBlogIndex]}
            />
          );
        })}
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
            <div
              className="profile-blog-content-preamble"
              key={child.slice(0, 10)}
            >
              {child}
            </div>
          ))}
        </>
      );
    case "p":
      return (
        <div className="profile-blog-content-paragraph-main">
          {children.map(child =>
            child.startsWith("http") ? (
              <a
                className="profile-blog-content-paragraph"
                key={child}
                href={child}
              >
                here
              </a>
            ) : (
              <p
                className="profile-blog-content-paragraph"
                key={child.slice(0, 10)}
              >
                {child}
              </p>
            )
          )}
        </div>
      );
    case "code":
      return (
        <div className="profile-blog-content-code-main">
          {!isNullOrUndefined(header) && (
            <div className="profile-blog-content-code-header">{header}</div>
          )}
          {children.map(child => (
            <code className="profile-blog-content-code" key={Math.random()}>
              {child}
            </code>
          ))}
        </div>
      );
    case "post":
      return (
        <>
          {children.map(child => (
            <div
              className="profile-blog-content-postscript"
              key={child.slice(0, 10)}
            >
              {child}
            </div>
          ))}
        </>
      );
    case "aside":
      return (
        <>
          {children.map(child => (
            <aside
              className="profile-blog-content-aside"
              key={child.slice(0, 10)}
            >
              {child}
            </aside>
          ))}
        </>
      );

    case "sectionhead":
      return (
        <>
          {children.map(child => (
            <h1
              className="profile-blog-content-section-header"
              key={child.slice(0, 10)}
            >
              {child}
            </h1>
          ))}
        </>
      );

    case "image":
      return (
        <>
          {children.map(child => (
            <img
              className="profile-blog-content-image"
              key={child}
              alt={child}
              src={require(`../../../images/profile/blog/${child}`)}
            />
          ))}
        </>
      );

    default:
      return null;
  }
};
