import React from 'react';
import './TagInput.css';

function TagInput() {
  return (
    <div className="tagInput">
      <input className="searchInput fullWidth" type="text" placeholder="Add tag.." />
    </div>
  );
}

export default TagInput;
