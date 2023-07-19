import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={css.label}>
      <span className={css.span}>Find contacts by name</span>
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
