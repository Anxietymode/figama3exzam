import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/cartContext';
import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);
  const [likeTick, setLikeTick] = useState(0);
  const [cartTick, setCartTick] = useState(0);
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked((prev) => !prev);
    setLikeTick((tick) => tick + 1);
  };

  const handleCart = (e) => {
    e.stopPropagation();
    setCartTick((tick) => tick + 1);
    addToCart(product);
  };

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="product-image-wrap">
        <img src={product.image} alt={product.title} />
        {discount > 0 && <span className="product-discount">-{discount}%</span>}
      </div>
      <div className="product-category">{product.category}</div>
      <div className="product-title">{product.title}</div>
      <div className="product-rating">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < product.rating ? 'star filled' : 'star'}>
            {i < product.rating ? <FaStar /> : <FaRegStar />}
          </span>
        ))}
      </div>
      <div className="product-price-row">
        <span className="product-price">${product.price}</span>
        {product.oldPrice && <span className="product-old-price">${product.oldPrice}</span>}
      </div>
      <div className="product-actions">
        <button
          className={`product-icon-btn${liked ? ' liked' : ''}`}
          onClick={handleLike}
          aria-label="Add to wishlist"
        >
          <FaHeart key={likeTick} className={likeTick > 0 ? 'icon-bounce' : ''} />
        </button>
        <button className="product-icon-btn" onClick={handleCart} aria-label="Add to cart">
          <FaShoppingCart key={cartTick} className={cartTick > 0 ? 'icon-bounce' : ''} />
        </button>
      </div>
    </div>
  );
};
