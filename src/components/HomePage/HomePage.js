import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getTrending } from "../../service/API";

class TrendingList extends Component {
  state = {
    results: [],
  };

  componentDidMount = () => {
    this.getList();
  };

  getList = async () => {
    try {
      const results = await getTrending();
      this.setState(results);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { results } = this.state;
    console.log(results);

    return (
      <ul>
        {results.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export { TrendingList };
