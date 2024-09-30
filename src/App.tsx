import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GenderProvider, useGender } from "./context/GenderContext";
import LoginPage from './pages/LoginPage';
import UserListPage from './pages/UserListPage';
import CustomUserListPage from './pages/CustomUserListPage';
import AddRandomUserPage from './pages/AddRandomUserPage';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <GenderProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users" element={<ProtectedRoute><UserListPage /></ProtectedRoute>} />
          <Route path="/custom-users" element={<ProtectedRoute><CustomUserListPage /></ProtectedRoute>} />
          <Route path="/add-random-user" element={<ProtectedRoute><AddRandomUserPage /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </GenderProvider>
  );
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { gender } = useGender();
  return gender ? <>{children}</> : <Navigate to="/login" />;
};

export default App;
