import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar, Loader } from '../index';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
