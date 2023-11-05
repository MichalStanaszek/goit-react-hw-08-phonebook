// import { Link } from 'react-router-dom';
import { Header, Nav, Link, H1, Img } from './Home.styled';

import home from './home.jpg';

export const Home = () => {
  return (
    <>
      <Header>
        <Nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </Nav>
      </Header>
      <div>
        <H1>Welcome in PhoneBook app! Your new place to manage contacts.</H1>
        <Img src={home} alt="home" />
      </div>
    </>
  );
};
