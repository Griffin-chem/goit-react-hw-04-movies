import React from 'react';

import {
  SubcaptionCSS,
  AddBlockCSS,
  LinkCSS,
} from "./styledDetailsPage";

export default function ({url, state}) {
  return (
    <AddBlockCSS>
    <SubcaptionCSS>Additional Information</SubcaptionCSS>
    <LinkCSS to={{ pathname: `${url}/cast`, state: state }}>Cast</LinkCSS>
    <LinkCSS to={{ pathname: `${url}/reviews`, state: state }}>
      Reviews
    </LinkCSS>
  </AddBlockCSS>
  )
}