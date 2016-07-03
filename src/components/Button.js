/* import React from 'react';

const Button = (props) =>
  <button type="button" class="btn btn-default btn-lg">{props.content}</button>;

export default Button; */

import React from 'react';

const Button = ({ children, styles, ...rest }) => {
  const addStyle = () => {
    const baseStyle = 'btn btn-default btn-lg';
    return styles ? `${baseStyle}  ${styles}` : baseStyle;
  };
  return (
    <button type="button" className={addStyle()} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: React.PropTypes.string,
  styles: React.PropTypes.string
};

export default Button;
