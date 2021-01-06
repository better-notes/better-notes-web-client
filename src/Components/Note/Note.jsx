import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Tag from '../Tag/Tag';
import './Note.css';
import { ReactComponent as EditIco } from './pencil-edit.svg';
import { ReactComponent as TrashIco } from './trash-empty.svg';
import deleteNote from '../../api-interaction/deleteNote';

function Note({ note }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const tagsList = note.tags.map((tag) => (
    <Tag tag={tag} key={tag.name + Math.random()} />
  ));
  return (
    <div
      className="noteColumn"
      key={note.created_at}
      onFocus={() => setIsHovered(true)}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="tagTitle">{note.text}</div>
      <div className="tagsList">{tagsList}</div>
      <div className={(isHovered) ? 'active' : 'disabled'}>
        <EditIco />
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
