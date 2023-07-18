import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default class ContactList extends React.Component {
  render() {
    const contacts = this.props.contacts;
    const deleteCont = this.props.delete;

    return (
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contact} key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              className={css.button}
              onClick={() => deleteCont(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      nunber: PropTypes.number.isRequired,
      delete: PropTypes.func.isRequired,
    })
  ),
};
