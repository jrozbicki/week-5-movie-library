import { combineReducers } from "redux";
import MoviesReducer from "./reducer_movies";
import SingleMovieReducer from "./reducer_singleMovie";
import FetchTrailersReducer from "./reducer_trailers";

const rootReducer = combineReducers({
  movies: MoviesReducer,
  singleMovie: SingleMovieReducer,
  trailers: FetchTrailersReducer
});

export default rootReducer;
