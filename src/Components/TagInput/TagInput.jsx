import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import createNote from '../../api-interaction/createNote';

import './TagInput.css';

function TagInput() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  function addNote(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
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
      <TextareaAutosize
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
