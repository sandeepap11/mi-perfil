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

export const blogList: Blog[] = [
  {
    id: 1,
    title: "A Custom React Grid - Part 1",

    date: "July 07 2020",
    tags: ["react", "grid", "table", "api"],
    author: "Sandeep Madavu",
    relatedBlogs: [2, 3],
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
          "Grids are one of the most (if not the most) used medium of displaying structured data to users. In React, there are third party components available to make your job easier. In my opinion, you should go for these only when there is a large amount of data to be displayed (e.g., data with  more than 15-20 rows or with dynamic headers or both). react-virtualized by Brian Vaughn and fixed-data-table-2 are some of the popular packages that you could consider for displaying large amount of data. With these packages, note that every cell is a component and if you do not control the rendering, every cell will render on every change which will slow down the app. Of course, there are options to control the rendering and those should be used wisely. In this series though, we will build a small grid with known table headers, and discuss common functionalities like pagination, search, sort, etc. The code is available here for reference ",
          "https://github.com/sandeepap11/example-code/tree/gridseries-blog-1/src/components/Grid",

          ". This uses matches data from ",
          "https://worldcup.sfg.io/",
          " for the FIFA World Cup 2019 held in France. This is a really nice api and a personal favourite for me 😊. In this particular part, we will just call the api and load the data into our grid showing a few columns.",

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
        id: 5,
        type: "code",
        header: "GridMain.js snippet",
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
        id: 6,
        type: "p",
        data: [
          `The api provides a large number of details in the form of an array of objects. As mentioned, we are considering only a few like Date, Stage (Group Stage, Round of 16, Quarter Final and so on), Stadium, City, the Teams, obviously the full-time score and the attendance. There are a few changes that I want to make for some of the values - I don't want the year value to be present in date as well as format the date, I want "First Stage" to be called "Group Stage", "Match for third place" as "Third Place", and I also want to form the score attribute in a <Home Score-Away Score> kind of format. So let's use the map method to achieve that.`
        ]
      },
      {
        id: 7,
        type: "code",
        header: "GridMain.js snippet",
        data: [
          `let filteredMatches = matches.map((match, index) => {`,
          "",
          `  const matchDate = new Date(match.datetime);`,
          `  const dateValue = matchDate.toDateString().replace("2019", "");`,
          `  const timeString = matchDate.toTimeString();`,
          "",
          "  const dateString = `${dateValue.slice(",
          `    4,`,
          `   dateValue.length`,
          "  )} ${timeString.slice(0, 5)}`;",
          ``,
          `  const gameNumber = index + 1;`,
          ``,
          `  const stage_name =`,
          `    gameNumber > 36`,
          `      ? match.stage_name === "Match for third place"`,
          `        ? "Third Place"`,
          `        : match.stage_name`,
          `      : "Group Stage";`,
          ``,
          `  return {`,
          `    ...match,`,
          `    gameNumber,`,
          `    dateString,`,
          `    stage_name,`,
          "    score: `${match.home_team.goals}-${match.away_team.goals}`",
          `  };`,
          "",
          `});`
        ]
      },
      {
        id: 8,
        type: "p",
        data: [
          `Now we just need to pass the resultant array to our Grid component which will take care of forming the grid table.`
        ]
      },
      {
        id: 9,
        type: "code",
        header: "GridMain.js snippet",
        data: [
          "return (",
          `  <div className="grid-main">`,
          "    <h1>All World Cup Matches 2019</h1>",
          "    {matches.length > 0 && (",
          "      <>",
          "        <Grid matches={filteredMatches} />",
          "      </>",
          "    )}",
          "  </div>",
          ")"
        ]
      },
      {
        id: 10,
        type: "sectionhead",
        data: ["Grid Component"]
      },
      {
        id: 11,
        type: "p",
        data: [
          `At this point, the main Grid component will just structure the table headers and apply the CSS classes. The data will be displayed using the GridRow component.`
        ]
      },
      {
        id: 12,
        type: "code",
        header: "Grid.js snippet",
        data: [
          "return (",
          '<div className="grid-container">',
          "<div>",
          '<div className="grid-header">',
          '  <div className="grid-row-gamenumber">NO.</div>',
          '  <div className="grid-row-datetime">DATE</div>',
          '  <div className="grid-row-stage">STAGE</div>',
          '  <div className="grid-row-location">STADIUM</div>',
          '  <div className="grid-row-venue">CITY</div>',
          '  <div className="grid-row-home">TEAM 1</div>',
          '  <div className="grid-row-away">TEAM 2</div>',
          '  <div className="grid-row-score">SCORE</div>',
          '  <div className="grid-row-attendance">ATTENDANCE</div>',
          "</div>",
          "</div>",
          '<div className="grid-body">',
          "  {matches.map(match => (",
          "    <GridRow key={match.fifa_id} match={match} />",
          "  ))}",
          "</div>",
          "</div>",
          "  </div>",
          ")"
        ]
      },
      {
        id: 13,
        type: "p",
        data: [
          "The GridRow component will represent each row. Every object in our matches data array will be iterated over and will display the data based on each object. For now it's just a display component as below."
        ]
      },
      {
        id: 14,
        type: "code",
        header: "GridRow.js",
        data: [
          `import React from "react";`,
          "",
          "const GridRow = ({ match }) => {",
          "  return (",
          `    <div className="grid-row-main">`,
          `      <div className="grid-row-gamenumber">{match.gameNumber}</div>`,
          `      <div className="grid-row-datetime">{match.dateString}</div>`,
          `      <div className="grid-row-stage">{match.stage_name}</div>`,
          `      <div className="grid-row-location">{match.location}</div>`,
          `      <div className="grid-row-venue">{match.venue}</div>`,
          `      <div className="grid-row-home">{match.home_team_country}</div>`,
          `      <div className="grid-row-away">{match.away_team_country}</div>`,
          `      <div className="grid-row-score">{match.score}</div>`,
          `      <div className="grid-row-attendance">{match.attendance}</div>`,
          `    </div>`,
          "  );",
          "};",
          "",
          "export default GridRow;"
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
  },
  {
    id: 2,
    title: "A Custom React Grid - Part 2",

    date: "July 10 2020",
    tags: ["react", "grid", "table", "pagination"],
    author: "Sandeep Madavu",
    relatedBlogs: [3, 1],
    content: []
  },
  {
    id: 3,
    title: "A Custom React Grid - Part 3",

    date: "July 15 2020",
    tags: ["react", "grid", "table", "search", "sort"],
    author: "Sandeep Madavu",
    relatedBlogs: [1, 2],
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
