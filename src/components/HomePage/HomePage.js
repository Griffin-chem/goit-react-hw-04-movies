import React, { Component } from "react";

import { getTrending } from "../../service/API";

import { MainListCSS, ListItemCSS, LinkCSS } from "./styledHomePage";

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
    const { location } = this.props;
    console.log("location: ", location);

    return (
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
    );
  }
}

export { TrendingList };
