import React, { useState, useEffect } from 'react';
import { useGender } from '../context/GenderContext';
import { User } from '../types/User';
import UserCard from '../components/UserCard';

const UserListPage: React.FC = () => {
    const { gender } = useGender();
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchUsers(gender!);
    }, []);

    const fetchUsers = async (selectedGender: string) => {
        setLoading(true); 
        const response = await fetch(`https://randomuser.me/api/?results=50&gender=${selectedGender === 'male' ? 'female' : 'male'}`);
        const data = await response.json();
        const fetchedUsers: User[] = data.results;
        setFilteredUsers(fetchedUsers);
        setLoading(false); 
    };

    const removeUser = (index: number) => {
        setFilteredUsers(filteredUsers.filter((_, i) => i !== index));
    };

    const fetchMoreUsers = () => {
        fetchUsers(gender!); 
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Seçilen Cinsiyet: {gender}</h2>
            <h3>Kullanıcı Listesi</h3>
            <button disabled={loading} onClick={fetchMoreUsers} style={{ marginBottom: '20px' }}>
                50 Yeni Kullanıcı Getir
            </button>
            {loading ? (
                <p>Yükleniyor...</p>
            ) : filteredUsers.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {filteredUsers.map((user, index) => (
                        <div key={index} style={{ width: '20%', position: 'relative' }}>
                            <UserCard user={user} />
                            <button
                                onClick={() => removeUser(index)}
                                style={{
                                    position: 'absolute',
                                    top: '0',
                                    right: '0'
                                }}
                            >
                                Çıkar
                            </button>
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Sıra: {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Listede kullanıcı yok.</p>
            )}
        </div>
    );
};

export default UserListPage;
