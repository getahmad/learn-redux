import React from "react";
import MovieSearch from "./pages/MovieSearch.js";
import MovieSearchResult from "./pages/MovieSearchResult.js";

export default function App() {
  return (
    <div>
      <MovieSearch />
      <hr />
      <MovieSearchResult />
    </div>
  );
}
