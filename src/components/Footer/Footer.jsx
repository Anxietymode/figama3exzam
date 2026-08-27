import React from 'react';
import { FaGooglePlay, FaApple, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import './Footer.css';
import Logo2 from "../../assets/Icon (2).png";

export const Footer = () => {
  return (
    <>
      <section className="newsletter-section">
        <div className="container newsletter-container">
          <h2 className="newsletter-title">Subscribe to our newsletter</h2>
          <p className="newsletter-description">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. 
            Donec non quam urna. Quisque vitae porta ipsum.
          </p>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              required 
            />
            <button type="submit">
              SUBSCRIBE <FaArrowRight className="btn-icon" />
            </button>
          </form>

          <div className="newsletter-divider"></div>

          <div className="newsletter-brands">
            <span className="brand-text">Google</span>
            <span className="brand-text">Amazon</span>
            <span className="brand-text">Philips</span>
            <span className="brand-text">Toshiba</span>
            <span className="brand-text">Samsung</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="logo white-text">
                <img src={Logo2} alt="" /><span>CLICON</span>
              </div>
              <p className="footer-contact">
                <FaPhoneAlt className="contact-icon" /> Customer Supports:<br />
                <strong>(629) 555-0129</strong>
              </p>
              <p className="footer-contact">
                <FaMapMarkerAlt className="contact-icon" /> 4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
            
            <div className="footer-col">
              <h5>TOP CATEGORY</h5>
              <ul>
                <li>Computer & Laptop</li>
                <li>Smartphone</li>
                <li>Headphone</li>
                <li>Accessories</li>
                <li>TV & Homes</li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h5>QUICK LINKS</h5>
              <ul>
                <li>Shop Product</li>
                <li>Shopping Cart</li>
                <li>Wishlist</li>
                <li>Compare</li>
                <li>Track Order</li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h5>DOWNLOAD APP</h5>
              <div className="app-badge"><FaGooglePlay className="app-icon" /> Google Play</div>
              <div className="app-badge"><FaApple className="app-icon" /> App Store</div>
            </div>
            
            <div className="footer-col">
              <h5>POPULAR TAGS</h5>
              <div className="tags-flex">
                {["Game", "iPhone", "TV", "Asus", "Macbook", "SSD", "Powerbank"].map(tag => (
                  <span key={tag} className="tag-item">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            UnitedDealer eCommerce © 2026. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};