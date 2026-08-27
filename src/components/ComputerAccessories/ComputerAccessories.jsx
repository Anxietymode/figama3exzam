import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar, FaHeart, FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import { useCart } from '../../context/cartContext';
import { COMPUTER_ACCESSORIES_GRID, COMPUTER_ACCESSORIES_BANNERS } from '../../data/data';
import './ComputerAccessories.css';

const Stars = ({ count = 0 }) => (
  <span className="stars">
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? 'star filled' : 'star'}>
        {i < count ? <FaStar /> : <FaRegStar />}
      </span>
    ))}
  </span>
);

const CaProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);
  const [likeTick, setLikeTick] = useState(0);
  const [cartTick, setCartTick] = useState(0);

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
    <div className="ca-product-card" onClick={() => navigate(`/product/${product.id}`)}>
      {product.badge && (
        <span className={`ca-badge ${product.badgeColor || 'blue'}`}>{product.badge}</span>
      )}
      <div className="ca-img-wrapper">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="ca-card-title">{product.title}</div>
      <div className="ca-rating">
        <Stars count={product.rating} />
        <span className="reviews">({product.reviewCount || product.reviews || 0})</span>
      </div>
      <div className="ca-price-row">
        <span className="ca-price">${product.price}</span>
        {product.oldPrice && <span className="ca-old-price">${product.oldPrice}</span>}
      </div>
      <div className="ca-product-actions">
        <button className={`ca-icon-btn${liked ? ' liked' : ''}`} onClick={handleLike} aria-label="Add to wishlist">
          <FaHeart key={likeTick} className={likeTick > 0 ? 'icon-bounce' : ''} />
        </button>
        <button className="ca-icon-btn" onClick={handleCart} aria-label="Add to cart">
          <FaShoppingCart key={cartTick} className={cartTick > 0 ? 'icon-bounce' : ''} />
        </button>
      </div>
    </div>
  );
};

export const ComputerAccessories = () => {
  const banners = COMPUTER_ACCESSORIES_BANNERS;
  const yellowBanner = banners.find(b => b.type === "yellow");
  const blueBanner = banners.find(b => b.type === "blue");

  return (
    <section className="container ca-section">
      <div className="ca-header">
        <div className="ca-tabs-wrapper">
          <h2 className="section-title">Computer & Accessories</h2>
        </div>
        <a href="#browse" className="ca-browse-link">BROWSE ALL PRODUCTS <FaArrowRight /></a>
      </div>

      <div className="ca-layout">
        <div className="ca-product-grid">
          {COMPUTER_ACCESSORIES_GRID.map(product => (
            <CaProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="ca-banners-column">
          {yellowBanner && (
            <div className="ca-banner yellow-banner">
              <img className="ca-banner-img" src={yellowBanner.image} alt="" />
              <div className="ca-banner-title">{yellowBanner.title}</div>
              <div className="ca-banner-desc">{yellowBanner.subtitle}</div>
              <div className="ca-banner-price-tag">
                {yellowBanner.price}
              </div>
              <button className="btn-orange">{yellowBanner.buttonText}</button>
            </div>
          )}

          {blueBanner && (
            <div className="ca-banner blue-banner">
              <div className="ca-badge-summer">{blueBanner.tag || "SUMMER SALE"}</div>
              <div className="ca-banner-title-large">{blueBanner.title}</div>
              <div className="ca-banner-desc-light">{blueBanner.subtitle}</div>
              <button className="btn-blue">{blueBanner.buttonText}</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
