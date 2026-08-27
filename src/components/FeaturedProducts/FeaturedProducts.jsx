import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FEATURED_BANNER, FEATURED_GRID } from '../../data/data';
import { ProductCard } from '../ProductCard/ProductCard';
import './FeaturedProducts.css';

export const FeaturedProducts = () => {
  return (
    <section className="container featured-section">
      <div className="section-header">
        <h2 className="section-title">Featured Products</h2>
      </div>

      <div className="featured-banner-layout">
        <div className="left-promo-banner">
          <div>
            <span className="promo-tag">{FEATURED_BANNER.tag}</span>
            <h3>{FEATURED_BANNER.title}</h3>
            <p>{FEATURED_BANNER.subtitle}</p>
            <button className="btn-primary flex-center">{FEATURED_BANNER.buttonText} <FaArrowRight /></button>
          </div>
          <img src={FEATURED_BANNER.image} alt={FEATURED_BANNER.title} />
        </div>

        <div className="product-grid columns-4">
          {FEATURED_GRID.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};