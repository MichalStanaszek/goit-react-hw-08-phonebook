import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

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
