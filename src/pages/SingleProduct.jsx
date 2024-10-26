import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import CircularProgress from '@mui/material/CircularProgress';
import { Typography, Paper, Button, Box } from '@mui/material';

const SingleProduct = ({ onAddToCart }) => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography color="error" style={{ textAlign: 'center', marginTop: '20px' }}>
        Error loading product. Please try again later.
      </Typography>
    );
  }

  if (!product) {
    return (
      <Typography style={{ textAlign: 'center', marginTop: '20px' }}>
        No product found.
      </Typography>
    );
  }

  return (
    <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', maxWidth: '450px', width: '100%', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>{product.title}</Typography>
        <img src={product.images[0]} alt={product.title} style={{ width: '100%', maxWidth: '250px', height: 'auto' }} />
        <Typography variant="h6" style={{ marginTop: '10px' }}>Price: {product.price}</Typography>
        <Typography variant="body1" style={{ marginTop: '10px' }}>{product.description}</Typography>
        <Typography variant="body2" style={{ marginTop: '10px' }}>Category: {product.category}</Typography>
        
        {/* Add to Cart Button */}
        <Box mt={2}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default SingleProduct;
