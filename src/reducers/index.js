import { combineReducers } from "redux";
import MoviesReducer from "./reducer_movies";
import Genres from "./reducer_genres";

const rootReducer = combineReducers({
  movies: MoviesReducer,
  genres: Genres
});

export default rootReducer;
