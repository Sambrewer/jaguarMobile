import {
  GET_BROWSENODES,
  SORT_CARDS
} from '../actions/types';

const INITIAL_STATE = {
  browseNodes: [],
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BROWSENODES:
      return { ...state, browseNodes: action.payload, loading: false };
    case SORT_CARDS:
      return { ...state, browseNodes: action.payload };
    default:
      return state;
  }
};
