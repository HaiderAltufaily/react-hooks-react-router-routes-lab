import React from "react";
import { directors } from "../data";
import { v4 as uuidv4 } from "uuid";

function Directors() {
  return (
    <div>
      {" "}
      <h1>Directors Page</h1>
      {directors.map((director, i) => {
        return (
          <div key={uuidv4()}>
            <h2>Name: {director.name}</h2>
            <ul>
              {director.movies.map((movie, i) => {
                return <li key={uuidv4()}>{movie}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Directors;
