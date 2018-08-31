import { combineReducers } from "redux";
import MoviesReducer from "./reducer_movies";
import SingleMovieReducer from "./reducer_singleMovie";

const rootReducer = combineReducers({
  movies: MoviesReducer,
  singleMovie: SingleMovieReducer
});

export default rootReducer;
