import React from 'react';
import TextField from '@mui/material/TextField';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value));
    console.log(event.currentTarget.value );
  };

  return (
    <label className={css.label}>
      <TextField
        id="standard-basic"
        label="Find contacts by name"
        variant="standard"
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;
