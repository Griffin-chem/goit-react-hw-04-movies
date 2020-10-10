import React from "react";

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
} from "./styledDetailsPage";

const getYear = (strDate) => {
  return strDate.slice(0, 4);
};

export default function ({ movie }) {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  return (
    <DetailsBlockCSS>
      <PosterCSS
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
      />
      <InfoBlockCSS>
        <MovieTitleCSS>{`${title} (${getYear(release_date)})`}</MovieTitleCSS>
        <ScoreCSS>User score: {vote_average}</ScoreCSS>
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
  );
}
