import React from 'react';
import { Typography, Container, Button, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Container)(({ theme }) => ({
  padding: '40px 20px',
  textAlign: 'center',
  backgroundColor: '#f5f5f5',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginTop: '40px',
  maxWidth: '800px',
}));

const FeaturedProductsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  flexWrap: 'wrap',
  gap: '20px',
}));

const ProductCard = styled(Paper)(({ theme }) => ({
  padding: '20px',
  width: '200px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const Home = () => {
  return (
    <div>
      <HeroContainer>
        <Typography variant="h3" gutterBottom color="primary" fontWeight="bold">
          Welcome to Our E-Commerce Store
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#666' }}>
          Discover amazing products at unbeatable prices. Shop now and find everything you need!
        </Typography>
        <Paper elevation={0} style={{ padding: '20px', backgroundColor: '#' }}>
          <Typography variant="h5" gutterBottom color="secondary">
            Ready to shop?
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '20px' }}>
            Browse our latest collections and take advantage of our special offers.
          </Typography>
          <Button variant="contained" color="primary" style={{ margin: '5px' }}>
            Shop Now
          </Button>
          <Button variant="outlined" color="primary" style={{ margin: '5px' }}>
            View Deals
          </Button>
        </Paper>
      </HeroContainer>
      
    </div>
  );
};

export default Home;
