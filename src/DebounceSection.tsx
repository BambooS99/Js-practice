import { useState } from "react";
import { useMockData } from "./api/API";
import SearchResultsComponent from "./searchresultsComponent";
import "./DebounceSection.scss";

export default function DebounceSection() {
  const [showSearchResultsComponent, setShowSearchResultsComponent] =
    useState(false);
  const [handledInputFromSearch, setHandleInputFromSearch] = useState("");

  return (
    <>
      {" "}
      <section className="centeredSection">
        <h1 className="searchHeading">search</h1>
        <input
          className=""
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
        {showSearchResultsComponent ? <SearchResultsComponent /> : null}
      </section>
    </>
  );
}
