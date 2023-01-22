import React from 'react';

import './Button.css';

const Button = (props) => {
  let b = `button ${props.className}`;
 
  return (
    <button type={props.type} className={b} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
