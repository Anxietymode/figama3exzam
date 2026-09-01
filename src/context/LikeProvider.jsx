import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LikeContext } from './likeContext';

export const LikeProvider = ({ children }) => {
  const [likeItems, setLikeItems] = useState([]);
  const navigate = useNavigate();

  const addToLike = (product) => {
    if (!product) return;
    const item = {
      id: String(product.id),
      name: product.title || product.name,
      price: Number(String(product.price).replace(/[^0-9.]/g, '')) || 0,
      oldPrice: product.oldPrice ? Number(String(product.oldPrice).replace(/[^0-9.]/g, '')) : 0,
      image: product.image,
    };
    setLikeItems((prev) => {
      const existing = prev.find((likeItem) => likeItem.id === item.id);
      if (existing) {
        return prev.filter((likeItem) => likeItem.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const removeItem = (id) => {
    setLikeItems((prev) => prev.filter((item) => item.id !== String(id)));
  };

  const clearLike = () => setLikeItems([]);

  const isLiked = (id) => likeItems.some((item) => item.id === String(id));

  const likeCount = likeItems.length;

  const goToLike = () => navigate('/like');

  return (
    <LikeContext.Provider
      value={{ likeItems, addToLike, removeItem, clearLike, isLiked, likeCount, goToLike }}
    >
      {children}
    </LikeContext.Provider>
  );
};
