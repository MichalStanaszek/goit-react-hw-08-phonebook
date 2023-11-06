// import { Link } from 'react-router-dom';
import { H1, Img, StyledDiv } from './Home.styled';

import home from './home.jpg';

export const Home = () => {
  return (
    <StyledDiv>
      <H1>Welcome in PhoneBook app! Your new place to manage contacts.</H1>
      <Img src={home} alt="home" />
    </StyledDiv>
  );
};
