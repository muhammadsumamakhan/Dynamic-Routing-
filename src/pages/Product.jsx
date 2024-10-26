import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card'; 
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(true);
        setLoading(false); 
      });
  }, []);

  const handleProductClick = (item) => {
    console.log('item '+ item);
    navigate(`/product/${item.id}`); 
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <CircularProgress size={60} />
        <Typography>Loading products...</Typography>
      </div>
    );
  }

  if (error) {
    return <Typography color="error" style={{ textAlign: 'center' }}>Error loading products. Please try again later.</Typography>;
  }

  return (
    <div>
      <Typography variant="h3" gutterBottom color="primary" fontWeight="bold" align="center" sx={{ marginTop: '16px' }} >
      Products
      </Typography>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "5px" }}>
        {products.map((item) => (
          <Card 
            key={item.id} 
            title={item.title} 
            description={item.description.slice(0, 10) + "..."} 
            src={item.images[0]}
            onClick={() => handleProductClick(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
