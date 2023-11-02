import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
