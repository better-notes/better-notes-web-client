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
  notes: PropTypes.array,
  dispatch: PropTypes.func,
};

const mapStateToProps = (store) => ({
  notes: store.notes,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
