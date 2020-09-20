import React, { useState } from "react";

import Header from "../components/Header";
import DropdownSelector from "../components/DropdownSelector";
import AllQueries from "../components/AllQueries";
import { useQueryState } from "../hooks/query-state";
import "./APILookup.css";

const OPTIONS = [
  "LA Lakers",
  "Boston Celtics",
  "Toronto Raptors",
  "Houston Rockets",
  "Golden State Warriors",
  "LA Lakers",
  "Boston Celtics",
  "Toronto Raptors",
  "Houston Rockets",
  "Golden State Warriors",
];

const QUERIES = [
  "Query 1",
  "Query 2",
  "Query 3",
  "Query 4",
  "Query 15",
  "Query 21",
  "Query 32",
  "Query 34",
  "Query 45",
  "Query 56",
  "Query 17",
  "Query 28",
  "Query 39",
  "Query 40",
  "Query 25",
  "Query 21",
  "Query 22",
  "Query 23",
  "Query 24",
  "Query 75",
  "Query 71",
  "Query 72",
  "Query 73",
  "Query 74",
  "Query 35",
  "Query 31",
  "Query 32",
  "Query 33",
  "Query 34",
  "Query 45",
  "Query 41",
  "Query 42",
  "Query 43",
  "Query 54",
  "Query 55",
  "Query 51",
  "Query 52",
  "Query 53",
  "Query 94",
  "Query 95",
  "Query 101",
  "Query 102",
  "Query 113",
  "Query 224",
  "Query 335",
  "Query 441",
  "Query 232",
  "Query 123",
  "Query 444",
  "Query 500",
];

const APILookup = () => {
  const [showTeamSelector, setShowTeamSelector] = useState(true);
  const [showFeatureSelector, setShowFeatureSelector] = useState(false);
  const [readyToSearch, setReadyToSearch] = useState(false);
  const [loadedQueries, setLoadedQueries] = useState([]);

  const teamSelectedHandler = (teamName) => {
    console.log(teamName);
    setShowFeatureSelector(true);
  };

  const featureSelectedHandler = (featureName) => {
    // console.log(featureName);
    setReadyToSearch(true);
  };

  const searchButtonClickedHandler = () => {
    setLoadedQueries(QUERIES);
  };

  // once the queries are loaded set the initial state
  const { queryState, setQueryState } = useQueryState(QUERIES);

  let selectedQueries = [];
  for (const key in queryState) {
    if (queryState[key]) selectedQueries.push(key);
  }

  console.log(selectedQueries.length);

  return (
    <div className="APILookup">
      <Header />
      {/* <div className="APILookup__selectors_wrapper"> */}
      <div className="APILookup__selectors_container">
        <div className="APILookup__selectors">
          <div className="APILookup__selector">
            <DropdownSelector
              title="Team Selector"
              show={showTeamSelector}
              options={OPTIONS}
              onOptionSelect={teamSelectedHandler}
            />
          </div>
          <div className="APILookup__selector">
            <DropdownSelector
              title="Feature Selector"
              show={showFeatureSelector}
              options={OPTIONS}
              onOptionSelect={featureSelectedHandler}
            />
          </div>
          <div className="APILookup__search_button">
            <button
              disabled={!readyToSearch}
              onClick={searchButtonClickedHandler}
              // tabIndex="0"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="APILookup__queries">
        <div className="APILookup__queries_box">
          <AllQueries queries={loadedQueries} onSelect={setQueryState} />
        </div>
      </div>

      <div className="APILookup__submit_button">
        <button
          disabled={!selectedQueries.length}
          onClick={searchButtonClickedHandler}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default APILookup;
