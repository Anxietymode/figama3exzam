import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHeart, 
  FaShoppingCart, 
  FaUser, 
  FaBars, 
  FaChevronDown, 
  FaPhoneAlt, 
  FaSearch, 
  FaArrowRight,
  FaTimes,
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaRedditAlien,
  FaYoutube,
  FaInstagram
} from 'react-icons/fa';
import './Header.css';
import logo from '../../assets/Icon (1).png';
import { useCart } from '../../context/cartContext';

import { TOP_BAR } from '../../data/data'; 

export const Header = () => {
  const [isNoticeVisible, setIsNoticeVisible] = useState(true);
  const { cartCount, goToCart } = useCart();

  return (
    <>
      {isNoticeVisible && (
        <div className="top-notice-bar">
          <div className="container top-notice-container">
            <div className="top-notice-content">
              <span className="notice-badge">{TOP_BAR.text}</span>
              <span className="notice-text">
                Up to <strong className="highlight-percent">59%</strong> OFF
              </span>
              <a href="#shop" className="notice-btn">
                {TOP_BAR.buttonText} <FaArrowRight className="btn-icon" />
              </a>
            </div>
            <button 
              className="notice-close-btn" 
              onClick={() => setIsNoticeVisible(false)}
              aria-label="Close notice"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      <div className="top-nav-bar">
        <div className="container top-nav-container">
          <div className="top-nav-left">
            Welcome to Clicon online eCommerce store.
          </div>
          <div className="top-nav-right">
            <div className="top-nav-socials">
              <span>Follow us:</span>
              <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
              <a href="#facebook" aria-label="Facebook"><FaFacebook /></a>
              <a href="#pinterest" aria-label="Pinterest"><FaPinterest /></a>
              <a href="#reddit" aria-label="Reddit"><FaRedditAlien /></a>
              <a href="#youtube" aria-label="YouTube"><FaYoutube /></a>
              <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
            </div>
            <div className="top-nav-divider"></div>
            <div className="top-nav-dropdowns">
              <div className="dropdown">
                Eng <FaChevronDown className="small-chevron" />
              </div>
              <div className="dropdown">
                USD <FaChevronDown className="small-chevron" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="main-header">
        <div className="container header-row">
          <Link to="/" className="logo"> 
            <img src={logo} alt="United Dealer Logo" /> UNITED<span>DEALER</span>
          </Link>
          <div className="search-box">
            <input type="text" placeholder="Search for anything in store..." />
            <button className="search-submit" aria-label="Search"><FaSearch /></button>
          </div>
          <div className="header-actions">
            <button className="header-action" aria-label="Wishlist"><FaHeart /></button>
            <div className="cart-icon-wrapper">
              <button className="header-action" aria-label="Cart" onClick={goToCart}><FaShoppingCart /></button>
              <span className="cart-badge">{cartCount}</span>
            </div>
            <button className="header-action" aria-label="Account"><FaUser /></button>
          </div>
        </div>
      </header>

      <nav className="nav-bar">
        <div className="container nav-content">
          <Link to="/all-categories" className="category-select-btn">
            <FaBars className="bars-icon" /> All Categories <FaChevronDown className="chevron-icon" />
          </Link>
          <div className="nav-links">
            <a href="#track">Track Order</a>
            <a href="#compare">Compare</a>
            <a href="#support">Customer Support</a>
            <a href="#help">Need Help</a>
          </div>
          <div className="phone-hotline">
            <FaPhoneAlt className="phone-icon" /> +1-202-555-0104
          </div>
        </div>
      </nav>
    </>
  );
};