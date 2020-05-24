import React from "react";

interface PageProps {
  view: any;
}

const Page = ({ view }: PageProps) => <div className="main-page">{view}</div>;

export default Page;
