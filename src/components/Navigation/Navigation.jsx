import { useAuth } from 'hooks';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>{isLoggedIn ? <Link to="/contacts">Contacts</Link> : null}</div>
    </>
  );
};
