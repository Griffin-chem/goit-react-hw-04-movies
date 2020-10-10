import React, { Component, Suspense, lazy } from "react";
import { Route } from "react-router-dom";

import { getMovieDetails } from "../../service/API";

import { ButtonBack } from "../ButtonBack/ButtonBack";
import { ErrPage } from "../ErrPage/ErrPage";
import Loading from "../Loading/Loading";
import AddBlock from "./AddInfoMarkup";

const AsyncCast = lazy(() =>
  import("./Cast/Cast" /* webpackChankName: "cast" */)
);
const AsyncReviews = lazy(() =>
  import("./Review/Reviews" /* webpackChankName: "reviews" */)
);
const DetailsPageMarkup = lazy(() =>
  import("./DetailPageMarkup" /* webpackChankName: "details" */)
);

export default class DetailsPage extends Component {
  state = {
    movieData: {},
    loading: false,
    err: false,
  };

  getDetails = async (id) => {
    try {
      const movieData = await getMovieDetails(id);
      this.setState({ movieData });
    } catch {
      this.setState({ err: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    const { id } = this.props.match.params;
    this.getDetails(id);
  };

  resetError = () => {
    this.setState({ err: false });
  };

  handleGoBack = () => {
    const { state } = this.props.location;
    if (state) {
      this.props.history.push(state.from);
      return;
    }
    this.props.history.push({
      pathname: "/",
    });
  };

  render() {
    const { movieData, loading, err } = this.state;
    const { url, path } = this.props.match;
    const { state } = this.props.location;
    return (
      <div>
        {err && <ErrPage reset={this.resetError} {...this.props} />}
        {loading && <Loading />}
        {!loading && !err && (
          <>
            {" "}
            {movieData.title && (
              <>
                <ButtonBack handleClick={this.handleGoBack} />
                <Suspense fallback={<Loading />}>
                  <DetailsPageMarkup movie={movieData} />
                </Suspense>
              </>
            )}
            <AddBlock url={url} state={state} />
            <Suspense fallback={<Loading />}>
              <Route path={`${path}/cast`} component={AsyncCast} />
              <Route path={`${path}/reviews`} component={AsyncReviews} />
            </Suspense>
          </>
        )}
      </div>
    );
  }
}
