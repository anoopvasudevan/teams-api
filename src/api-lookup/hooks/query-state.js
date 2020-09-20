import { useCallback, useReducer } from "react";

const queryReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, [action.query]: action.value };
    default:
      return state;
  }
};

export const useQueryState = (queries) => {
  const initialState = queries.reduce(
    (all, query) => ({ ...all, [query]: false }),
    {}
  );

  const [queryState, dispatch] = useReducer(queryReducer, initialState);

  const setQueryState = useCallback((query, status) => {
    dispatch({ type: "CHANGE", query, value: status });
  }, []);

  return { queryState, setQueryState };
};
