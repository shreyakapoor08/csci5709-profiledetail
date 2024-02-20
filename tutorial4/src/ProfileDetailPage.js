import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function ProfileDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`https://express-t4.onrender.com/api/users/${id}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.error('Failed to fetch user details:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={3} style={{ paddingTop: '20px', paddingBottom: '20px', backgroundColor: '#E1F3F5' }}>
      <Grid item xs={12} sm={8} md={6}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
              Profile Detail
            </Typography>
            <img src={user.picture} alt={user.name} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginBottom: '20px' }} />

            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Name:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Email:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.email}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Phone:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.phone}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Address:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.address}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              About:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.about}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Age:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.age}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Gender:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.gender}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Company:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.company}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Balance:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.balance}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Eye Color:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.eyeColor}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Registered:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.registered}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Latitude:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.latitude}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Longitude:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.longitude}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Tags:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.tags.join(', ')}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Greeting:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.greeting}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Favorite Fruit:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.favoriteFruit}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{ fontWeight: 'bold' }}>
              Friends:
            </Typography>
            <ul>
              {user.friends.map((friend) => (
                <li key={friend.id}>{friend.name}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProfileDetailPage;
