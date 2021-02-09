import axios from 'axios';
import { removeNote, failDeleteNote } from '../redux/actions/actions';
import settings from '../settings';

export default function deleteNote(note) {
  return async (dispatch) => {
    try {
      const response = await axios.post(settings.DELETE_NOTE_API, [note]);
      dispatch(removeNote(response.data));
    } catch (error) {
      dispatch(failDeleteNote(error));
    }
  };
}
