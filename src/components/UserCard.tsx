import React from 'react';
import { User } from '../types/User'; // User arayüzünü içe aktarıyoruz

interface UserCardProps {
  user: User; // Kullanıcı prop'u
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div style={styles.card}>
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} style={styles.image} />
      <h3>{`${user.name.first} ${user.name.last}`}</h3>
      <p>Cinsiyet: {user.gender}</p>
      <p>Milliyet: {user.location?.country || 'Bilinmiyor'}</p>
      {/* <p>Email: {user.email}</p> */}
    </div>
  );
};

// Stil tanımlarını `React.CSSProperties` ile uyumlu hale getiriyoruz
const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column' as React.CSSProperties['flexDirection'], // tür dönüşümünü yapıyoruz
    alignItems: 'center',
  },
  image: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    marginBottom: '10px',
  },
};

export default UserCard;
