import { PropTypes } from 'prop-types';
import React from 'react';

const Tile = ({ value, index, handleFlip, flipAllowed }) => {

  return (
    <div className="col-3 p-3 border border-black" key={index}>
      <button 
        type='button' 
        disabled={value.isFlipped || value.isMatched || !flipAllowed} 
        onClick={() => handleFlip(index)}
      >
        <img 
          src={value.isFlipped || value.isMatched 
                ? value.logo 
                : "https://upload.wikimedia.org/wikipedia/commons/a/a3/Emoji_u1f939_1f3fd.svg"} 
          alt="img" 
          width="100vw" 
          style={{
            filter: !value.isMatched 
                    ? "grayscale(50%)" 
                    : "grayscale(100%)"
          }}
        />
      </button>
    </div>
  );

};

Tile.propTypes = {
  value: PropTypes.shape({
    isFlipped: PropTypes.bool.isRequired,
    isMatched: PropTypes.bool.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleFlip: PropTypes.func.isRequired,
  flipAllowed: PropTypes.bool.isRequired,
};

export default Tile;
