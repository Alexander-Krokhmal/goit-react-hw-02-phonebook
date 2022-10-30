import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  telInputId = nanoid();

  handleChange = e => {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const name = this.state;
    // const number = this.state;
    e.preventDefault();
    // console.log('this.state :>> ', this.state);
    this.setState(prevState => {return { contacts: [...prevState.contacts, name] }});
  };

  // handleSubmit = (name, number) => {
  //   this.setState(prevState => {return { contacts: [...prevState.contacts, {name: name, number: number}] }});
  // };

  render() {
    // const name = this.state;

    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId}>Name </label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.nameInputId}
              value={this.state.name}
              placeholder="Alex Krom"
              onChange={this.handleChange}
            />

            <label htmlFor={this.telInputId}>Number </label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={this.telInputId}
              value={this.state.number}
              placeholder="227-91-26"
              onChange={this.handleChange}
            />

            <button type="submit">Add contact</button>
          </form>
        </Section>

        <Section title="Contacts">
          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.name}>
                <span> {contact.name}: {contact.number}</span>
              </li>
            )
            )}
            
          </ul>
        </Section>
      </div>
    );
  }
}

export default App;
