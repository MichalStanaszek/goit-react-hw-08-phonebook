import { Home } from 'components';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Phonebook - Home</title>
      </Helmet>
      <Home />
    </div>
  );
};

export default HomePage;
