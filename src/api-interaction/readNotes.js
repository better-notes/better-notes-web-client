import axios from 'axios';
import { finishReadNotes, failReadNotes } from '../redux/actions/actions';
import settings from '../settings';

export default function readNotes(limit = 20, offset = 0) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${settings.READ_NOTES_API}?limit=${limit}&offset=${offset}`);
      dispatch(finishReadNotes(response.data));
    } catch (error) {
      dispatch(failReadNotes(error));
    }
  };
}
