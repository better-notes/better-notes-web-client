import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import createNote from '../../api-interaction/createNote';

import './TagInput.css';

function TagInput() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  function addNote(event) {
    if (event.key === 'Enter') {
      if (inputValue.trim() !== '') {
        dispatch(createNote(inputValue));
        setInputValue('');
      } else {
        setInputValue('');
      }
    }
  }
  return (
    <div className="tagInput">
      <input
        className="noteInput fullWidth"
        type="text"
        placeholder="Add note..."
        onKeyPress={addNote}
        onChange={(event) => { setInputValue(event.target.value); }}
        value={inputValue}
      />
    </div>
  );
}

export default TagInput;
