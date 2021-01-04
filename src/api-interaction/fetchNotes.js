import axios from 'axios';
import { finishFetchNotes, failFetchNotes } from '../redux/actions/actions';

export default function fetchNotes() {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/note/read/?limit=100&offset=0');
      dispatch(finishFetchNotes(response.data));
    } catch (error) {
      dispatch(failFetchNotes(error));
    }
  };
}
