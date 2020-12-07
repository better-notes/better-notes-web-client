import React from 'react';
import './Body.css'
import { Container, Row, Col } from 'react-bootstrap'
import TagInput from '../TagInput/TagInput'
import NoteColumn from '../NoteColumn/NoteColumn'
class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <Container>
                    <TagInput />
                    <Row>
                        <Col>
                            <NoteColumn />
                        </Col>
                        <Col>
                            <NoteColumn />
                        </Col>
                        <Col>
                            <NoteColumn />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Body