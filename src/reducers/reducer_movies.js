import { FETCH_MOVIES, FETCH_MOVIE } from "../actions/index.js";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      if (action.payload.data.results) {
        return action.payload.data.results;
      }
    case FETCH_MOVIE:
      if (action.payload.data.results) {
        return action.payload.data.results;
      } else {
        return state;
      }
    default:
      return state;
  }
}
