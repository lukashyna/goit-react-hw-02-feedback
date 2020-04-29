import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ func, option }) => (
  <button type="button" onClick={func} name={option}>
    {option}
  </button>
);
Buttons.propTypes = {
  func: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
};
export default Buttons;
