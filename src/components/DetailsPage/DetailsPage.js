import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { getMovieDetails } from "../../service/API";

import { Cast } from "./Cast/Cast";
import { Reviews } from "./Review/Reviews";

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

    const { url, path } = this.props.match;

    return (
      <div>
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
          <LinkCSS to={`${url}/cast`}>Cast</LinkCSS>
          <LinkCSS to={`${url}/reviews`}>Reviews</LinkCSS>
        </AddBlockCSS>
        <Switch>
          <Route path={`${path}/cast`} component={Cast} />
          <Route
            path={`${path}/reviews`}
            render={() => <Reviews id={id} />}
          />
        </Switch>
      </div>
    );
  }
}
