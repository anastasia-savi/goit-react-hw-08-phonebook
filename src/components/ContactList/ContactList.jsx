import React from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContact, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const deleteContactt = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFiltred = () => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };

  const visibleContacts = getFiltred();

  return (
    <ol className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.contact} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={css.button}
            onClick={() => deleteContactt(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
};

export default ContactList;
