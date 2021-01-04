import { ACTION_NAMES } from '../actions/actions';

const initialState = {
  notes: [],
  error: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_NAMES.FINISH_FETCH:
      return {
        ...state, notes: action.payload, error: null,
      };
    case ACTION_NAMES.FAIL_FETCH:
      return { ...state, isFetching: false, error: action.payload };
    case ACTION_NAMES.ADD_NOTE:
      return {
        ...state, notes: [...state.notes, action.payload],
      };
    case ACTION_NAMES.FAIL_ADD_NOTE:
      return state;
    default:
      return state;
  }
}
