import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

import { Loader } from 'components/Loader';

import { StyleUl, StyledLi, StyledButon, Wrapper } from './ContactList.styled';

Notiflix.Notify.init({
  position: 'center-center',
  timeout: 1000,
  pauseOnHover: false,
});

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  filteredContacts.sort((a, b) => a.name.localeCompare(b.name));

  const handleDeleteContact = id => {
    const deletedContact = contacts.find(contact => contact.id === id);
    dispatch(deleteContact(id));
    Notiflix.Notify.info(`${deletedContact.name} successfully deleted.`);
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <StyleUl>
          {filteredContacts.map(contact => (
            <StyledLi key={contact.id}>
              {contact.name}: {contact.number}
              <StyledButon onClick={() => handleDeleteContact(contact.id)}>
                Delete
              </StyledButon>
            </StyledLi>
          ))}
        </StyleUl>
      )}
    </Wrapper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
