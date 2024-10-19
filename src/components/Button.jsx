import React from 'react';

const Button = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="launchbutton">
        <span>launching soon</span>
        <img src={Vector} alt="Vector Icon" className="vectorimage" />
      </button>
    </div>
  );
};

export default Button;
