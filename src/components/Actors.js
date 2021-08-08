import React from "react";
import { actors } from "../data";
import { v4 as uuidv4 } from "uuid";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, i) => {
        return (
          <div key={uuidv4()}>
            <h2>Name: {actor.name}</h2>
            <ul>
              {actor.movies.map((mov, index) => {
                return <li key={uuidv4()}> {mov} </li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Actors;
