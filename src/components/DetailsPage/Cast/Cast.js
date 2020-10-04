import React, { Component } from "react";

import { getCastByID } from "../../../service/API";

class Cast extends Component {
  state = {
    results: [],
  };

  getCastData = async () => {
    const { id } = this.props;
    const data = await getCastByID(id);
    console.log(data.cast);
    this.setState({ results: data.cast });
  };

  componentDidMount = () => {
    this.getCastData();
  };

  render() {
    const { results } = this.state;

    return (
      <ul>
        {results.map(({ character, name, profile_path, cast_id }) => (
          <li key={cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt="Not Available"
            />
            <p>{name}</p>
            <p>{`Character: ${character}`}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export { Cast };
