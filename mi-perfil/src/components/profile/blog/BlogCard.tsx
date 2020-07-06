import * as React from "react";

interface BlogCardProps {
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  author: string;
}

export default function BlogCard({
  title,
  subtitle,
  date,
  tags,
  author
}: BlogCardProps) {
  return (
    <div>
      <div>{tags}</div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div>{date}</div>
      <div>{author}</div>
    </div>
  );
}
