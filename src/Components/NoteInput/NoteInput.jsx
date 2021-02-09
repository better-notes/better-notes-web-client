import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import createNote from '../../api-interaction/createNote';
import './NoteInput.css';

function NoteInput() {
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
    <div className="noteInputWrapper">
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

export default NoteInput;
