import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import { nanoid } from 'nanoid/non-secure';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
export default class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formHandlerSubmit = ({ name, number }) => {
    if (this.state.contacts.find(cont => cont.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  componentDidMount() {
    const saveContacts = localStorage.getItem('contacts');
    const parseCont = JSON.parse(saveContacts);

    if (parseCont) {
      this.setState({ contacts: parseCont });
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    if(this.state.contacts.length === 0){
      localStorage.removeItem('contacts')
    }
  }

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFiltred = () => {
    const normFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getFiltred();
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formHandlerSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            deleteById={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
