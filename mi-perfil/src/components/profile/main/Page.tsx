import React from "react";

interface PageProps {
  children: any;
}

const Page = ({ children }: PageProps) => (
  <div className="main-page">{children}</div>
);

export default Page;
