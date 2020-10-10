import React from 'react';

import {
  CastListCSS,
  ListItemCSS,
  ActorCSS,
  CharCSS,
  CastImageCSS,
} from "./styledCast";

export const CastMarkup = ({results}) => (
  <CastListCSS>
  {results.map(({ character, name, profile_path, cast_id }) => (
    <ListItemCSS key={cast_id}>
      <CastImageCSS
        src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
        alt="Not Available"
      />
      <ActorCSS>{name}</ActorCSS>
      <CharCSS>{`Character: ${character}`}</CharCSS>
    </ListItemCSS>
  ))}
</CastListCSS>
)