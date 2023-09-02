import { useState } from 'react';
import css from './ContactForm.module.css';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContact } from 'redux/selectors';
import Button from '@mui/material/Button';

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
      dispatch(addContact({ name, number }));
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
          style={{ minWidth: '295px' }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
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
          style={{ minWidth: '295px' }}
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          type="tel"
          value={number}
          onChange={handleInputChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button
        className={css.button}
        type="submit"
        variant="outlined"
        style={{ minWidth: '295px' }}
      >
        Add contact
      </Button>
    </form>
  );
}
