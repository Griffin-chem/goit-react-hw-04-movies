import React, { Component } from "react";

import { ErrPageCss, CloseCSS } from "./styledErrPage";

export class ErrPage extends Component {
  
  
  handleClick = () => {
    console.log(this.props);
    const { reset } = this.props;
    reset();
    this.props.history.push({
      pathname: '/',
    });
  };

  render() {
    return (
      <ErrPageCss onClick={this.handleClick}>
        <CloseCSS>X</CloseCSS>
        <div>Something went wrong! Please, try again!</div>
      </ErrPageCss>
    );
  }
}
