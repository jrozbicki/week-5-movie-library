import { FETCH_TRAILES, CLEAR_MOVIE_DATA } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TRAILES:
      if (action.payload.data) {
        return action.payload.data;
      }
    case CLEAR_MOVIE_DATA:
      return {};
    default:
      return state;
  }
}
