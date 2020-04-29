import React from 'react';
import PropTypes from 'prop-types';

const NoFeedback = ({ message }) => <span>{message}</span>;

NoFeedback.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoFeedback;
