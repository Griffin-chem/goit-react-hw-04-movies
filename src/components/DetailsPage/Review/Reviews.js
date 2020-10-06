import React, { Component } from "react";

import { getReveiwsByID } from "../../../service/API";

import { ReviewsListCSS, ListItemCSS, AuthorCSS, ReviewCSS } from './styledReview';

class Reviews extends Component {
  state = {
    results: [],
  };

  getReviewData = async () => {
    const { id } = this.props;
    const data = await getReveiwsByID(id);
    console.log(data.results);
    this.setState({ results: data.results });
  };

  componentDidMount = () => {
    this.getReviewData();
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

export { Reviews };
