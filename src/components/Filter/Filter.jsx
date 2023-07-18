import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default class Filter extends React.Component {
  render() {
    const filter = this.props.value;
    const onChange = this.props.onChange;
    return (
      <label className={css.label}>
        <span className={css.span}>Find contacts by name</span>
        <input type="text" value={filter} onChange={onChange} />
      </label>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
