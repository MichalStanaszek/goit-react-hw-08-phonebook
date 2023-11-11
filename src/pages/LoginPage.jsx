import { AuthForm } from 'components/AuthForm';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Phonebook - Login</title>
      </Helmet>
      <AuthForm />
    </div>
  );
};

export default LoginPage;
