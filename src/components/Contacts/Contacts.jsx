import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectError } from 'redux/contacts/selectors';

import { ContactForm, ContactList, Filter, Error } from '../index';
import { StyledWrapper, StyledH1, StyledP } from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <StyledWrapper>
          <StyledH1>Phonebook</StyledH1>
          <StyledP>New contact</StyledP>
          <ContactForm />
          <h2 style={{ textAlign: 'center' }}>Contacts: {contacts.length}</h2>
          <Filter />
          <ContactList />
        </StyledWrapper>
      )}
    </>
  );
};
