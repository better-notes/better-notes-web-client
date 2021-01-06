import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

function Tag({ tag }) {
  return (
    <div className="tag">
      #
      {tag.name}
    </div>
  );
}

export default Tag;

Tag.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
