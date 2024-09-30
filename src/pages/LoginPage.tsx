import React from 'react';
import { useGender } from '../context/GenderContext';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { setGender } = useGender();
  const navigate = useNavigate();

  const handleGenderSelect = (gender: string) => {
    setGender(gender);
    navigate('/users');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cinsiyet Seçin</h1>
      <button onClick={() => handleGenderSelect('male')}>Erkek</button>
      <button onClick={() => handleGenderSelect('female')}>Kadın</button>
    </div>
  );
};

export default LoginPage;
