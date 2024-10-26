import React from 'react';
import './Card.css';

const Card = ({ title, description, src, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={src} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
  );
};

export default Card;
