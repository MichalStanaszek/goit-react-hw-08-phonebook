import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header, Nav, Link } from './SharedLayout.styled';
import { Loader } from '../index';

export const SharedLayout = () => {
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
