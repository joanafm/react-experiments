/* import React from 'react';

const Button = (props) =>
  <button type="button" class="btn btn-default btn-lg">{props.content}</button>;

export default Button; */

import React from 'react';

const Button = ({ children, ...rest }) =>
  <button type="button" className="btn btn-default btn-lg" {...rest}>
    {children}
  </button>;

Button.propTypes = {
  children: React.PropTypes.string
};

export default Button;

/* const Button = ({ children, styles, ...rest }) => (
  const _styles = `btn btn-default btn-lg ${styles}`;
  <button type="button" className={_styles} {...rest}>
    { children }
  </button>
); */

// talvez tenhas que verificar se os styles estão definidos antes de fazer a interpolation
