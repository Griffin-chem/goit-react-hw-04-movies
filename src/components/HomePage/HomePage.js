import React, { Component } from "react";

import { getTrending } from "../../service/API";

import { ErrPage } from "../ErrPage/ErrPage";
import { MainListCSS, ListItemCSS, LinkCSS } from "./styledHomePage";
import Loading from "../Loading/Loading";

class TrendingList extends Component {
  state = {
    results: [],
    err: false,
    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    this.getList();
  };

  getList = async () => {
    try {
      const results = await getTrending();
      this.setState(results);
    } catch {
      this.setState({ err: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  resetError = () => {
    this.setState({ err: false });
  };

  render() {
    const { results, err, loading } = this.state;
    const { location } = this.props;

    return (
      <>
        {err && <ErrPage reset={this.resetError} {...this.props} />}
        {loading && <Loading />}
        {!loading && !err && (
          <MainListCSS>
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
          </MainListCSS>
        )}
      </>
    );
  }
}

export { TrendingList };
