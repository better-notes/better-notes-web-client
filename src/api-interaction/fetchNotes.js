import { startFetchNotes, finishFetchNotes, failFetchNotes } from '../redux/actions/actions';

export default function fetchBox() {
  return (dispatch) => {
    dispatch(startFetchNotes());
    return fetch('http://localhost:8000/api/v1/note/read/?limit=1&offset=100', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch(finishFetchNotes(result));
        return result;
      })
      .catch((error) => dispatch(failFetchNotes(error)));
  };
}
