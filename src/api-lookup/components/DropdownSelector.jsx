import React from "react";

import Select from "./Select";
import "./DropdownSelector.css";

const DropdownSelector = (props) => {
  return (
    <div className="DropdownSelector">
      <h3 className={`DS__title ${!props.show && "DS__title_disabled"}`}>
        {props.title}
      </h3>
      <Select
        options={props.options}
        inputEnabled={props.show}
        onOptionSelect={props.onOptionSelect}
      />
    </div>
  );
};

export default DropdownSelector;
