import { combineReducers } from 'redux';
import gistReducer from './UserGist';
export default combineReducers({
  gist: gistReducer,
});
