import React from "react";

import { HeaderCSS, HeaderItemCSS, LinkCSS } from './slyledHeader';

const Header = () => (
  <HeaderCSS>
    <HeaderItemCSS>
      <LinkCSS to="/">Home</LinkCSS>
    </HeaderItemCSS>
    <HeaderItemCSS>
      <LinkCSS to="/movies">Movies</LinkCSS>
    </HeaderItemCSS>
  </HeaderCSS>
);

export { Header };
