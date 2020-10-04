import React from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { TrendingList } from "./components/HomePage/HomePage";
import { SearchPage } from "./components/SearchPage/SearchPage";
import { DetailsPage } from './components/DetailsPage/DetailsPage';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={TrendingList} />
      <Route exact path="/movies" component={SearchPage} />
      <Route path="/movies" component={DetailsPage} />
    </Switch>
  </div>
);

export default App;
