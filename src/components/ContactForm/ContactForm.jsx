import { useState } from 'react';
import css from './ContactForm.module.css';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContact } from 'redux/selectors';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);

  const handleInputChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        if (!event.currentTarget.value.trim()) {
          return;
        }
        setName(event.currentTarget.value);
        break;
      case 'number':
        if (!event.currentTarget.value.trim()) {
          return;
        }
        setNumber(event.currentTarget.value);
        break;
      default:
        console.log('Sorry, wrong name');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.find(cont => cont.name === name)) {
      alert(`${name} is already in contacts`);
    } else {

      dispatch(addContact({ name, phone: number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        <TextField
          id="standard-basic"
          label="Phone"
          variant="standard"
          type="tel"
          value={number}
          onChange={handleInputChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
