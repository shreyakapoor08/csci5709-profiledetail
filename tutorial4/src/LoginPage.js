import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, TextField, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    if (!email || !password) {
      setError('Email and password are required.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://express-t4.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          password: password
        })
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/profile');
        }, 3000); 
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login. Please try again later.');
    }
    setLoading(false);
  };

  const handleCloseAlert = () => {
    setError('');
  };

  const handleCloseSuccess = () => {
    setSuccess(false);
  };

  return (
<Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ minHeight: '102.8vh' }} style={{ backgroundColor: '#E1F3F5', boxSizing: 'border-box', overflowY: 'hidden', padding: '20px' }}>

      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h4" align="center" mb={4}>Login</Typography>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
        </form>
        {error && (
          <Snackbar open={true} autoHideDuration={6000} onClose={handleCloseAlert}>
            <MuiAlert onClose={handleCloseAlert} severity="error">
              {error}
            </MuiAlert>
          </Snackbar>
        )}
        {success && (
          <Snackbar open={true} autoHideDuration={3000} onClose={handleCloseSuccess}>
            <MuiAlert onClose={handleCloseSuccess} severity="success">
              Login Successful! Redirecting...
            </MuiAlert>
          </Snackbar>
        )}
      </Grid>
    </Grid>
  );
}

export default LoginPage;
