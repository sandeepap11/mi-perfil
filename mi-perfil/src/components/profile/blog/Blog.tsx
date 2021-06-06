import * as React from "react";
import { Helmet } from "react-helmet";
import { useParams, Redirect } from "react-router";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { blogList } from "../../../utils/BlogsList";
import BlogCard from "./BlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { routes } from "../../../utils/Config";
import { ThemeContext } from "../../../App";

export const Blog = () => {
  const { blogId } = useParams();
  const currentIndex = blogList.findIndex(
    (blog) => blog.id.toString() === blogId.toString()
  );

  if (currentIndex === -1) {
    return <Redirect to={routes.pageNotFound} />;
  }

  return (
    <div className="profile-blog-main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blogList[currentIndex].title}</title>
        <meta
          name="description"
          content={blogList[currentIndex].content[0].data[0]}
        ></meta>
        <meta property="og:title" content={blogList[currentIndex].title} />
        <meta property="og:type" content="blog" />
        <meta
          property="og:description"
          content={blogList[currentIndex].content[0].data[0]}
        />
        <meta property="og:site_name" content="Sandeep Madavu"></meta>
        <meta
          name="keywords"
          content={`Sandeep Madavu, ${blogList[currentIndex].tags}`}
        ></meta>
      </Helmet>
      <BlogCard isLatest={false} isInsideBlog {...blogList[currentIndex]} />
      <div className="profile-blog-blog-main">
        {blogList[currentIndex].content.map((contentItem) => (
          <BlogContentTile
            key={contentItem.id}
            type={contentItem.type}
            header={contentItem.header ? contentItem.header : null}
          >
            {contentItem.data}
          </BlogContentTile>
        ))}
      </div>
      {blogList[currentIndex].relatedBlogs.length > 0 && (
        <div className="profile-blog-related">
          <h1>Related Articles</h1>
          {blogList[currentIndex].relatedBlogs.map((blogIndex) => {
            const currentBlogIndex = blogList.findIndex(
              (blog) => blog.id.toString() === blogIndex.toString()
            );
            return (
              <BlogCard
                key={currentBlogIndex}
                isLatest={false}
                {...blogList[currentBlogIndex]}
                isFromRelatedArticle
              />
            );
          })}
        </div>
      )}
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
  header,
}: BlogContentTileChildren) => {
  const [currentTheme] = React.useContext(ThemeContext);

  const isDark = Number(currentTheme) > 1;

  switch (type) {
    case "pre":
      return (
        <>
          {children.map((child) => (
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
          {children.map((child) =>
            child.startsWith("http") ? (
              <a
                className="profile-blog-content-paragraph"
                key={child}
                href={child}
                target={
                  child.includes(document.location.hostname)
                    ? "_self"
                    : "_blank"
                }
              >
                {"here"}
                {!child.includes(document.location.hostname) && (
                  <>
                    {" "}
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </>
                )}
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
          {header && (
            <div className="profile-blog-content-code-header">{header}</div>
          )}
          {children.map((child, index) => (
            <SyntaxHighlighter
              key={child.slice(0, 10) + index}
              language="javascript"
              wrapLongLines
              style={isDark ? nightOwl : docco}
            >
              {child}
            </SyntaxHighlighter>
          ))}
        </div>
      );
    case "post":
      return (
        <>
          {children.map((child) => (
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
          {children.map((child) => (
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
          {children.map((child) => (
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
          {children.map((child) => (
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
