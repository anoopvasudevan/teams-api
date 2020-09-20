import React, { useState, useEffect } from "react";

import "./Query.css";

const Query = (props) => {
  const [inputChecked, setInputChecked] = useState(false);

  const { query, onSelect } = props;

  const inputCheckedHandler = () => {
    setInputChecked((state) => !state);
  };

  useEffect(() => {
    onSelect(query, inputChecked);
  }, [inputChecked, onSelect, query]);

  return (
    <>
      <label
        className={`Query ${inputChecked && "Query__checked"}`}
        htmlFor={query}
      >
        <input
          id={query}
          type="checkbox"
          onChange={inputCheckedHandler}
          checked={inputChecked}
        />
        {query}
      </label>
    </>
  );
};

export default Query;
