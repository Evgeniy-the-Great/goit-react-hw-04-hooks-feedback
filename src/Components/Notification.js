import React from 'react';
import './section.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className="section-text">{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
