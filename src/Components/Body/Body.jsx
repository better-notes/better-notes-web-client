import React from 'react';
import './Body.css';
import { Container, Row, Col } from 'react-bootstrap';
import TagInput from '../TagInput/TagInput';
import NoteColumn from '../NoteColumn/NoteColumn';

function Body() {
  return (
    <div className="body">
      <Container>
        <TagInput />
        <Row>
          <Col>
            <NoteColumn />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
