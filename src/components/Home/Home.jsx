import { H1, Img } from './Home.styled';

import home from './home.jpg';

export const Home = () => {
  return (
    <div>
      <H1>Welcome in PhoneBook app! Your new place to manage contacts.</H1>
      <Img src={home} alt="home" />
    </div>
  );
};
