import { Link } from '../Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};
