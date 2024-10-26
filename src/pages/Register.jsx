import React from 'react';
import { Box, Button, TextField, Typography, Checkbox, FormControlLabel, Container, Link } from '@mui/material';

const Register = () => {
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
            Register 
        </Typography>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="dense"
        />
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
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="I agree to the Terms of Service"
          sx={{ mt: 1 }}
        />
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Register
        </Button>
        
        {/* Add login link */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{' '}
          <Link href="/login" color="primary">
            Login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
