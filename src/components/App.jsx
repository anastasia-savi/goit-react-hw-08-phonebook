import {useState, useEffect} from 'react';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import { nanoid } from 'nanoid/non-secure';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {

const [contacts, setContacts] = useState([]);
const [filter, setFilter] = useState('');

 const formHandlerSubmit = (name, number) => {
    if (contacts.find(cont => cont.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(state => [contact, ...state])
    }
  };

   useEffect(() =>  {
    const saveContacts = localStorage.getItem('contacts');
    const parseCont = JSON.parse(saveContacts);

    if (parseCont) {
      setContacts(parseCont);
    }
  }, [])

  useEffect((prevProps, prevState) => {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    if(contacts.length === 0){
      localStorage.removeItem('contacts')
    }
  }, [contacts])

  const changeFilter = event => {

    setFilter(event.currentTarget.value);
  };

  const getFiltred = () => {

    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(state =>
      contacts.filter(contact => contact.id !== contactId))
  };

    const visibleContacts = getFiltred();
    return (
      <div className='div'>
        <Section title="Phonebook">
          <ContactForm onSubmit={formHandlerSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={visibleContacts}
            deleteById={deleteContact}
          />
        </Section>
      </div>
    );
  }

export default App;
