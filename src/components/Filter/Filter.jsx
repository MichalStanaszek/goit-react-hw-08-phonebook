import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

import { StyledInput } from 'components/ContactForm/ContactForm.styled';
import { StyledLabel } from './Filter.styled';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <StyledLabel>
      Find contacts by name
      <StyledInput
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Search by name"
      />
    </StyledLabel>
  );
};
