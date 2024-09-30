import React, { useState } from 'react';
import { User } from '../types/User'; // Kullanıcı arayüzünü içe aktarma
import UserCard from '../components/UserCard'; // UserCard bileşenini içe aktarma

const AddRandomUserPage: React.FC = () => {
  const [userList, setUserList] = useState<User[]>([]); // Kullanıcı listesini tutmak için
  const [loading, setLoading] = useState<boolean>(false); // Yükleniyor durumu

  const fetchRandomUser = async () => {
    setLoading(true); // Yükleme durumunu başlat
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user: User = data.results[0]; // Gelen veriyi User tipine uygun hale getiriyoruz

    setUserList((prevList) => [...prevList, user]); // Kullanıcıyı listeye ekle
    setLoading(false); // Yükleme durumunu durdur
  };

  const removeUser = (index: number) => {
    setUserList((prevList) => prevList.filter((_, i) => i !== index)); // Kullanıcıyı kaldır
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Rastgele Kullanıcı Ekle</h2>
      <button onClick={fetchRandomUser} disabled={loading}>
        {loading ? 'Yükleniyor...' : 'Rastgele Kullanıcı Getir'}
      </button>
      {userList.length > 0 ? (
        <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap' }}>
          {userList.map((user, index) => (
            <div key={index} style={{ width: '20%', margin: '10px' }}>
              <UserCard user={user} /> {/* UserCard bileşeni burada kullanılıyor */}
              <button onClick={() => removeUser(index)} style={{ marginTop: '10px' }}>Kullanıcıyı Kaldır</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Henüz kullanıcı eklenmedi.</p>
      )}
    </div>
  );
};

export default AddRandomUserPage;
