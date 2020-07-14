export interface Content {
  id: number;
  type: "pre" | "p" | "code" | "post" | "sectionhead" | "aside";
  header?: string;
  data: string[];
}

interface Blog {
  id: number;
  title: string;

  date: string;
  tags: string[];
  author: string;
  content: Content[];
}

export const blogList: Blog[] = [
  {
    id: 1,
    title: "A Custom React Grid - Part 1",

    date: "July 07 2020",
    tags: ["react", "grid", "table", "api"],
    author: "Sandeep Madavu",
    content: [
      {
        id: 1,
        type: "pre",
        data: [
          "This is a series on what I have come to see as a very common requirement in most B2B applications - a Grid. We will build a simple custom grid using React Hooks, and then we will add functionalities as we go."
        ]
      },
      {
        id: 2,
        type: "p",
        data: [
          "Grids are one of the most (if not the most) used medium of displaying structured data to users. In React, there are third party components available to make your job easier. In my opinion, you should go for these only when there is a large amount of data to be displayed (e.g., data with  more than 15-20 rows or with dynamic headers or both). react-virtualized by Brian Vaughn and fixed-data-table-2 are some of the popular packages that you could consider for displaying large amount of data. With these packages, note that every cell is a component and if you do not control the rendering, every cell will render on every change which will slow down the app. Of course, there are options to control the rendering and those should be used wisely. In this series though, we will build a small grid with known table headers, and discuss common functionalities like pagination, search, sort, etc. The code is available here for reference - https://github.com/sandeepap11/example-code/tree/gridseries-blog-1/src/components/Grid. This uses matches data from https://worldcup.sfg.io/ for the FIFA World Cup 2019 held in France. This is a really nice api and a personal favourite for me 😊. In this particular part, we will just call the api and load the data into our grid showing a few columns.",

          "To get started swiftly, I have used the create react-app utility to bootsrap the project. All react files pertaining to this project are under the src/components/Grid folder. GridMain component will be our parent component which will call the external api, and hold the methods of any data manipulation. Grid component will be the main component for our reusable grid while GridRow component will represent each row of the grid. There is also a common CSS file. "
        ]
      },
      {
        id: 3,
        type: "sectionhead",
        data: ["Fetch and Format Data"]
      },
      {
        id: 4,
        type: "p",
        data: [
          "Let's call the api using the useEffect and store in component state using the useState hook."
        ]
      },
      {
        id: 100,
        type: "code",
        header: "GridMain.js",
        data: [
          `useEffect(() => {`,
          ` fetch("https://worldcup.sfg.io/matches")`,
          `   .then(response => response.json())`,
          `   .then(matches => {`,
          `     setMatches(matches);`,
          `  });`,
          `}, []);`
        ]
      },
      {
        id: 200,
        type: "post",
        data: [
          "That's it for this post. It won't seem like much. We will add a bit more functionalities next. I hope you'd follow along."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "A Custom React Grid - Part 2",

    date: "July 10 2020",
    tags: ["react", "grid", "table", "pagination"],
    author: "Sandeep Madavu",
    content: []
  },
  {
    id: 3,
    title: "A Custom React Grid - Part 3",

    date: "July 15 2020",
    tags: ["react", "grid", "table", "search", "sort"],
    author: "Sandeep Madavu",
    content: [
      {
        id: 1,
        type: "pre",
        data: [
          "This is a series on what I have come to see as a very common requirement in most B2B applications - a Grid. I will build a simple custom grid using React Hooks, and then we will add functionalities as we go."
        ]
      }
    ]
  }
];
