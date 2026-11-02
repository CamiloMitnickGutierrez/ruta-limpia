import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../module/auth';
import { WelcomePage } from '../public';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
