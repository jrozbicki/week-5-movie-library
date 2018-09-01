import { FETCH_MOVIE_DETAILS, CLEAR_MOVIE_DATA } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      if (action.payload.data) {
        return action.payload.data;
      }
    case CLEAR_MOVIE_DATA:
      return {};
    default:
      return state;
  }
}
