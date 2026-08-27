import React from 'react';
import { CATEGORIES } from '../../data/data';
import './CategoryGrid.css';

export const CategoryGrid = () => {
  return (
    <section className="container category-section">
      <h2 className="section-title text-center">Shop with Categories</h2>
      <div className="category-grid">
        {CATEGORIES.map(cat => (
          <div key={cat.id} className="category-card">
            <img src={cat.image} alt={cat.title} />
            <div className="category-title">{cat.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};