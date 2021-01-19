import types from "../actions/types";
//init state
const globalState = {
  keywords: null,
  movies: null,
  isLoading: false,
  isError: false,
};

const rootReducer = (state = globalState, action) => {
  if (action.type === types.SEARCH_KEYWORD) {
    return {
      ...state,
      keywords: action.payload,
    };
  }

  if (action.type === types.SEARCH_MOVIES_REQUEST) {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }

  if (action.type === types.SEARCH_MOVIES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      movies: action.movies,
    };
  }

  if (action.type === types.SEARCH_MOVIES_FAILURE) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      movies: null,
    };
  }

  return state;
};

export default rootReducer;
