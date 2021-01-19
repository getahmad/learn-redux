const globalState = {
  keywords: null,
  movies: null,
  isLoading: false,
  isError: false,
};

const rootReducer = (state = globalState, action) => {
  return state;
};

export default rootReducer;
