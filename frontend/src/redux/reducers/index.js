// This is the root reducer, combine all reducers here.

import { combineReducers } from 'redux';
import resultsReducer from './resultsReducer';

export default combineReducers({
  results: resultsReducer
});
