import { combineReducers } from "redux";
import MoviesReducer from "./reducer_movies";
import SingleMovieReducer from "./reducer_singleMovie";
import FetchTrailersReducer from "./reducer_trailers";
import SelectedCategoryReducer from "./reducer_set_category";

const rootReducer = combineReducers({
  movies: MoviesReducer,
  singleMovie: SingleMovieReducer,
  trailers: FetchTrailersReducer,
  selectedCategory: SelectedCategoryReducer
});

export default rootReducer;
