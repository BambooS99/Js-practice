import { useState } from "react";
import { useMockData } from "./api/API";
import SearchResultsComponent from "./searchresultsComponent";
import "./DebounceSection.scss";

export default function DebounceSection() {
  return (
    <>
      {" "}
      <section className="centeredSection">
        <h1 className="searchHeading">search</h1>
        {<SearchResultsComponent />}
      </section>
    </>
  );
}
