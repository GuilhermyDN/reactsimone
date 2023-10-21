import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRating } from './ProductsSlice';
import './style/RatingComponent.css'

// componente de rating que permite aos usuários dar uma avaliação de 1 a 5 estrelas
function RatingComponent({ productId, currentRating }) {
    const dispatch = useDispatch();
    const [userRating, setUserRating] = useState(currentRating);
  
    // função para lidar com a mudança de avaliação do usuário
    const handleRatingChange = (newRating) => {
      setUserRating(newRating);
      dispatch(addRating({ id: productId, rating: newRating })); 
    };
  
    return (
      <div>
        <p>Avaliação: </p>
        <div className="rating-container">
            {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRatingChange(star)}
              className={`rating-star ${star <= userRating ? 'active' : ''}`}
            >
              {star <= userRating ? '\u2605' : '\u2606'}
            </span>
            
          ))}
          
        </div>
      </div>
    );
  }
  
  export default RatingComponent;