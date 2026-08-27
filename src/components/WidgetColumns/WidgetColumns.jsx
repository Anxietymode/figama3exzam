import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WIDGETS } from '../../data/data';
import './WidgetColumns.css';

const SmallProductItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="small-product-item" onClick={() => navigate(`/product/${item.id}`)}>
      <img src={item.image} alt={item.title} />
      <div className="small-product-info">
        <div className="small-product-title">{item.title}</div>
        <div className="small-product-price">${item.price}</div>
      </div>
    </div>
  );
};

export const WidgetColumns = () => {
  const columns = [
    { title: "Flash Sale", items: WIDGETS.flashSale },
    { title: "Best Sellers", items: WIDGETS.bestSellers },
    { title: "Top Rated", items: WIDGETS.topRated },
    { title: "New Arrival", items: WIDGETS.newArrival }
  ];

  return (
    <section className="container">
      <div className="widget-columns-grid">
        {columns.map(col => (
          <div key={col.title} className="widget-column widget-column-lg">
            <div className="widget-column-title">{col.title}</div>
            {col.items.map(item => (
              <SmallProductItem key={item.id} item={item} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
