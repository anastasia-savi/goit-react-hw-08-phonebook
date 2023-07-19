import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={css.label}>
      <TextField
        id="standard-basic"
        label="Find contacts by name"
        variant="standard"
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
