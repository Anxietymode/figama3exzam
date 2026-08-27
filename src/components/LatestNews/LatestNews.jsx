import React from 'react';
import { FaUser, FaCalendarAlt, FaComment, FaArrowRight } from 'react-icons/fa';
import { LATEST_NEWS } from '../../data/data';
import './LatestNews.css';

export const LatestNews = () => {
  return (
    <section className="container">
      <h2 className="section-title text-center">Latest News</h2>
      <div className="news-grid">
        {LATEST_NEWS.map(article => (
          <div key={article.id} className="news-card">
            <img src={article.image} alt={article.title} />
            <div className="news-body">
              <div className="news-meta">
                <span><FaUser className="meta-icon" /> {article.author}</span>
                <span><FaCalendarAlt className="meta-icon" /> {article.date}</span>
                <span><FaComment className="meta-icon" /> {article.comments}</span>
              </div>
              <h4 className="news-title">{article.title}</h4>
              <p className="news-snippet">{article.desc}</p>
              <a href="#read" className="view-all-link">READ MORE <FaArrowRight /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};