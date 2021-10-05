import React from 'react';
import './statistics.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivFeedback }) => {
  return (
    <div className="statBox">
      <div className="feedbackBox">
        <p className="feedbackBox-Item">
          Good: <span>{good}</span>{' '}
        </p>
        <p className="feedbackBox-Item">
          Neutral: <span>{neutral}</span>
        </p>
        <p className="feedbackBox-Item">
          Bad: <span>{bad}</span>
        </p>
      </div>
      <p className="Total">
        Total: <span>{total}</span>
      </p>
      <p className="Positive">
        Positive feedback: <span>{positivFeedback}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivFeedback: PropTypes.number.isRequired,
};
export default Statistics;
