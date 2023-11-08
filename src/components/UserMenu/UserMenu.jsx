const { useSelector } = require('react-redux');
const { selectUserName } = require('redux/contacts/selectors');

import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/contacts/selectors';

const UserMenu = () => {
  const userName = useSelector(selectUserName);
};
