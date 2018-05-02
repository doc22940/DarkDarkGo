// Import all action types
import { GET_SEARCH_RESULTS, NEW_QUERY } from '../actions/types';

const initialState = {
  results: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_QUERY:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
