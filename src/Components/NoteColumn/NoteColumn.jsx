import React, { useEffect } from 'react';
import './NoteColumn.css';
import { useDispatch, useSelector } from 'react-redux';
import fetchNotes from '../../api-interaction/fetchNotes';
import Tag from '../Tag/Tag';

function NoteColumn() {
  const { notes, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchNotes()); }, []);
  if (error != null) {
    return (
      <div>
        {error.toString()}
      </div>
    );
  }
  const noteList = notes.map((note) => {
    const tagsList = note.tags.map((tag) => (
      <Tag tag={tag} />
    ));
    return (
      <div className="noteColumn" key={note.created_at}>
        <div className="tagTitle">{note.text}</div>
        <div className="tagsList">{tagsList}</div>
      </div>
    );
  });
  return (
    <div>
      {noteList}
    </div>
  );
}

export default NoteColumn;
