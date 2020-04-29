import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './buttons';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <Buttons func={onLeaveFeedback} option={option} key={option} />
    ))}
  </div>
);
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default FeedbackOptions;
