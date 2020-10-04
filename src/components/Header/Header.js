import React from "react";
import { Link } from "react-router-dom";

import { HeaderCSS, HeaderItemCSS } from './slyledHeader';

const Header = () => (
  <HeaderCSS>
    <HeaderItemCSS>
      <Link to="/">Home</Link>
    </HeaderItemCSS>
    <HeaderItemCSS>
      <Link to="/movies">Movies</Link>
    </HeaderItemCSS>
  </HeaderCSS>
);

export { Header };
