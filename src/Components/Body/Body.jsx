import React from 'react';
import './Body.css';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TagInput from '../TagInput/TagInput';
import NoteList from '../NoteList/NoteList';

function Body({
  notes, error, fetchNotes,
}) {
  return (
    <div className="body">
      <Container>
        <TagInput />
        <Row>
          <Col>
            <NoteList notes={notes} error={error} fetchNotes={fetchNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Body.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
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
  ),
  error: PropTypes.shape({
    detail: PropTypes.arrayOf(PropTypes.shape({
      loc: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      msg: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }),
};

Body.defaultProps = {
  notes: [],
  error: {
    detail: [],
  },
};
export default Body;
