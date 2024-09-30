import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Kullanıcı Yönetim Uygulaması</h1>
      <nav>
        <Link to="/login" style={styles.link}>Giriş</Link>
        <Link to="/users" style={styles.link}>Kullanıcı Listesi</Link>
        <Link to="/custom-users" style={styles.link}>Özel Kullanıcı Listesi</Link>
        <Link to="/add-random-user" style={styles.link}>Random Kullanıcı Listesi</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderBottom: '1px solid #ccc',
  },
  title: {
    margin: 0,
  },
  link: {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#007bff',
  },
};

export default Header;
