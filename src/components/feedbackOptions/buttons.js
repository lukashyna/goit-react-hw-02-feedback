import React from 'react';
import PropTypes from 'prop-types';
import styles from './buttons.module.css';

const Buttons = ({ func, option }) => (
  <button className={styles.buttons} type="button" onClick={func} name={option}>
    {option}
  </button>
);
Buttons.propTypes = {
  func: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
};
export default Buttons;
