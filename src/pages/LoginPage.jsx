import { LoginForm } from 'components/LoginForm';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Phonebook - Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
