import React, { Component } from "react";

import { getCastByID } from "../../../service/API";

import { CastMarkup } from "./CastMarkup";

export default class Cast extends Component {
  state = {
    results: [],
  };

  getCastData = async (id) => {
    try {
      const data = await getCastByID(id);
      this.setState({ results: [...data.cast] });
    } catch {}
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.getCastData(id);
  };

  render() {
    const { results } = this.state;
    return <CastMarkup results={results} />;
  }
}
