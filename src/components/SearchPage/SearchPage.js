import React, { Component } from "react";

import { searchMovieByRequest } from "../../service/API";

import {
  ListCSS,
  ListItemCSS,
  LinkCSS,
  SearchFieldCSS,
  SearchButtonCSS,
} from "./styledSearchPage";
import { ErrPage } from "../ErrPage/ErrPage";
import Loading from "../Loading/Loading";

const INITIAL_STATE = {
  query: "",
  results: [],
  err: false,
  loading: false,
};

class SearchPage extends Component {
  state = {
    query: "",
    results: [],
    err: false,
    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
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
    try {
      const data = await searchMovieByRequest(query);
      this.setState({ results: data.results });
    } catch {
      this.setState({ err: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSubmit = (evt) => {
    let { query } = this.state;
    if (query) {
      const { history, location } = this.props;
      if (query.includes(" ")) {
        query = query.split(" ").join("+");
      }
      evt.preventDefault();
      this.resultsToShow(query);
      history.push({ ...location, search: `?query=${query}` });
      this.resetState();
    } else {
      this.resetState();
    }
  };

  render() {
    const { query, results, err, loading } = this.state;
    const { location } = this.props;
    return (
      <>
        {err && <ErrPage reset={this.resetError} {...this.props} />}
        {loading && <Loading />}
        {!loading && !err && (
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
            {}
            <ListCSS>
              {results.map(({ id, title }) => (
                <ListItemCSS key={id}>
                  <LinkCSS
                    to={{
                      pathname: `/movies/${id}`,
                      state: { from: location },
                    }}
                  >
                    {title}
                  </LinkCSS>
                </ListItemCSS>
              ))}
            </ListCSS>
          </div>
        )}
      </>
    );
  }
}

export { SearchPage };
