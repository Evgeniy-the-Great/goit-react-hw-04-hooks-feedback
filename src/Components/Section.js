import React from 'react';
import './section.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
