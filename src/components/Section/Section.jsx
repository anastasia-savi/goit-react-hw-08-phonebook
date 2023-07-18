import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export default class Section extends React.Component {
  render() {
    return (
      <section className={css.section}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
