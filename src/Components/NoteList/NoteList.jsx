/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import readNotes from '../../api-interaction/readNotes';
import Note from '../Note/Note';

function NoteList() {
  const { notes, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(readNotes()); }, []);
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
