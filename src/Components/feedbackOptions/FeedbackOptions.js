import React from "react";
import "./FeedbackOptions.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="Btn-Box">
      {options.map(({ name, title }) => (
        <button
          key={name}
          type="button"
          name={name}
          onClick={onLeaveFeedback}
          className="Btn"
        >
          {title}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
