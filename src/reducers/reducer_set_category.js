import { SET_CATEGORY } from "../actions";

export default function(state = "popular", action) {
  switch (action.type) {
    case SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
