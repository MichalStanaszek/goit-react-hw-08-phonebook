import { useAuth } from 'hooks';
import { Link } from './Navigation.styled';
import { Header } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Link to="/">Home</Link>
      {isLoggedIn ? <Link to="/contacts">Contacts</Link> : null}
    </Header>
  );
};
