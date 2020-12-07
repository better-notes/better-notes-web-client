import React from 'react';
import './TagInput.css'

class TagInput extends React.Component {
    render() {
        return (
            <div className='tagInput'>
                <input className='searchInput fullWidth' type="text" placeholder="Add tag.."></input>
            </div>
        )
    }
}

export default TagInput