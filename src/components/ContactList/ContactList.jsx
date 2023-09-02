import React from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContact, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import Button from '@mui/material/Button';

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
        <li className={css.item} key={id}>
          <p className={css.contact}>
            {name}: {number}
          </p>
          <Button
            style={{ height: '30px' }}
            type="button"
            variant="outlined"
            className={css.button}
            onClick={() => deleteContactt(id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ol>
  );
};

export default ContactList;
