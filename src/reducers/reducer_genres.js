import { FETCH_GENRES } from "../actions/index.js";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_GENRES:
      if (action.payload.data) {
        return action.payload.data;
      }
    default:
      return state;
  }
}
