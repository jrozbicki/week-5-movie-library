import { FETCH_MOVIE_DETAILS } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      if (action.payload.data) {
        return action.payload.data;
      }
    default:
      return state;
  }
}
