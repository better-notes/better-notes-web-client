import axios from 'axios';
import { changeNote, failChangeNote } from '../redux/actions/actions';
import settings from '../settings';

export default function updateNote(note, newText) {
  const noteWords = newText.split(' ');
  const noteContent = { ...note, text: newText, tags: [] };
  const punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/g;
  noteWords.forEach((word) => {
    if (word[0] === '#') {
      const tag = word.replace(punctRE, '');
      noteContent.tags.push({ name: tag });
    }
  });
  return async (dispatch) => {
    try {
      const response = await axios.put(settings.UPDATE_NOTE_API, [noteContent]);
      dispatch(changeNote(response.data));
    } catch (error) {
      dispatch(failChangeNote(error));
    }
  };
}
