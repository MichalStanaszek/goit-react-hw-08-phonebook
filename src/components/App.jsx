import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LoginPage = lazy(() => import('../pages/LoginPage'));

export const App = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
    </Routes>
  );
};
