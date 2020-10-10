import React, { Component, Suspense, lazy } from "react";
import { Route } from "react-router-dom";

import { getMovieDetails } from "../../service/API";

import {
  PosterCSS,
  InfoBlockCSS,
  DetailsBlockCSS,
  MovieTitleCSS,
  ScoreCSS,
  SubcaptionCSS,
  OverviewCSS,
  GenresListCSS,
  ListItemCSS,
  AddBlockCSS,
  LinkCSS,
} from "./styledDetailsPage";

import { ButtonBack } from "../ButtonBack/ButtonBack";

const AsyncCast = lazy(() =>
  import("./Cast/Cast" /* webpackChankName: "cast" */)
);
const AsyncReviews = lazy(() =>
  import("./Review/Reviews" /* webpackChankName: "reviews" */)
);

export default class DetailsPage extends Component {
  state = {
    movieData: {},
  };

  getDetails = async (id) => {
    const movieData = await getMovieDetails(id);
    this.setState({ movieData });
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.getDetails(id);
    console.log(id);
    console.log(this.props);
  };

  handleGoBack = () => {
    const { state } = this.props.location;
  
    if (state) {
      this.props.history.push(state.from);
      return;
    }
  
    this.props.history.push({
      pathname: '/',
    });
  };
  render() {
    const {
      poster_path: imageURL,
      title,
      release_date: release,
      vote_average: vote,
      overview,
      genres,
    } = this.state.movieData;

    const { url, path } = this.props.match;
    const { state } = this.props.location;
    console.log(state);
    return (
      <div>
        <ButtonBack handleClick={this.handleGoBack} />
        {title ? (
          <DetailsBlockCSS>
            <PosterCSS
              src={`https://image.tmdb.org/t/p/w500/${imageURL}`}
              alt={title}
            />
            <InfoBlockCSS>
              <MovieTitleCSS>{`${title} (${release.slice(
                0,
                4
              )})`}</MovieTitleCSS>
              <ScoreCSS>User score: {vote}</ScoreCSS>
              <SubcaptionCSS>Overview:</SubcaptionCSS>
              <OverviewCSS>{overview}</OverviewCSS>
              <SubcaptionCSS>Genres:</SubcaptionCSS>
              <GenresListCSS>
                {genres.map(({ id, name }) => (
                  <ListItemCSS key={id}>{name}</ListItemCSS>
                ))}
              </GenresListCSS>
            </InfoBlockCSS>
          </DetailsBlockCSS>
        ) : (
          ""
        )}
        <AddBlockCSS>
          <SubcaptionCSS>Additional Information</SubcaptionCSS>
          <LinkCSS to={{ pathname: `${url}/cast`, state: state }}>Cast</LinkCSS>
          <LinkCSS to={{ pathname: `${url}/reviews`, state: state }}>
            Reviews
          </LinkCSS>
        </AddBlockCSS>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path={`${path}/cast`} component={AsyncCast} />
          <Route path={`${path}/reviews`} component={AsyncReviews} />
        </Suspense>
      </div>
    );
  }
}
