import React from 'react';
import { Box, Button, TextField, Typography, Checkbox, FormControlLabel, Container } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2, 
          mt: 4, 
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'white',
        }}
      >
         <Typography variant="h4" gutterBottom color="primary" fontWeight="bold">
                Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Remember me"
          sx={{ mt: 1 }} 
        />
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Login
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account? <a href="/register">Register here</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
