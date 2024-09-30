import React, { useState } from 'react';
import { useGender } from '../context/GenderContext';
import { User } from '../types/User'; // Kullanıcı arayüzünü içe aktarma
import UserCard from '../components/UserCard'; // UserCard bileşenini içe aktarma

const CustomUserListPage: React.FC = () => {
  const { gender } = useGender();
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [country, setCountry] = useState<string>(''); // Milliyet durumu
  const [customCount, setCustomCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false); // Yükleniyor durumu

  // Milliyet seçenekleri
  const countryOptions = [
    { value: 'AU', label: 'Avustralya' },
    { value: 'BR', label: 'Brezilya' },
    { value: 'CA', label: 'Kanada' },
    { value: 'CH', label: 'İsviçre' },
    { value: 'DE', label: 'Almanya' },
    { value: 'DK', label: 'Danimarka' },
    { value: 'ES', label: 'İspanya' },
    { value: 'FI', label: 'Finlandiya' },
    { value: 'FR', label: 'Fransa' },
    { value: 'GB', label: 'Birleşik Krallık' },
    { value: 'IE', label: 'İrlanda' },
    { value: 'IN', label: 'Hindistan' },
    { value: 'IR', label: 'İran' },
    { value: 'MX', label: 'Meksika' },
    { value: 'NL', label: 'Hollanda' },
    { value: 'NO', label: 'Norveç' },
    { value: 'NZ', label: 'Yeni Zelanda' },
    { value: 'RS', label: 'Sırbistan' },
    { value: 'TR', label: 'Türkiye' },
    { value: 'UA', label: 'Ukrayna' },
    { value: 'US', label: 'Amerika Birleşik Devletleri' },
  ];

  const handleCustomUserFetch = async () => {
    setLoading(true); // Yükleniyor durumunu başlat
    const response = await fetch(`https://randomuser.me/api/?results=${customCount}&nat=${country}`);
    const data = await response.json();
    setFilteredUsers(data.results);
    setLoading(false); // Yükleniyor durumunu durdur
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Özelleştirilmiş Kullanıcılar - Seçilen Cinsiyet: {gender}</h2>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="" disabled>Milliyet Seçin</option>
        {countryOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <input 
        type="number" 
        min="1" 
        value={customCount} 
        onChange={(e) => setCustomCount(Number(e.target.value))} 
      />
      <button onClick={handleCustomUserFetch}>Özelleştir</button>
      {loading ? ( // Yüklenme durumu kontrolü
        <p>Yükleniyor...</p>
      ) : (
        filteredUsers.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {filteredUsers.map((user, index) => (
              <div key={index} style={{ width: '20%', margin: '10px' }}>
                <UserCard user={user} /> {/* UserCard bileşeni burada kullanılıyor */}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default CustomUserListPage;
