import React, { useState } from "react";
import { blogList } from "../../../utils/BlogsList";
import BlogCard from "./BlogCard";
import "../../../styles/profile/Blog.css";
import { useParams } from "react-router";
import { isNullOrUndefined } from "util";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function BlogMain() {
  const { tag, searchText } = useParams();

  const [searchValue, setSearchValue] = useState(
    !isNullOrUndefined(searchText) ? decodeURIComponent(searchText) : ""
  );

  let list = blogList.sort((blogA, blogB) => (blogA.id < blogB.id ? 1 : -1));

  if (!isNullOrUndefined(tag)) {
    list = list.filter(blog => blog.tags.includes(tag));
  } else if (!isNullOrUndefined(searchText) && searchText.length > 2) {
    const searchTextValue = decodeURIComponent(searchText);

    list = list.filter(
      blog =>
        blog.title.toLowerCase().includes(searchTextValue.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTextValue.toLowerCase()) ||
        blog.date.toLowerCase().includes(searchText.toLowerCase()) ||
        blog.tags.reduce((result: boolean, tag: string) => {
          result =
            result || tag.toLowerCase().includes(searchTextValue.toLowerCase());
          return result;
        }, false)
    );
  }

  return (
    <div className="profile-blog-main">
      <div className="profile-blog-search">
        <input
          type="text"
          placeholder="Enter Search Text ..."
          className="profile-blog-search-input"
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
        />
        <Link
          to={
            searchValue === ""
              ? "/blog"
              : `/blog/search/${encodeURIComponent(searchValue)}`
          }
        >
          <button className="profile-blog-search-submit">Search</button>
          <div className="profile-blog-search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </Link>
      </div>

      {!isNullOrUndefined(searchText) && searchText.length < 3 ? (
        <h1 className="profile-blog-message">Enter at least 3 characters</h1>
      ) : list.length === 0 ? (
        <h1 className="profile-blog-message">No matching results found</h1>
      ) : (
        list.length > 0 && (
          <>
            <BlogCard
              key={list[0].id}
              isLatest={isNullOrUndefined(searchText) && isNullOrUndefined(tag)}
              {...list[0]}
            />
            {list.length > 1 &&
              list
                .slice(1)
                .map(blog => (
                  <BlogCard key={blog.id} isLatest={false} {...blog} />
                ))}
          </>
        )
      )}
    </div>
  );
}
