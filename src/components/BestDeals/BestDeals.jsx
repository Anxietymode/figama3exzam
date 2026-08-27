import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import { ProductCard } from '../ProductCard/ProductCard';
import { useCart } from '../../context/cartContext';
import { BEST_DEALS_MAIN, BEST_DEALS_GRID } from '../../data/data';
import './BestDeals.css';

export const BestDeals = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);
  const [likeTick, setLikeTick] = useState(0);
  const [cartTick, setCartTick] = useState(0);
  const featured = BEST_DEALS_MAIN;
  const smallProducts = BEST_DEALS_GRID;

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked((prev) => !prev);
    setLikeTick((tick) => tick + 1);
  };

  const handleCart = (e) => {
    e.stopPropagation();
    setCartTick((tick) => tick + 1);
    addToCart(featured);
  };

  return (
    <section className="container best-deals-section">
      <div className="section-header">
        <div className="section-title-wrap">
          <h2 className="section-title">Best Deals</h2>
          <div className="countdown-timer">
            <span>Deals ends in:</span>
            <span>16h : 21m : 57s</span>
          </div>
        </div>
      </div>
      <div className="deals-layout">
        <div
          className="deals-featured"
          onClick={() => navigate(`/product/${featured.id}`)}
        >
          <div className="deals-featured-badge">{featured.badge}</div>
          <img className="deals-featured-img" src={featured.image} alt={featured.title} />
          <div className="deals-featured-info">
            <h3 className="deals-featured-title">{featured.title}</h3>
            <p className="deals-featured-desc">{featured.desc}</p>
            <div className="deals-featured-rating">
              {'★'.repeat(featured.rating)} <span>({featured.reviewCount} reviews)</span>
            </div>
            <div className="deals-featured-price-row">
              <span className="deals-featured-price">${featured.price}</span>
              <span className="deals-featured-old-price">${featured.oldPrice}</span>
            </div>
            <div className="deals-featured-stock">
              Only <strong>{featured.stockAvailable}</strong> left in stock ({featured.stockTotal})
            </div>
            <div className="deals-featured-actions">
              <button className={`deals-featured-icon-btn${liked ? ' liked' : ''}`} onClick={handleLike} aria-label="Add to wishlist">
                <FaHeart key={likeTick} className={likeTick > 0 ? 'icon-bounce' : ''} />
              </button>
              <button className="deals-featured-btn">SHOP NOW <FaArrowRight /></button>
              <button className="deals-featured-icon-btn" onClick={handleCart} aria-label="Add to cart">
                <FaShoppingCart key={cartTick} className={cartTick > 0 ? 'icon-bounce' : ''} />
              </button>
            </div>
          </div>
        </div>
        <div className="product-grid">
          {smallProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
