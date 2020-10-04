import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import { getMovieDetails } from "../../service/API";

import { Cast } from './Cast/Cast';

class DetailsPage extends Component {
  state = {
    movieData: {},
  };

  getDetails = async (id) => {
    const movieData = await getMovieDetails(id);
    this.setState({ movieData });
  };

  componentDidMount = () => {
    const id = this.props.location.pathname.slice(8);
    this.getDetails(id);
    console.log(this.props)
  };

  render() {
    const {
      id,
      poster_path: imageURL,
      title,
      release_date: release,
      vote_average: vote,
      overview,
      genres,
    } = this.state.movieData;

    const { url } = this.props.match;

    return (
      <div>
        {title ? (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500/${imageURL}`}
              alt={title}
            />
            <p>{`${title} (${release.slice(0, 4)})`}</p>
            <p>User score: {vote}</p>
            <p>Overview:</p>
            <p>{overview}</p>
            <p>Genres:</p>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </>
        ) : (
          ""
        )}
        <Link to={`${url}/${id}/cast`}>Cast</Link>
        <Link to={`${url}/${id}/reviews`}>Reviews</Link>
        <Route path={`${url}/${id}/cast`} render={() => (<Cast id={id} />)} />
      </div>
    );
  }
}

export { DetailsPage };
