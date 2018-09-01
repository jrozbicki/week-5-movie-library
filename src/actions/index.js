import axios from "axios";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE = "FETCH_MOVIE";
export const FETCH_MOVIE_DETAILS = "FETCH_MOVIE_DETAILS";
export const FETCH_TRAILES = "FETCH_TRAILES";
export const CHANGE_TYPE = "CHANGE_TYPE";
export const CLEAR_MOVIE_DATA = "CLEAR_MOVIE_DATE";
export const SET_CATEGORY = "SELECTED_CATEGORY";

const API_KEY = "fd067333da9722a67e0a78739ccecbf1";

export function fetchData(category) {
  const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIES,
    payload: request
  };
}

export function fetchMovie(title) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}&language=en-US`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIE,
    payload: request
  };
}

export function fetchSingleMovie(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIE_DETAILS,
    payload: request
  };
}

export function fetchTrailers(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_TRAILES,
    payload: request
  };
}

export function clearMovieData() {
  return {
    type: CLEAR_MOVIE_DATA
  };
}

export function setCategory(cat) {
  return {
    type: SET_CATEGORY,
    payload: cat
  };
}
