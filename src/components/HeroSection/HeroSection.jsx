import React from 'react';
import { FaTruck, FaSyncAlt, FaCreditCard, FaHeadphones, FaArrowRight } from 'react-icons/fa';
import { HERO_MAIN, HERO_SIDE_BANNERS, FEATURES } from '../../data/data';
import './HeroSection.css';

const FEATURE_ICONS = {
  truck: FaTruck,
  refresh: FaSyncAlt,
  'credit-card': FaCreditCard,
  headphones: FaHeadphones
};

export const HeroSection = ({ onAddToCart }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-main-card">
            <div className="hero-main-content">
              <span className="hero-badge">{HERO_MAIN.badge}</span>
              <h1>{HERO_MAIN.title}</h1>
              <p>{HERO_MAIN.subtitle}</p>
              <button className="btn-primary" onClick={onAddToCart}>
                {HERO_MAIN.buttonText} <FaArrowRight className="btn-arrow" />
              </button>
            </div>
            <div className="hero-main-img-wrap">
              <img src={HERO_MAIN.image} alt="Xbox" className="hero-main-img" />
              <span className="hero-price-badge">{HERO_MAIN.price}</span>
            </div>
          </div>

          <div className="hero-side-cards">
            {HERO_SIDE_BANNERS.map(side => (
              <div key={side.id} className={`side-card side-card--${side.variant}${side.reverse ? ' side-card-reverse' : ''}`}>
                <div className="side-card-content">
                  <span className="side-tag">{side.tag}</span>
                  <h3>{side.title}</h3>
                  <p className="side-price">{side.badge || side.price}</p>
                  <button className="btn-primary side-btn" onClick={onAddToCart}>
                    {side.buttonText} <FaArrowRight className="btn-arrow" />
                  </button>
                </div>
                <img src={side.image} alt={side.title} />
              </div>
            ))}
          </div>
        </div>

        <div className="features-bar">
          {FEATURES.map(f => {
            const Icon = FEATURE_ICONS[f.icon];
            return (
              <div key={f.id} className="feature-item">
                <span className="feature-icon">{Icon ? <Icon /> : null}</span>
                <div>
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-desc">{f.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};