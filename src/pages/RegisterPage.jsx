import { AuthForm } from 'components/AuthForm';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>Phonebook - Register</title>
      </Helmet>
      <AuthForm />
    </div>
  );
};

export default RegisterPage;
