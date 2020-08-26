import * as React from "react";
import { useParams, Redirect } from "react-router";
import { travelBlogList } from "../../utils/TravelBlogsList";
import TravelBlogCard from "./TravelBlogCard";
import { isNullOrUndefined } from "util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { routes } from "../../utils/Config";
import { Helmet } from "react-helmet";

export const TravelBlog = () => {
  const { travelBlogId } = useParams();

  const currentIndex = travelBlogList.findIndex(
    blog => blog.id.toString() === travelBlogId.toString()
  );

  if (currentIndex === -1) {
    return <Redirect to={routes.pageNotFound} />;
  }

  return (
    <div className="profile-blog-main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{travelBlogList[currentIndex].title}</title>
        <meta
          name="description"
          content={travelBlogList[currentIndex].content[0].data[0]}
        ></meta>
        <meta
          property="og:title"
          content={travelBlogList[currentIndex].title}
        />
        <meta property="og:type" content="blog" />
        <meta
          property="og:description"
          content={travelBlogList[currentIndex].content[0].data[0]}
        />
        <meta property="og:site_name" content="Sandeep Madavu"></meta>
        <meta
          name="keywords"
          content={`Sandeep Madavu, ${travelBlogList[currentIndex].tags}`}
        ></meta>
      </Helmet>
      <TravelBlogCard
        isLatest={false}
        isInsideBlog
        {...travelBlogList[currentIndex]}
      />
      <div className="profile-blog-blog-main">
        {travelBlogList[currentIndex].content.map(contentItem => (
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
      {travelBlogList[currentIndex].relatedBlogs.length > 0 && (
        <div className="profile-blog-related">
          <h1>Related Articles</h1>
          {travelBlogList[currentIndex].relatedBlogs.map(blogIndex => {
            const currentBlogIndex = travelBlogList.findIndex(
              blog => blog.id.toString() === blogIndex.toString()
            );
            return (
              <TravelBlogCard
                key={currentBlogIndex}
                isLatest={false}
                {...travelBlogList[currentBlogIndex]}
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
  header
}: BlogContentTileChildren) => {
  switch (type) {
    case "pre":
      return (
        <>
          {children.map((child, index) => (
            <div
              className="profile-blog-content-preamble"
              key={child.slice(0, 10) + index}
            >
              {child}
            </div>
          ))}
        </>
      );
    case "p":
      return (
        <div className="profile-blog-content-paragraph-main">
          {children.map((child, index) =>
            child.startsWith("http") ? (
              <a
                className="profile-blog-content-paragraph"
                key={child + index}
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
                key={child.slice(0, 10) + index}
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
          {children.map((child, index) => (
            <div
              className="profile-blog-content-postscript"
              key={child.slice(0, 10) + index}
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
              src={require(`../../images/travel/${child}`)}
            />
          ))}
        </>
      );

    default:
      return null;
  }
};
