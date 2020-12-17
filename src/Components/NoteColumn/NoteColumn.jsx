import React from 'react';
import './NoteColumn.css';
import NoteList from '../NoteList/NoteList';

function NoteColumn() {
  return (
    <div className="noteColumn">
      <div className="tagTitle">Lorem Ipsum</div>
      <input className="searchInput fullWidth inputMargin" type="text" placeholder="Add note.." />
      <NoteList />
    </div>
  );
}

export default NoteColumn;
