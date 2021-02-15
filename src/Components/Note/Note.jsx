/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import Tag from '../Tag/Tag';
import './Note.css';
import { ReactComponent as EditIco } from './pencil-edit.svg';
import { ReactComponent as TrashIco } from './trash-empty.svg';
import deleteNote from '../../api-interaction/deleteNote';
import updateNote from '../../api-interaction/updateNote';

function Note({ note }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);
  const [inputValue, setInputValue] = useState(note.text);
  const dispatch = useDispatch();
  function editSubmit(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      if (inputValue.trim() !== '') {
        dispatch(updateNote(note, inputValue));
        setInputValue(inputValue);
        setIsEditActive(false);
      } else {
        setInputValue(inputValue);
      }
    }
  }
  const tagsList = note.tags.map((tag) => (
    <Tag tag={tag} key={tag.name} />
  ));
  return (
    <div
      className="noteColumn"
      onFocus={() => setIsHovered(true)}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onBlur={() => setIsHovered(false)}
    >
      {(isEditActive)
        ? (
          <TextareaAutosize
            className="noteInput fullWidth"
            type="text"
            onKeyPress={editSubmit}
            value={inputValue}
            onChange={(event) => { setInputValue(event.target.value); }}
          />
        ) : <div className="noteText">{note.text}</div>}
      <div className="tagsList">{tagsList}</div>
      <div className={(isHovered) ? 'active' : 'disabled'}>
        <EditIco onClick={() => { setIsEditActive(!isEditActive); }} />
        <TrashIco onClick={() => dispatch(deleteNote(note))} />
      </div>
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    id_: PropTypes.string,
    text: PropTypes.string,
    created_at: PropTypes.string,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }).isRequired,
    ).isRequired,
    map: PropTypes.func,
  }).isRequired,
};

export default Note;
