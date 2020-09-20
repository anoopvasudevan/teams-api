import React from "react";

import Query from "./Query";
import "./AllQueries.css";

const AllQueries = (props) => {
  const { queries, onSelect } = props;

  if (queries.length === 0) {
    return (
      <p className="AllQueries__notification">
        Please select a team & a feature to search for queries
      </p>
    );
  }

  return (
    <div className="AllQueries">
      {queries.map((query, index) => (
        <div className="AllQueries__query" key={index}>
          <Query query={query} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
};

export default AllQueries;
