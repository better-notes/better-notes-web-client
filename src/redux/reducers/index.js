import { ACTION_NAMES } from '../actions/actions';

const initialState = {
  notes: [],
  isFetching: false,
  error: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_NAMES.START_FETCH:
      return { ...state, isFetching: true };
    case ACTION_NAMES.FINISH_FETCH:
      return {
        ...state, isFetching: false, notes: action.payload, error: null,
      };
    case ACTION_NAMES.FAIL_FETCH:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
