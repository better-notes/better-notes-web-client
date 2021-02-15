const settings = {
  CREATE_NOTE_API: `${process.env.REACT_APP_BACKEND_URL}api/v1/note/create/`,
  READ_NOTES_API: `${process.env.REACT_APP_BACKEND_URL}api/v1/note/read/`,
  UPDATE_NOTE_API: `${process.env.REACT_APP_BACKEND_URL}api/v1/note/update/`,
  DELETE_NOTE_API: `${process.env.REACT_APP_BACKEND_URL}api/v1/note/delete/`,
};

export default settings;
