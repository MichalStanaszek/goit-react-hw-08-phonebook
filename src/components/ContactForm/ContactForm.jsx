import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import { StyledLabel, StyledButton, StyledInput } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const newContact = { id, name, number };
    const form = event.target;
    form.reset();

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      Notiflix.Notify.warning(`${newContact.name} is already in contacts.`);
      return;
    } else {
      Notiflix.Notify.success(`${newContact.name} successfully added.`);
    }

    dispatch(addContact(newContact));
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledLabel>
        <StyledInput
          type="text"
          name="name"
          value={contacts.name}
          placeholder="Enter name"
          onChange={e => setName(e.target.value)}
          required
        />
        <StyledInput
          type="tel"
          name="number"
          value={contacts.number}
          placeholder="Enter number"
          onChange={e => setNumber(e.target.value)}
          required
          pattern="\+?[0-9]{1,4}?[\-. ]?\(?[0-9]{1,3}?\)?[\-. ]?[0-9]{1,4}[\-. ]?[0-9]{1,4}[\-. ]?[0-9]{1,9}"
          title="Phone number must be minimum 5 digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledLabel>
    </form>
  );
};
