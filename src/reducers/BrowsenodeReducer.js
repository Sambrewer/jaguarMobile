import {
  GET_BROWSENODES
} from '../actions/types';

const INITIAL_STATE = {
  browseNodes: [],
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  console.log(action, state);
  switch (action.type) {
    case GET_BROWSENODES:
      return { ...state, browseNodes: action.payload, loading: false };
    default:
      return state;
  }
};
