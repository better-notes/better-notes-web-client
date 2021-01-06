import axios from 'axios';
import { removeNote, failDeleteNote } from '../redux/actions/actions';

export default function deleteNote(note) {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/note/delete/', [note]);
      dispatch(removeNote(response.data));
    } catch (error) {
      dispatch(failDeleteNote(error));
    }
  };
}
