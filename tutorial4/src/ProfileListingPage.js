import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, TextField, Card, CardContent, Typography } from '@mui/material';

function ProfileListingPage() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://express-t4.onrender.com/api/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Failed to fetch users:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter(user => {
    const fullName = user.name.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#E1F3F5' }}>
      <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
      User Profiles
            </Typography>
      <TextField
        type="text"
        placeholder="Search by Name"
        value={searchQuery}
        onChange={handleSearch}
        variant="outlined"
        size="small"
        style={{ width: '250px', marginBottom: '20px' }}
      />
      <Grid container spacing={3} justifyContent="center" style={{ marginLeft: '15px' }}>
        {filteredUsers.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user._id} >
            <Link to={`/profile/${user._id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ maxWidth: 300 }}>
              <img src={user.picture} alt={user.name} style={{ width: '100%', height: '100px', objectFit: 'cover', marginBottom: '20px' }} />
                <CardContent>
                  <Typography variant="h6" component="div">{user.name}</Typography>
                  <Typography variant="body2" color="textSecondary">Email: {user.email}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProfileListingPage;
