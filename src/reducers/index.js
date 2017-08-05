import { combineReducers } from 'redux';
import BrowsenodeReducer from './BrowsenodeReducer';

export default combineReducers({
  browseNodes: BrowsenodeReducer
});
