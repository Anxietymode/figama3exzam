import React, { useState } from "react";
import {
  FaHome,
  FaChevronLeft,
  FaChevronRight,
  FaTrash,
  FaShareAlt,
  FaShoppingBag,
  FaDownload,
  FaApple,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { COMPUTER_ACCESSORIES_GRID } from "../../data/data";
import { StoreNavbar } from "../../components/StoreNavbar/StoreNavbar";
import { useCart } from "../../context/cartContext";
import "./MyCart.css";

const SUGGESTED_PRODUCTS = COMPUTER_ACCESSORIES_GRID.slice(0, 4).map((prod) => ({
  id: prod.id,
  name: prod.title,
  price: prod.price,
  oldPrice: prod.oldPrice || 0,
  discount: prod.badge,
  btnPrice: `₹${prod.price}`,
  image: prod.image,
}));

export default function MyCart() {
  const { cartItems, addToCart, updateQuantity, removeItem } = useCart();
  const [packGift, setPackGift] = useState(true);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const giftCost = packGift ? 10.9 : 0;
  const discount = 47.1;
  const totalPrice = Math.max(0, subtotal - discount + giftCost).toFixed(2);

  return (
    <div className="cart-page-wrapper">
      <StoreNavbar />

      <div className="breadcrumb-bar">
        <div className="page-container breadcrumb-inner">
          <span>
            <FaHome className="home-icon" /> Home
          </span>
          <span className="bc-sep">&gt;</span>
          <span className="active-bc">Cart</span>
          <span className="bc-sep">&gt;</span>
          <span>Customer Info</span>
          <span className="bc-sep">&gt;</span>
          <span>Shipping &amp; Payments</span>
          <span className="bc-sep">&gt;</span>
          <span>Product Confirmation</span>
        </div>
      </div>

      <main className="page-container cart-main-content">
        <div className="cart-actions-header">
          <button className="back-btn" onClick={() => window.history.back()}>
            <span className="back-icon-circle">
              <FaChevronLeft />
            </span>
            <strong>Back</strong>
          </button>
          <button className="share-btn">
            <FaShareAlt />
          </button>
        </div>

        <h1 className="cart-title">My Cart</h1>
        <p className="cart-subtitle">Let’s create your account</p>

        <div className="cart-grid">
          <div className="cart-left-col">
            <div className="items-count-head">
              Number of Items {cartItems.length}
            </div>

            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <h3>Your cart is empty</h3>
                <p>Add some products and come back here.</p>
                <Link to="/" className="back-to-shop">
                  Continue shopping
                </Link>
              </div>
            ) : (
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div className="cart-item-row" key={item.id}>
                    <div className="item-img-box">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="item-info">
                      <h4 className="item-name">{item.name}</h4>
                    </div>

                    <div className="item-unit-price">₹{item.price.toFixed(2)}</div>

                    <div className="item-qty-control">
                      <button onClick={() => updateQuantity(item.id, -1)}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>

                    <div className="item-total-price">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </div>

                    <button
                      className="item-delete-btn"
                      onClick={() => removeItem(item.id)}
                      title="Remove item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="suggested-section">
              <div className="suggested-header">
                <h3>YOU MIGHT ALSO LIKE</h3>
                <div className="slider-arrows">
                  <button className="arrow-btn">
                    <FaChevronLeft />
                  </button>
                  <button className="arrow-btn">
                    <FaChevronRight />
                  </button>
                </div>
              </div>

              <div className="suggested-grid">
                {SUGGESTED_PRODUCTS.map((prod) => (
                  <div className="suggested-card" key={prod.id}>
                    <div className="sugg-img-container">
                      <img src={prod.image} alt={prod.name} />
                    </div>
                    <div className="sugg-details">
                      <h4 className="sugg-name">{prod.name}</h4>
                      <div className="sugg-price-row">
                        <span className="curr-price">
                          ₹{prod.price.toFixed(2)}
                        </span>
                        {prod.oldPrice > 0 && (
                          <span className="old-price">
                            ₹{prod.oldPrice.toFixed(2)}
                          </span>
                        )}
                        {prod.discount && (
                          <span className="badge-discount">{prod.discount}</span>
                        )}
                      </div>
                      <button
                        className="sugg-add-btn"
                        onClick={() => addToCart(prod)}
                      >
                        <span>{prod.btnPrice}</span> Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cart-right-col">
            <div className="order-summary-card">
              <h3 className="summary-title">Order Summary</h3>

              <div className="summary-row">
                <span>Price</span>
                <strong>₹{subtotal.toFixed(2)}</strong>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <strong>₹0</strong>
              </div>

              <div className="summary-row">
                <span>Tax</span>
                <strong>₹0</strong>
              </div>

              <div className="summary-row">
                <span>Discount price</span>
                <strong>₹{discount.toFixed(2)}</strong>
              </div>

              <div className="summary-checkbox-row">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={packGift}
                    onChange={(e) => setPackGift(e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  Pack in a Gift Box
                </label>
                <strong>₹10.90</strong>
              </div>

              <div className="summary-row total-row">
                <span>Total Price</span>
                <strong className="final-price">₹{totalPrice}</strong>
              </div>

              <button className="checkout-btn">
                <FaShoppingBag className="btn-icon" /> SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="page-container footer-grid">
          <div className="footer-company">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon"></span>
              UNITED DEAL
            </Link>
            <div className="footer-text">
              Customer Supports:
              <br />
              <strong>(629) 555-0129</strong>
            </div>
            <div className="footer-text">
              4517 Washington Ave.
              <br />
              Manchester, Kentucky 39495
            </div>
            <div className="footer-text">info@kinbo.com</div>
          </div>

          <div className="footer-column">
            <h4>TOP CATEGORY</h4>
            <a href="#link">Computer &amp; Laptop</a>
            <a href="#link">SmartPhone</a>
            <a href="#link">Headphone</a>
            <a href="#link" className="yellow-active">
              Accessories
            </a>
            <a href="#link">Camera &amp; Photo</a>
            <a href="#link">TV &amp; Homes</a>
            <a href="#link" className="footer-yellow">
              Browse All Product &rarr;
            </a>
          </div>

          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <a href="#link">Shop Product</a>
            <a href="#link">Shoping Cart</a>
            <a href="#link">Wishlist</a>
            <a href="#link">Compare</a>
            <a href="#link">Track Order</a>
            <a href="#link">Customer Help</a>
            <a href="#link">About Us</a>
          </div>

          <div className="footer-column">
            <h4>DOWNLOAD APP</h4>
            <div className="download-button">
              <FaDownload className="dl-icon" />
              <div>
                <small>Get it now</small>
                <strong>Google Play</strong>
              </div>
            </div>
            <div className="download-button">
              <FaApple className="dl-icon" />
              <div>
                <small>Get it now</small>
                <strong>App Store</strong>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4>POPULAR TAG</h4>
            <div className="footer-tags">
              {[
                "Game",
                "iPhone",
                "TV",
                "Asus Laptops",
                "Macbook",
                "SSD",
                "Graphics Card",
                "Power Bank",
                "Smart TV",
                "Speaker",
                "Tablet",
                "Microwave",
                "Samsung",
              ].map((tag) => (
                <span
                  key={tag}
                  className={tag === "Graphics Card" ? "active-tag" : ""}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}