import { connect } from "react-redux";

const MovieSearchResult = (props) => {
  return (
    <>
      <h1>Result</h1>
      {props.isLoading && "loading....."}
      {!props.isLoading &&
        props.movies &&
        props.movies.map((movie) => {
          return (
            <ul key={movie.imdbID}>
              <li>{movie.Title}</li>
            </ul>
          );
        })}
    </>
  );
};
const reduxState = (globalState) => {
  return {
    keywords: globalState.keywords,
    movies: globalState.movies,
    isLoading: globalState.isLoading,
  };
};

export default connect(reduxState)(MovieSearchResult);
