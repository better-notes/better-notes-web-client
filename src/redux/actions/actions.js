export const ACTION_NAMES = {
  START_READ: 'START_READ',
  FAIL_READ: 'FAIL_READ',
  FINISH_READ: 'FINISH_READ',
  ADD_NOTE: 'ADD_NOTE',
  FAIL_ADD_NOTE: 'FAIL_ADD_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
  FAIL_DELETE_NOTE: 'FAIL_DELETE_NOTE',
  EDIT_NOTE: 'EDIT_NOTE',
  FAIL_EDIT_NOTE: 'FAIL_EDIT_NOTE',
};
export const failReadNotes = (error) => ({
  type: ACTION_NAMES.FAIL_READ,
  payload: error,
});
export const finishReadNotes = (data) => ({
  type: ACTION_NAMES.FINISH_READ,
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
