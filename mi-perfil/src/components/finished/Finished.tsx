import React, { useEffect, useState } from "react";
import { useParams, withRouter } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/finished/Main.css";
import { onReturn } from "../../utils/Common";

const checklist = ["liverpool", "moron"];

function Finished({ history }: any) {
  const { searchText } = useParams();
  const [text, setText] = useState("");
  let result = false;

  if (searchText) {
    result = checklist.reduce((result, item) => {
      result = result || searchText.includes(item);
      return result;
    }, false);
  }

  return (
    <div className="finished">
      <div className="finished-header">
        Is{" "}
        <input
          autoFocus
          style={{ width: `${60 + text.length * 28}px` }}
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={(event) =>
            onReturn(event, () =>
              history.push(`/finished/${encodeURIComponent(text)}`)
            )
          }
        />
        finished?
      </div>
      <Link to={`/finished/${text}`} className="finished-search">
        Check now
      </Link>
      {searchText && (
        <div className="finished-answer">
          <div className="finished-question">{text}</div>

          <div>Answer</div>
          {result ? "YES" : "NO"}
        </div>
      )}
    </div>
  );
}

export default withRouter(Finished);
