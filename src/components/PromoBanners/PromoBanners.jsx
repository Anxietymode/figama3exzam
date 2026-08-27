import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MID_BANNERS } from '../../data/data';
import './PromoBanners.css';

export const PromoBanners = () => {
  return (
    <section className="container">
      <div className="promo-double-grid">
        {MID_BANNERS.map(banner => (
          <div key={banner.id} className={`promo-box promo-box--${banner.variant}${banner.fullImage ? ' promo-box-full' : ''}`}>
            <div className="promo-box-content">
              <span className="macbook-tag">{banner.tag}</span>
              <h3>{banner.title}</h3>
              <p>{banner.subtitle}</p>
              {banner.price && <div className="promo-price">{banner.price}</div>}
              <button className="btn-primary">{banner.buttonText || 'SHOP NOW'} <FaArrowRight /></button>
            </div>
            {banner.image && <img src={banner.image} alt={banner.title} />}
          </div>
        ))}
      </div>
    </section>
  );
};