import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError } from 'redux/selectors';

import { ContactList, Filter, Form, Error } from '../components/index';
import { StyledWrapper, StyledH1, StyledP } from './App.styled';

export const App = () => {
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
          <Form />
          <h2 style={{ textAlign: 'center' }}>Contacts: {contacts.length}</h2>
          <Filter />
          <ContactList />
        </StyledWrapper>
      )}
    </>
  );
};
