import React from 'react';
import './NoteColumn.css'
import NoteList from '../NoteList/NoteList'

class NoteColumn extends React.Component {
    render() {
        return (
            <div className='noteColumn'>
                <div className='tagTitle'>Lorem Ipsum</div>
                <input className='searchInput fullWidth inputMargin' type="text" placeholder="Add note.."></input>
                <NoteList />
            </div>
        )
    }
}

export default NoteColumn