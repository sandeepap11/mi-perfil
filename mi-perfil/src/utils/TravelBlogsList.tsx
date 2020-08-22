export interface Content {
  id: number;
  type: "pre" | "p" | "code" | "post" | "sectionhead" | "image" | "aside";
  header?: string;
  data: string[];
}

interface Blog {
  id: number;
  title: string;
  date: string;
  tags: string[];
  author: string;
  relatedBlogs: number[];
  content: Content[];
}

export const travelBlogList: Blog[] = [
  {
    id: 1,
    title: "A Custom React Grid: Load Data (Part 1)",

    date: "July 07 2020",
    tags: ["react", "grid", "table", "api"],
    author: "Sandeep Madavu",
    relatedBlogs: [],
    content: [
      {
        id: 1,
        type: "pre",
        data: [
          "This is a series on what I have come to see as a very common requirement in most B2B applications - a Grid. We will build a simple custom grid using React Hooks and then we will add functionalities as we go."
        ]
      },
      {
        id: 15,
        type: "p",
        data: [
          "It might seem excessive that we are using separate classes to style each column but this way we have more control. If the Qatar World Cup hasn't taken place yet, you should see a result something like below."
        ]
      },
      { id: 16, type: "image", data: ["grid-series-1.png"] },
      {
        id: 17,
        type: "post",
        data: [
          "That's it for this post. It won't seem like much. We will add a bit more functionalities next. I hope you'd follow along."
        ]
      }
    ]
  }
];
