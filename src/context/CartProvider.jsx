import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './cartContext';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product, qty = 1) => {
    if (!product) return;
    const item = {
      id: String(product.id),
      name: product.title || product.name,
      price: Number(String(product.price).replace(/[^0-9.]/g, '')) || 0,
      image: product.image,
      quantity: qty,
    };
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + qty }
            : cartItem
        );
      }
      return [...prev, item];
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === String(id)
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== String(id)));
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const goToCart = () => navigate('/cart');

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeItem, clearCart, cartCount, goToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};