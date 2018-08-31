import { FETCH_TRAILES } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TRAILES:
      if (action.payload.data) {
        return action.payload.data;
      }
    default:
      return state;
  }
}
