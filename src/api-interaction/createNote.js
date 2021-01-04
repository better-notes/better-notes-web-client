import axios from 'axios';
import { addNote, failAddNote } from '../redux/actions/actions';

export default function createNote(noteText) {
  return async (dispatch) => {
    const noteWords = noteText.split(' ');
    const request = { text: noteText, tags: [] };
    const punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/g;
    noteWords.forEach((word) => {
      if (word[0] === '#') {
        const tag = word.replace(punctRE, '');
        request.tags.push({ name: tag });
      }
    });
    try {
      const response = await axios.post('http://localhost:8000/api/v1/note/create/', [request]);
      dispatch(addNote(response.data[0]));
    } catch (error) {
      dispatch(failAddNote(error));
    }
  };
}
