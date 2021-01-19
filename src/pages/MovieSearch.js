import { connect } from "react-redux";
import types from "../redux/actions/types";

const MovieSearch = (props) => {
  //   console.log(props);
  return (
    <>
      <h1>Movie Search</h1>
      title:
      <input type="text" onChange={(e) => props.setKeywords(e.target.value)} />
      <br />
      <br />
      <button onClick={props.handleSearch}>search</button>
    </>
  );
};

const reduxDispatch = (dispatch) => {
  return {
    setKeywords: (keywords) =>
      dispatch({ type: types.SEARCH_KEYWORD, payload: keywords }),
    handleSearch: () => dispatch({ type: types.SEARCH_MOVIES_REQUEST }),
  };
};

export default connect(null, reduxDispatch)(MovieSearch);
