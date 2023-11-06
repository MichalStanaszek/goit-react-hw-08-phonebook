import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError } from 'redux/selectors';

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
      <Helmet>
        <title>Contacts</title>
      </Helmet>
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
