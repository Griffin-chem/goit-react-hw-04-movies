import React, { Component } from "react";

import { getCastByID } from "../../../service/API";

import {
  CastListCSS,
  ListItemCSS,
  ActorCSS,
  CharCSS,
  CastImageCSS,
} from "./styledCast";

export default class Cast extends Component {
  state = {
    results: [],
  };

  getCastData = async (id) => {
    try { const data = await getCastByID(id) 
    this.setState({ results: [...data.cast] })}
    catch {console.log("Error!")};
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.getCastData(id);
  };

  render() {
    const { results } = this.state;
    console.log(this.props);
    return (
      <CastListCSS>
        {results.map(({ character, name, profile_path, cast_id }) => (
          <ListItemCSS key={cast_id}>
            <CastImageCSS
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt="Not Available"
            />
            <ActorCSS>{name}</ActorCSS>
            <CharCSS>{`Character: ${character}`}</CharCSS>
          </ListItemCSS>
        ))}
      </CastListCSS>
    );
  }
}