import React, { Component } from "react";
import { Link } from "react-router-dom";

import { searchMovieByRequest } from "../../service/API";

const INITIAL_STATE = {
  query: "",
  results: [],
};

class SearchPage extends Component {
  state = {
    query: "",
    results: [],
  };

  componentDidMount = () => {
    const { search } = this.props.location;
    if (search) {
      const query = search.slice(7);
      this.resultsToShow(query);
    } else {
      this.resetState();
    }
  };

  handleInput = (evt) => {
    evt.preventDefault();
    this.setState({ query: evt.target.value });
  };

  resetState = () => {
    this.setState(INITIAL_STATE);
  };

  resultsToShow = async (query) => {
    const data = await searchMovieByRequest(query);
    this.setState({ results: data.results });
  };

  handleSubmit = (evt) => {
    const { query } = this.state;
    const { history, location } = this.props;
    evt.preventDefault();
    this.resultsToShow(query);
    history.push({ ...location, search: `?query=${query}` });
    this.resetState();
  };

  render() {
    const { query, results } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInput} value={query} />
          <input type="submit" value="Search" />
        </form>
        <ul>
          {results.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export { SearchPage };
