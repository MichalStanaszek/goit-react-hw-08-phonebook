import { Contacts } from 'components';
import { Helmet } from 'react-helmet';

const ContactsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Phonebook - Contacts</title>
      </Helmet>
      <Contacts />
    </div>
  );
};

export default ContactsPage;
