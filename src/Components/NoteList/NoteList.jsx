/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchNotes from '../../api-interaction/fetchNotes';
import Note from '../Note/Note';

function NoteList() {
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
  const noteList = notes.map((note) => (
    <Note note={note} key={note.id_} />
  ));
  return (
    <div>
      {noteList}
    </div>
  );
}

export default NoteList;
