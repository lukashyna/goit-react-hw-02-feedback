import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.list}>
    <li className={styles.listItem}>Good: {good}</li>
    <li className={styles.listItem}>Neutral: {neutral}</li>
    <li className={styles.listItem}>Bad: {bad}</li>
    <li className={styles.listItem}>Total: {total}</li>
    <li className={styles.listItem}>Percentage: {positivePercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
