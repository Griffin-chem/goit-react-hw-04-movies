import React, { Component } from "react";

import { getCastByID } from "../../../service/API";

import {
  CastListCSS,
  ListItemCSS,
  ActorCSS,
  CharCSS,
  CastImageCSS,
} from "./styledCast";

class Cast extends Component {
  state = {
    results: [],
  };

  getCastData = async () => {
    const { id } = this.props.match.params;
    console.log(this.props);
    const data = await getCastByID(id);
    this.setState({ results: data.cast });
  };

  componentDidMount = () => {
    this.getCastData();
  };

  render() {
    const { results } = this.state;

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

export { Cast };
