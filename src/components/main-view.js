import React, { Component, Fragment } from "react";

import MovieList from "../containers/mainView/movie-list.js";
import Categories from "../containers/mainView/categories.js";
import SearchBar from "../containers/mainView/search-bar.js";

class MainView extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <SearchBar />
        <Categories />
        <MovieList />
      </div>
    );
  }
}

export default MainView;
