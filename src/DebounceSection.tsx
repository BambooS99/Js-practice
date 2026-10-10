import { useState } from "react";
import { useMockData } from "./api/API";
import SearchResultsComponent from "./searchresultsComponent";

export default function DebounceSection() {
  const [showSearchResultsComponent, setShowSearchResultsComponent] =
    useState(false);
  const [handledInputFromSearch, setHandleInputFromSearch] = useState("");

  return (
    <>
      <h1>search</h1>
      <input
        type="text"
        value={handledInputFromSearch}
        onChange={(event) =>
          setHandleInputFromSearch(event.target.value)
        }></input>
      <button
        onClick={() => {
          console.log(handledInputFromSearch);
          console.log(showSearchResultsComponent);

          setShowSearchResultsComponent((prev) => !prev);
        }}>
        {" "}
        search{" "}
      </button>
      {showSearchResultsComponent ? (
        <SearchResultsComponent
          handledInputFromSearch={handledInputFromSearch}
        />
      ) : null}
    </>
  );
}
