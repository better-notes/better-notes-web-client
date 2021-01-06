import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import fetchNotes from './api-interaction/fetchNotes';

function App({ notes, dispatch }) {
  return (
    <div className="App">
      <Header />
      <Body notes={notes} dispatch={dispatch} fetchNotes={fetchNotes} />
    </div>
  );
}

App.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id_: PropTypes.string,
      text: PropTypes.string,
      created_at: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  notes: store.notes,
  error: store.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
