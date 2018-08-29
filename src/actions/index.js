import axios from "axios";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE = "FETCH_MOVIE";
export const CHANGE_TYPE = "CHANGE_TYPE";
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
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIE,
    payload: request
  };
}
