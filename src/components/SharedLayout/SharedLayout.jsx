import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Loader, Navigation } from '../index';

export const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
