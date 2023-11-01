import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';

import { Container, StyledText, StyledImg } from './Error.styled';

import errorIcon from './error.png';

export const Error = () => {
  const error = useSelector(selectError);
  return (
    <Container>
      <StyledImg src={errorIcon} alt="error icon" />
      <StyledText>Sorry, unexpected issue occured: {error}</StyledText>
    </Container>
  );
};
