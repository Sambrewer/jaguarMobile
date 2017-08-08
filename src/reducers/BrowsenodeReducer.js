import {
  GET_BROWSENODES,
  GET_NODE_IMG
} from '../actions/types';

const INITIAL_STATE = {
  browseNodes: [],
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BROWSENODES:
      return { ...state, browseNodes: action.payload, loading: false };
    default:
      return state;
  }
};
