import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
    // useNavigate + props "replace" żeby nie dało się wrócić na logowanie klikając wstecz
  };

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
