import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteById }) => {
  return (
    <ol className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={css.button}
            onClick={() => deleteById(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
