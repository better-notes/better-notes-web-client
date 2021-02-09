import React from 'react';
import './Body.css';
import { Container, Row, Col } from 'react-bootstrap';
import NoteInput from '../NoteInput/NoteInput';
import NoteList from '../NoteList/NoteList';

function Body() {
  return (
    <div className="body">
      <Container>
        <NoteInput />
        <Row>
          <Col>
            <NoteList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
