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
    title: "A Custom React Grid: Load Data (Part 1)",

    date: "July 07 2020",
    tags: ["react", "grid", "table", "api"],
    author: "Sandeep Madavu",
    relatedBlogs: [2, 3, 4],
    content: [
      {
        id: 1,
        type: "pre",
        data: [
          "This is a series on what I have come to see as a very common requirement in most B2B applications - a Grid. We will build a simple custom grid using React Hooks and then we will add functionalities as we go."
        ]
      },
      {
        id: 2,
        type: "p",
        data: [
          "Grids are one of the most (if not the most) used medium of displaying structured data to users. In React, there are third party components available to make your job easier. In my opinion, you should go for these only when there is a large amount of data to be displayed (e.g., data with  more than 15-20 columns or with dynamic column headers or both). react-virtualized by Brian Vaughn and fixed-data-table-2 are some of the popular packages that you could consider for displaying large amount of data. With these packages, note that every cell is a component and if you do not control the rendering, every cell will render on every change which will slow down the app. Of course, there are options to control the rendering and those should be used wisely. In this series though, we will build a small grid with known table headers, and discuss common functionalities like pagination, search, sort, etc. The code is available for reference ",
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
    title: "A Custom React Grid: Pagination (Part 2)",

    date: "July 10 2020",
    tags: ["react", "grid", "table", "pagination"],
    author: "Sandeep Madavu",
    relatedBlogs: [3, 4, 1],
    content: [
      {
        id: 1,
        type: "pre",
        data: [
          "This is part 2 of the custom React Grid series. In the first part, we read the table data from the api and then loaded it on to the grid. In this one, we will add dynamic pagination."
        ]
      },
      {
        id: 2,
        type: "p",
        data: [
          "In the previous section, we loaded data to our table from the api and displayed it. Now, we need to add dynamic pagination as we do not want to show all the data in one page. The code for this part is available ",
          "https://github.com/sandeepap11/example-code/tree/gridseries-blog-2",
          ". So, let's get to it!"
        ]
      },
      {
        id: 3,
        type: "p",
        data: [
          "Firstly we will define max rows per page as 10 and introduce a pageNumber state in our main component. Then we will calculate the total pages and the 10 games that should be shown based on the page number as below."
        ]
      },
      {
        id: 4,
        type: "code",
        header: "GridMain.js snippet",
        data: [
          "const ROWS_PER_PAGE = 10;",
          "...",
          "const totalPages = parseFloat(",
          `  (filteredMatches.length / ROWS_PER_PAGE).toString().split(".")[0]`,
          ");",
          "",
          "  const matchesToShow = filteredMatches.slice(",
          "    (pageNumber - 1) * ROWS_PER_PAGE,",
          "    pageNumber * ROWS_PER_PAGE",
          "  );"
        ]
      },
      {
        id: 5,
        type: "p",
        data: [
          "Now, if the last page has less than 10 rows then our table will reduce in height moving all the other componnets below it (if there are other components). To prevent this, we will fill the table with empty rows to keep the table height intact."
        ]
      },
      {
        id: 6,
        type: "code",
        header: "Grid.js snippet",
        data: [
          "  let emptyRows = [];",
          "",
          "if (rowsPerPage > matches.length) {",
          "  for (let i = 0; i < rowsPerPage - matches.length; i++) {",
          "    emptyRows.push(i);",
          "  }",
          "}",
          "...",
          "",
          "{rowsPerPage > matches.length &&",
          "  emptyRows.map(emptyRow => (",
          `    <div key={emptyRow} className="grid-row-empty"></div>`,
          "  ))}"
        ]
      },
      {
        id: 7,
        type: "p",
        data: [
          "All that is left now is to define a reusable pagination component which we can place below our Grid component. This will have 4 buttons for step to first page, step to previous page, step to next page and step to last page. We will also provide an option to provide the page number manually, and display the current rows status (e.g., 2-20 rows of 52). ",
          "The said component will be independent of the Grid, it's values, column count, maximum row count, api, etc. To enable that it'll need the below props."
        ]
      },
      {
        id: 8,
        type: "p",
        data: [
          "rowsPerPage: Maximum allowed number of rows. This will help in showing the display status."
        ]
      },
      {
        id: 9,
        type: "p",
        data: ["rowsInCurrentPage: Total available rows rto be shown."]
      },
      {
        id: 10,
        type: "p",
        data: [
          "totalRows: Total rows returned by the API. If you have a grid which will need to make separate api calls for every page, then this will be the total rows in the system."
        ]
      },
      {
        id: 11,
        type: "p",
        data: ["totalPages: Total pages of data."]
      },
      {
        id: 12,
        type: "p",
        data: ["pageNumber: Current Page Number."]
      },
      {
        id: 13,
        type: "p",
        data: [
          "setPageNumber: A setter for Page Number whenever it is modified."
        ]
      },
      {
        id: 14,
        type: "p",
        data: [
          "In the Pagination Component, let's define a reusable component for the pagination buttons. This will take an icon, a method to fire on click and a boolean flag to say whether the button is disabled, as props. We wil use FontAwesome icons."
        ]
      },
      {
        id: 15,
        type: "code",
        header: "Pagination.js Snippet",
        data: [
          "const PaginationControl = ({ icon, onClick, isDisabled }) => {",
          "  return (",
          "    <div",
          "      className={",
          "        isDisabled",
          `          ? "pagination-page-control-disabled"`,
          `          : "pagination-page-control"`,
          "      }",
          "      onClick={() => {",
          "        if (!isDisabled) onClick();",
          "      }}",
          "    >",
          "      <FontAwesomeIcon icon={icon} />",
          "    </div>",
          "  );",
          "};"
        ]
      },
      {
        id: 16,
        type: "p",
        data: [
          "As discussed, the Pagination Component will have 4 buttons for navigation, a textbox to go directly to a page and a display stating the current rows on display. It will look something like below."
        ]
      },
      { id: 17, type: "image", data: ["grid-series-2-pagination-strip.png"] },
      {
        id: 18,
        type: "p",
        data: [
          "Before we look at the presentational JSX, we will write a method to update the page number as and when the buttons are pressed or the textbox is given a value. The page number will get passed as a parameter. Note that we will maintain a local state for page number as well. This is mainly to hold the page number value from text box before the user hits the return key. In addition, we will set up a useEffect hook to update the page number from local state as and when the page number prop itself is updated from the parent."
        ]
      },
      {
        id: 19,
        type: "code",
        header: "Pagination.js Snippet",
        data: [
          "...",
          "const [currentPageNumber, setNewCurrentPageNumber] = useState(pageNumber);",
          "",
          "useEffect(() => setNewCurrentPageNumber(pageNumber), [pageNumber]);",
          "",
          "  const updatePageNumber = currentPageNumberValue => {",
          "    if (",
          "      isNaN(currentPageNumberValue) ||",
          "      Number(currentPageNumberValue) > totalPages ||",
          "      Number(currentPageNumberValue) < 1",
          "    ) {",
          "      setNewCurrentPageNumber(pageNumber);",
          "    } else {",
          "      setNewCurrentPageNumber(Number(currentPageNumberValue));",
          "      setPageNumber(Number(currentPageNumberValue));",
          "    }",
          "  };",
          "..."
        ]
      },
      {
        id: 20,
        type: "p",
        data: [
          "With all this set, we can now write our JSX as below. For the textbox, we will have an onchange handler as well as an onblur handler. If the return key is pressed, we will fire the blur event and hence updating the page number as well. You may change this logic as per your needs. Also note that if a number lower than 1 or a number more than the number of pages is entered, we simply ignore it."
        ]
      },
      {
        id: 21,
        type: "code",
        header: "Pagination.js Snippet",
        data: [
          "  return (",
          `    <div className="pagination-main">`,
          `      <div className="pagination-control">`,
          "        <PaginationControl",
          "          icon={faStepBackward}",
          "          onClick={() => updatePageNumber(1)}",
          "          isDisabled={pageNumber === 1}",
          "        />",
          "        <PaginationControl",
          "          icon={faBackward}",
          "          onClick={() => updatePageNumber(pageNumber - 1)}",
          "          isDisabled={pageNumber === 1}",
          "        />",
          `        <div className="pagination-page-input-control">`,
          `          <div className="pagination-page-control">`,
          "            <input",
          `              type="text"`,
          `              className="pagination-page-input"`,
          "              onChange={event => setNewCurrentPageNumber(event.target.value)}",
          "              onBlur={() => updatePageNumber(currentPageNumber)}",
          "              onKeyDown={event => {",
          "                if (event.keyCode === 13) { //on return key press",
          "                  event.target.blur();",
          "                }",
          "              }}",
          "              value={currentPageNumber}",
          "            />",
          "          </div>",
          `          <div className="pagination-page-control pagination-page-input">`,
          `            {" "}`,
          "            / {totalPages}",
          "          </div>",
          "        </div>",
          "        <PaginationControl",
          "          icon={faForward}",
          "          onClick={() => updatePageNumber(pageNumber + 1)}",
          "          isDisabled={pageNumber === totalPages}",
          "        />",
          "        <PaginationControl",
          "          icon={faStepForward}",
          "          onClick={() => updatePageNumber(totalPages)}",
          "          isDisabled={pageNumber === totalPages}",
          "        />",
          "      </div>",
          `      <div className="pagination-info">`,
          `        {" "}`,
          `        {(pageNumber - 1) * rowsPerPage + 1} -{" "}`,
          "        {(pageNumber - 1) * rowsPerPage + rowsInCurrentPage} rows of {totalRows}",
          "      </div>",
          "    </div>",
          "  );"
        ]
      },
      {
        id: 22,
        type: "p",
        data: [
          "With this, we should get a screen like below with pagination working. If you have an api that fetches data for every page, then you should include that as well in your setPageNumber prop passed from the main Grid component."
        ]
      },
      { id: 23, type: "image", data: ["grid-series-2.png"] },
      {
        id: 24,
        type: "post",
        data: [
          "That concludes the pagination changes. Up next we will add search and sort in the next post. Ciao!"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "A Custom React Grid: Search and Sort (Part 3)",

    date: "August 21 2020",
    tags: ["react", "grid", "table", "search", "sort"],
    author: "Sandeep Madavu",
    relatedBlogs: [4, 1, 2],
    content: [
      {
        id: 1,
        type: "pre",
        data: [
          "Let's continue with part 3 of this Grid series. We populated a grid with API data and added pagination to it in the previous lessons. Now we add two basic functionalties in Search and Sort of all columns."
        ]
      },
      {
        id: 2,
        type: "p",
        data: [
          "Thanks to the first two parts, we have a grid with data loaded from the World Cup and api, and it has dynamic pagination introduced. We will now add Search and Sort functionalities to our grid. The code for this part is available ",
          "https://github.com/sandeepap11/example-code/tree/gridseries-blog-3",
          ". So, without further ado let's get started."
        ]
      },
      {
        id: 3,
        type: "p",
        data: [
          "We only need to make changes in two files - viz., GridMain and Grid. Let's start with Search which is probably more trivial. In Grid component, we will add a local search text state, and then define a function to set the text on change of the text input. This method will also reset the page number to 1 and also set the search text in the main parent component through props. Note that we will have an on change search instead of on submit. If you're using an api for search and you need this to be on submit, then you will have to define another method. Also, the parent component method would have to make that api call. These points and the presentational change are shown below from a code point of view."
        ]
      },
      {
        id: 4,
        type: "code",
        header: "Grid.js Snippet",
        data: [
          `  const [searchText, setSearchText] = useState("");`,
          "...",
          "// Note that updateSearchText and setPageNumber come from the main component.",
          "",
          "  const onSearch = text => {",
          "  setSearchText(text);",
          "  updateSearchText(text);",
          "  setPageNumber(1);",
          "};",
          "...",
          "// Below is the presentational JSX from render method",
          "",
          `<div className="grid-search">`,
          `<input`,
          `  type="text"`,
          `  placeholder="Type to search"`,
          "  value={searchText}",
          "  onChange={event => onSearch(event.target.value)}",
          "  />",
          " </div>"
        ]
      },
      {
        id: 5,
        type: "p",
        data: [
          "In the GridMain component, we will define a search text state as well. In addition, we need to write a filter method which will run when the search text isn't empty, and look for the search text in all columns since we are performing this search on all columns. Below is one way to do this."
        ]
      },
      {
        id: 6,
        type: "code",
        header: "GridMain.js Snippet",
        data: [
          "...",
          `  const [searchText, setSearchText] = useState("");`,
          "...",
          "// The filter method as we discussed",
          "...",
          `if (filteredMatches && searchText && searchText !== "")`,
          "filteredMatches = filteredMatches.filter(",
          "  match =>",
          "    match.gameNumber.toString().includes(searchText) ||",
          "    match.dateString.toLowerCase().includes(searchText.toLowerCase()) ||",
          "    match.stage_name.toLowerCase().includes(searchText.toLowerCase()) ||",
          "    match.location.toLowerCase().includes(searchText.toLowerCase()) ||",
          "    match.venue.toLowerCase().includes(searchText.toLowerCase()) ||",
          "    match.home_team_country",
          "      .toLowerCase()",
          "      .includes(searchText.toLowerCase()) ||",
          "    match.away_team_country",
          "      .toLowerCase()",
          "      .includes(searchText.toLowerCase()) ||",
          "    match.score.toLowerCase().includes(searchText.toLowerCase()) ||",
          "    match.attendance.toLowerCase().includes(searchText.toLowerCase())",
          " );"
        ]
      },
      {
        id: 7,
        type: "p",
        data: [
          "We just have to pass the setPageNumber and setSearchText methods to the Grid component, and the search should start to work as expected."
        ]
      },
      {
        id: 8,
        type: "p",
        data: [
          "Now onto the sort one. We'll run this in the reverse order. Let's do the main component first and then the child. Firstly, we will define two states - one to hold the header of the column being sorted and the other for the direction - ascending or descending. The selected header as well as the setter methods for the states will be sent as props to the Grid component. Along with this, we need a sort method on the main component (similar to how we had a filter method for search) to sort our list based on the column being sorted and the sort direction. I'm sure you could improve this method but at this point all we are doing is sorting based on the headers when the sort directions are given. Below are the code changes."
        ]
      },
      {
        id: 9,
        type: "code",
        header: "GridMain.js Snippet",
        data: [
          "...",
          `const [sortHeader, setSortHeader] = useState("");`,
          `const [sortDirection, setSortDirection] = useState("");`,
          "...",
          "// Sort method on filteredMatches when soert header and direction iare defined",
          "",
          "if (",
          "  sortHeader &&",
          "  sortDirection &&",
          `  sortHeader !== "" &&`,
          `  (sortDirection === "ASC" || sortDirection === "DESC")`,
          " )",
          "",
          "  filteredMatches = filteredMatches.sort((matchA, matchB) =>",
          `    sortDirection === "ASC"`,
          "      ? matchA[sortHeader] > matchB[sortHeader]",
          "        ? 1",
          "        : -1",
          "      : matchA[sortHeader] > matchB[sortHeader]",
          "      ? -1",
          "      : 1",
          "  );",
          "...",
          "// Additional props to the Grid component for Search and Sort",
          "",
          "<Grid",
          "matches={matchesToShow}",
          "rowsPerPage={ROWS_PER_PAGE}",
          "updateSearchText={setSearchText}",
          "setPageNumber={setPageNumber}",
          "sortHeader={sortHeader}",
          "setSortHeader={setSortHeader}",
          "setSortDirection={setSortDirection}",
          "/>"
        ]
      },
      {
        id: 10,
        type: "p",
        data: [
          "In the Grid component, first we'll define a Sort Handle which will now represent the sort button for every column and make the sorting work on click. It will take 3 props - column name, currently selected sort header and a method to be fired when the button is clicked upon. This will also have a local state for sort direction. Initially this will be empty and show the up-down arrow icon. On click, firstly it will change to 'ASC' with up arrow and then to 'DESC' on next click with down arrow. On subsequent clicks, it will toggle between 'ASC' and 'DESC'. If any other column sort icon is clicked, the icons will reset to up-down. Note that the sorting method will be called on every click."
        ]
      },
      {
        id: 11,
        type: "code",
        header: "Grid.js Snippet",
        data: [
          `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";`,
          "import {",
          "  faSort,",
          "  faSortUp,",
          "  faSortDown",
          `} from "@fortawesome/free-solid-svg-icons";`,
          "...",
          "// Sort Handle Component",

          "const SortHandle = ({ parameter, sortHeader, onSort }) => {",
          `  const [sortColumnOrder, setSortColumnOrder] = useState("");`,
          "",
          "  const changeSortOrder = () => {",
          "    const sortDirection =",
          "      parameter !== sortHeader",
          `        ? "ASC"`,
          `        : sortColumnOrder === "ASC"`,
          `        ? "DESC"`,
          `        : sortColumnOrder === "DESC"`,
          `        ? "ASC"`,
          `        : "ASC";`,
          "",
          "    setSortColumnOrder(sortDirection);",
          "",
          "    onSort(parameter, sortDirection);",
          "  };",
          "",
          "  return (",
          `    <div className="grid-geader-sort" onClick={changeSortOrder}>`,
          "      <FontAwesomeIcon",
          "        icon={",
          "          parameter !== sortHeader",
          "            ? faSort",
          `            : sortColumnOrder === "ASC"`,
          "            ? faSortUp",
          `            : sortColumnOrder === "DESC"`,
          "            ? faSortDown",
          "            : faSort",
          "        }",
          "      />",
          "    </div>",
          "  );",
          "};"
        ]
      },
      {
        id: 12,
        type: "p",
        data: [
          "Let's now get into the Grid component. We'll add the SortHandle component (these will basically act as sort buttons) alongside every column name. To every SortHandle component we will pass the props - current column, selected sortHeader from GridMain and a method to sort. We need to define this method similar to the search method. On sorting, we will set the current column as sort header, and the sort direction based on the local state of SortHandle for that component. We will also reset the page number to 1. All these, along with search will make the Grid component code look like this -"
        ]
      },
      {
        id: 13,
        type: "code",
        header: "Grid.js Snippet",
        data: [
          "...",
          "const Grid = ({",
          "  matches,",
          "  rowsPerPage,",
          "  updateSearchText,",
          "  setPageNumber,",
          "  sortHeader,",
          "  setSortHeader,",
          "  setSortDirection",
          "}) => {",
          `  const [searchText, setSearchText] = useState("");`,
          "",
          "  let emptyRows = [];",
          "",
          "  if (rowsPerPage > matches.length) {",
          "    for (let i = 0; i < rowsPerPage - matches.length; i++) {",
          "      emptyRows.push(i);",
          "    }",
          "  }",
          "",
          "  const onSearch = text => {",
          "    setSearchText(text);",
          "    updateSearchText(text);",
          "    setPageNumber(1);",
          "  };",
          "",
          "// On Sort Method",
          "// Uses props from GridMain to set selected sort header, direction and reset page number",
          "  const onSort = (sortHeader, sortDirection) => {",
          "    setSortHeader(sortHeader);",
          "    setSortDirection(sortDirection);",
          "    setPageNumber(1);",
          "  };",
          "",
          "// In the render JSX, note the use of Sort Handle on every column",
          "",
          "  return (",
          `    <div className="grid-container">`,
          "      <div>",
          `        <div className="grid-header">`,
          `          <div className="grid-row-gamenumber">`,
          "            NO.",
          "            <SortHandle,",
          `              parameter={"gameNumber"}`,
          "              {...{",
          "                sortHeader,",
          "                onSort",
          "              }}",
          "            />",
          "          </div>",
          `          <div className="grid-row-datetime">`,
          "            DATE",
          "            <SortHandle",
          `              parameter={"dateString"}`,
          "              {...{",
          "                sortHeader,",
          "                onSort",
          "              }}",
          "            />",
          "          </div>",
          `          <div className="grid-row-stage">`,
          "            STAGE",
          "            <SortHandle",
          `              parameter={"stage_name"}`,
          "              {...{",
          "                sortHeader,",
          "                onSort",
          "              }}",
          "            />",
          "          </div>",
          `          <div className="grid-row-location">`,
          "            STADIUM",
          "            <SortHandle",
          `              parameter={"location"}`,
          "              {...{",
          "                sortHeader,",
          "                onSort",
          "              }}",
          "            />",
          "          </div>",
          `          <div className="grid-row-venue">`,
          "            CITY",
          "            <SortHandle",
          `              parameter={"venue"}`,
          "              {...{",
          "                sortHeader,",
          "                onSort",
          "              }}",
          `            />`,
          "          </div>",
          `          <div className="grid-row-home">`,
          "            TEAM 1",
          "            <SortHandle",
          `              parameter={"home_team_country"}`,
          `              {...{`,
          "                sortHeader,",
          "                onSort",
          "              }}",
          `            />`,
          "          </div>",
          `          <div className="grid-row-away">`,
          "            TEAM 2",
          "            <SortHandle",
          `              parameter={"away_team_country"}`,
          "              {...{",
          "                sortHeader,",
          "                onSort",
          "              }}",
          "            />",
          "          </div>",
          `          <div className="grid-row-score">`,
          "            SCORE",
          "            <SortHandle",
          `              parameter={"score"}`,
          "              {...{",
          "                sortHeader,",
          "                onSort",
          "              }}",
          "            />",
          "          </div>",
          `          <div className="grid-row-attendance">`,
          "            ATTENDANCE",
          "            <SortHandle",
          `              parameter={"attendance"}`,
          "              {...{",
          "                sortHeader,",
          "                onSort",
          "              }}",
          "            />",
          "          </div>",
          "        </div>",
          `        <div className="grid-search">`,
          "          <input",
          `            type="text"`,
          `            placeholder="Type to search"`,
          "            value={searchText}",
          "            onChange={event => onSearch(event.target.value)}",
          "          />",
          "        </div>",
          "      </div>",
          `      <div className="grid-body">`,
          "        {matches.map(match => (",
          "          <GridRow key={match.fifa_id} match={match} />",
          "        ))}",
          "        {rowsPerPage > matches.length &&",
          "          emptyRows.map(emptyRow => (",
          `            <div key={emptyRow} className="grid-row-empty"></div>`,
          "          ))}",
          "      </div>",
          "    </div>",
          "  );",
          "};"
        ]
      },
      {
        id: 14,
        type: "p",
        data: [
          "That should have sorted out on sorting! If we now want to search for USWNT games, we just need to search as USA and we will have the results of their 7 games. As a demo, I have sorted them based on most attendance (descending), and now the final game shows up on top. Note that this only one page. The picture below shows this scenario."
        ]
      },
      { id: 15, type: "image", data: ["grid-series-3.png"] },
      {
        id: 16,
        type: "post",
        data: [
          "That's all for the search and sort changes. We will add some basic accessibility in the next lesson. Please follow along. Thank you!"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "A Custom React Grid: Accessibility (Part 4)",

    date: "August 23 2020",
    tags: ["react", "grid", "table", "a11y", "accessibility"],
    author: "Sandeep Madavu",
    relatedBlogs: [1, 2, 3],
    content: [
      {
        id: 1,
        type: "pre",
        data: [
          "This is part 4 of the Grid Series. We have a grid which has data loaded from an api, and is enabled with pagination, search and sort. We will now make changes so that these functionalities are accessible for everyone."
        ]
      },
      {
        id: 2,
        type: "p",
        data: [
          "There are no excuses for omiting accessibility (a11y) in web apps in this day and age. The grid that we have built should be no different. Our grid already has search functionality which is accessible. Now let's make the sorting and pagination accessible as well. The code for this is available ",
          "https://github.com/sandeepap11/example-code/tree/gridseries-blog-4",
          ". Let me now begin with the breakdown."
        ]
      },
      {
        id: 3,
        type: "p",
        data: [
          "We want all our functionalities to be done via a keyboard as well. The pagination through textbox and the search already have this going for them. But the same can't be said about pagination through buttons and sorting. In fact, our pagination and sorting buttons are not even buttons, and no screen reader will recognise them as such. To address this we'll need to add aria-label, role, tabIndex, etc to these elements. But first, let's define a function that can be called by all buttons when the return (or enter) key is pressed, instead of just on click. We'll define a common method which recognises the code for return key and will run the action method only when it's true. Ideally, you could have this method in a common file, and then use it on all components. For now we'll define this in our Pagination component. You could have similar methods for esc key (for cancellation, closing forms, etc.) as well, or any other key for that matter. The method is as below."
        ]
      },
      {
        id: 4,
        type: "code",
        header: "Pagination.js Snippet",
        data: [
          "...",
          "const RETURN_KEY_CODE = 13; // Key code for Enter key",
          "export const onReturnKeyPress = (event, actionMethod) => {",
          "if (event.keyCode === RETURN_KEY_CODE) actionMethod();",
          "};"
        ]
      },
      {
        id: 5,
        type: "p",
        data: [
          "Now that we got that out of our way, we will first use this in our PaginationControl component which we used as a common method for hopping from page to page. The code is below."
        ]
      },
      {
        id: 6,
        type: "code",
        header: "Pagination.js Snippet",
        data: [
          "...",
          "  const PaginationControl = ({ icon, onClick, isDisabled, label }) => {",
          "    return (",
          "      <div",
          "        className={",
          "          isDisabled",
          `            ? "pagination-page-control-disabled"`,
          `            : "pagination-page-control"`,
          "        }",
          "        onClick={() => {",
          "          if (!isDisabled) onClick();",
          "        }}",
          "        onKeyDown={event =>",
          "          onReturnKeyPress(event, () => {",
          "            if (!isDisabled) onClick();",
          "          })",
          "        }",
          "        tabIndex={0}",
          `        role="button"`,
          "        aria-disabled={isDisabled}",
          "        aria-label={label}",
          "      >",
          "        <FontAwesomeIcon icon={icon} />",
          "      </div>",
          "    );",
          "  };"
        ]
      },
      {
        id: 7,
        type: "p",
        data: [
          "Note that we have added an onKeyDown method which will use our onReturnKeyPress method. Now whenever the return key is pressed, the onclick method will be run thereby running the pagination button methods. In addition, we will add tabIndex, role and aria-disabled attributes to help the screen readers. We've also introduces a label prop so that a description is given for the button (e.g., go to next page), and this can be used as aria-label since our button is just an icon. The aria-label provides a better description. We'll do something similar for sorting. The changes made in SortHandle will look like below."
        ]
      },
      {
        id: 8,
        type: "code",
        header: "Grid.js Snippet",
        data: [
          "...",
          "<div",
          `  className="grid-geader-sort"`,
          "  onClick={changeSortOrder}",
          "  onKeyDown={event => onReturnKeyPress(event, changeSortOrder)}",
          "  tabIndex={0}",
          `  role="button"`,
          `  aria-label={"sort by " + parameter}`,
          ">",
          "  <FontAwesomeIcon",
          "    icon={",
          "      parameter !== sortHeader",
          "        ? faSort",
          `        : sortColumnOrder === "ASC"`,
          "        ? faSortUp",
          `        : sortColumnOrder === "DESC"`,
          "        ? faSortDown",
          "        : faSort",
          "    }",
          "  />",
          "</div>"
        ]
      },
      {
        id: 9,
        type: "p",
        data: [
          "We should now be able to sort as well as paginate using shift + tab and enter. There should not be any visual difference except the outline when the buttons are focused."
        ]
      },
      {
        id: 10,
        type: "post",
        data: [
          "This will conclude the series for now. I might add some additiona features to this in the future. But it will be curtains on this series for now. Thank you for reading, and good day!"
        ]
      }
    ]
  }
];
