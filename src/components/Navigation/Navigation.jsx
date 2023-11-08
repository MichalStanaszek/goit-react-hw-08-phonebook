import { Header, Nav, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Header>
      <Nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/contacts">Contacts</Link>
          <Link to="/login">Login</Link>
        </div>
      </Nav>
    </Header>
  );
};
