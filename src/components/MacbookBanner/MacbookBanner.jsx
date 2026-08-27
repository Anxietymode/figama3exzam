import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MACBOOK_BANNER } from '../../data/data';
import './MacbookBanner.css';

export const MacbookBanner = () => {
  return (
    <section className="container">
      <div className="macbook-banner">
        <div className="macbook-content">
          <span className="macbook-tag">{MACBOOK_BANNER.tag}</span>
          <h2>{MACBOOK_BANNER.title}</h2>
          <p>{MACBOOK_BANNER.subtitle}</p>
          <button className="btn-primary">{MACBOOK_BANNER.buttonText} <FaArrowRight /></button>
        </div>
        <div className="macbook-img-wrap">
          <img src={MACBOOK_BANNER.image} alt="Macbook" />
          <span className="macbook-price-badge">{MACBOOK_BANNER.price}</span>
        </div>
      </div>
    </section>
  );
};