import { useAuth } from 'hooks';
import { AuthNav, Navigation, UserMenu } from '../index';
import { Header, Nav } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Nav>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Nav>
    </Header>
  );
};
