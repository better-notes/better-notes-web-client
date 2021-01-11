export const ACTION_NAMES = {
  START_FETCH: 'START_FETCH',
  FAIL_FETCH: 'FAIL_FETCH',
  FINISH_FETCH: 'FINISH_FETCH',
  ADD_NOTE: 'ADD_NOTE',
  FAIL_ADD_NOTE: 'FAIL_ADD_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
  FAIL_DELETE_NOTE: 'FAIL_DELETE_NOTE',
  EDIT_NOTE: 'EDIT_NOTE',
  FAIL_EDIT_NOTE: 'FAIL_EDIT_NOTE',
};
export const failFetchNotes = (error) => ({
  type: ACTION_NAMES.FAIL_FETCH,
  payload: error,
});
export const finishFetchNotes = (data) => ({
  type: ACTION_NAMES.FINISH_FETCH,
  payload: data,
});
export const addNote = (data) => ({
  type: ACTION_NAMES.ADD_NOTE,
  payload: data,
});
export const failAddNote = (error) => ({
  type: ACTION_NAMES.FAIL_ADD_NOTE,
  payload: error,
});

export const removeNote = (data) => ({
  type: ACTION_NAMES.DELETE_NOTE,
  payload: data,
});

export const failDeleteNote = (error) => ({
  type: ACTION_NAMES.FAIL_DELETE_NOTE,
  payload: error,
});

export const changeNote = (data) => ({
  type: ACTION_NAMES.EDIT_NOTE,
  payload: data,
});

export const failChangeNote = (error) => ({
  type: ACTION_NAMES.FAIL_EDIT_NOTE,
  payload: error,
});
