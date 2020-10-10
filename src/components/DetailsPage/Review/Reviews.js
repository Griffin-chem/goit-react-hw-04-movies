import React, { Component } from "react";

import { getReveiwsByID } from "../../../service/API";

import {
  ReviewsListCSS,
  ListItemCSS,
  AuthorCSS,
  ReviewCSS,
} from "./styledReview";

export default class Reviews extends Component {
  state = {
    results: [],
  };

  getReviewData = async (id) => {
    try {
      const data = await getReveiwsByID(id);
      this.setState({ results: data.results });
    } catch {}
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.getReviewData(id);
  };

  render() {
    const { results } = this.state;

    return (
      <>
        {results.length ? (
          <ReviewsListCSS>
            {results.map(({ id, author, content }) => (
              <ListItemCSS key={id}>
                <AuthorCSS>{author}</AuthorCSS>
                <ReviewCSS>{content}</ReviewCSS>
              </ListItemCSS>
            ))}
          </ReviewsListCSS>
        ) : (
          <div>No reviews available yet</div>
        )}
      </>
    );
  }
}
