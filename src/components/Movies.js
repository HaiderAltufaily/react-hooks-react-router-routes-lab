import React from "react";
import { movies } from "../data";
import { v4 as uuidv4 } from "uuid";
function Movies() {
  return (
    <div>
      {" "}
      <h1>Movies Page</h1>
      {movies.map((movie, i) => {
        return (
          <div key={uuidv4()}>
            <h2> Name: {movie.title} </h2>
            <h4>Time: {movie.time}</h4>
            <ul>
              {movie.genres.map((genre, i) => {
                return <li key={uuidv4()}> {genre} </li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
