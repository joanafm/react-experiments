/* import React from 'react';

const Button = (props) =>
  <button type="button" class="btn btn-default btn-lg">{props.content}</button>;

export default Button; */

import React from 'react';

const Button = (props) =>
  <button type="button" className="btn btn-default btn-lg">
    {props.content}
  </button>;

Button.propTypes = {
  content: React.PropTypes.string
};

export default Button;
