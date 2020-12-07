import React from 'react';
import './NoteList.css'

class NoteList extends React.Component {
    render() {
        return (
            <ul className="noteList">
                <li>
                    <div className='noteBlock'>
                        Island
                    </div>
                </li>
                <li>
                    <div className='noteBlock'>Island</div>
                </li>
                <li>
                    <div className='noteBlock'>Island</div>
                </li>
                <li>
                    <div className='noteBlock'>Island</div>
                </li>
                <li>
                    <div className='noteBlock'>Island</div>
                </li>
            </ul>
        )
    }
}

export default NoteList