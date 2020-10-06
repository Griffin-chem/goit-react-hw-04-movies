import React, { Component } from "react";

import { searchMovieByRequest } from "../../service/API";

import {
  ListCSS,
  ListItemCSS,
  LinkCSS,
  SearchFieldCSS,
  SearchButtonCSS,
} from "./styledSearchPage";

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
          <SearchFieldCSS
            type="text"
            onChange={this.handleInput}
            value={query}
            placeholder="Input movie to search..."
          />
          <SearchButtonCSS type="submit" value="Search" />
        </form>
        <ListCSS>
          {results.map(({ id, title }) => (
            <ListItemCSS key={id}>
              <LinkCSS to={`/movies/${id}`}>{title}</LinkCSS>
            </ListItemCSS>
          ))}
        </ListCSS>
      </div>
    );
  }
}

export { SearchPage };
