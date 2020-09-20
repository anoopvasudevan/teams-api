import React, { useState, useRef, useEffect } from "react";

import "./Select.css";

const Select = (props) => {
  const [loadedOptions, setLoadedOptions] = useState(props.options);
  const [selectOption, setSelectOption] = useState("Select option");
  const [showOptions, setShowOptions] = useState(false);
  const [cursor, setCursor] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", documentClickedHandler);
    return () => {
      document.removeEventListener("click", documentClickedHandler);
    };
  }, []);

  const documentClickedHandler = (e) => {
    if (!inputRef.current.contains(e.target)) setShowOptions(false);
  };

  const inputChangedHandler = (e) => {
    setShowOptions(true);
    const searchInput = e.target.value.trim().toLowerCase();
    setLoadedOptions(
      props.options.filter(
        (option) => option.toLowerCase().indexOf(searchInput) !== -1
      )
    );
  };

  const inputClickedHandler = (e) => {
    // console.log('clicked')
    setShowOptions((state) => !state);
  };

  const keyPressHandler = (e) => {
    // console.log(e.keyCode);
    if (e.keyCode === 40) {
      if (cursor < loadedOptions.length - 1) {
        setCursor((cursor) => cursor + 1);
      }
      setShowOptions(true);
    }

    if (e.keyCode === 38) {
      if (cursor > 0) {
        setCursor((cursor) => cursor - 1);
      }
      setShowOptions(true);
    }

    if (e.keyCode === 13) {
      optionClickedHandler(loadedOptions[cursor]);
    }
  };

  const optionClickedHandler = (option) => {
    // console.log(option)
    inputRef.current.value = "";
    setSelectOption(option);
    setLoadedOptions(props.options);
    setShowOptions(false);
    setCursor(0);
    props.onOptionSelect(option);
  };

  return (
    <div className="SelectContainer">
      <div className="SelectInput">
        <input
          type="text"
          placeholder={selectOption}
          onChange={inputChangedHandler}
          onClick={inputClickedHandler}
          // onFocus={(e) => {
          //   setShowOptions(true);
          // }}
          onBlur={() => {
            setShowOptions(false);
          }}
          onKeyDown={keyPressHandler}
          ref={inputRef}
          disabled={!props.inputEnabled}
        />
        {/* <span></span> */}
      </div>
      {showOptions && (
        <div className="SelectOptionsContainer">
        <div className="SelectOptions">
          {loadedOptions.map((option, index) => {
            return (
              <div
                key={index}
                className={`SelectOptions__option ${
                  selectOption === option && "SelectOptions__option_selected"
                } ${cursor === index && "SelectOptions__option_focus"}`}
                onMouseDown={optionClickedHandler.bind(null, option)}
              >
                {option}
              </div>
            );
          })}
        </div>
        </div>

      )}
      
    </div>
    
  );
};

export default Select;
