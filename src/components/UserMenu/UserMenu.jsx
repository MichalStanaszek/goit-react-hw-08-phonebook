import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Container, LogoutButton, StyledP, UserTitle } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <Container>
      <StyledP>
        Welcome, <UserTitle>{user.name}</UserTitle>
      </StyledP>
      <LogoutButton type="button" onClick={handleLogOut}>
        Logout
      </LogoutButton>
    </Container>
  );
};
