import React, { useState } from "react";
import {
  FaHome,
  FaCheck,
  FaShoppingCart,
  FaChevronLeft,
  FaChevronRight,
  FaTag,
  FaHeart,
  FaExchangeAlt,
  FaDownload,
  FaApple,
} from "react-icons/fa";
import { StoreNavbar } from "../../components/StoreNavbar/StoreNavbar";
import { useCart } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./Products.css";

import apple11 from "../../assets/2d957029fa10f859fa3b62e42cfcff88f341b99f.png"

import realmi from "../../assets/2bfdce2a2dd63a5fa5329f74bea440064b616294.png"

import xiomi11 from "../../assets/954603ea61eccec3afecbe916c242c4460169441.png"

export default function LandingPage({ product, products = [] }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [search, setSearch] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);

  const images = product?.images || [];

  const filteredProducts = products.filter((item) =>
    item?.name?.toLowerCase().includes(search.toLowerCase())
  );

  const nextImage = () => {
    if (!images.length) return;

    setActiveImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!images.length) return;

    setActiveImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="united-page">

      <StoreNavbar search={search} onSearchChange={setSearch} />

      <div className="breadcrumb-bar">
        <div className="page-container breadcrumb-inner">

          <span><FaHome /> HOME</span>
          <b>/</b>
          <span>Shop</span>
          <b>/</b>
          <span>Shop Grid</span>
          <b>/</b>
          <span>Electronics Devices</span>
          <b>/</b>

          <strong>
            {product?.name || "MacBook Pro"}
          </strong>

        </div>
      </div>

      <section className="product-section">
        <div className="page-container product-layout">

          <div className="product-gallery">

            <div className="main-product-photo">

              {images.length > 0 ? (
                <img
                  src={images[activeImage]}
                  alt={product?.name || "Product"}
                />
              ) : (
                <div className="no-product-image">
                  No image
                </div>
              )}

            </div>

            <div className="gallery-thumbnails">

              <button
                className="gallery-control"
                onClick={prevImage}
              >
                <FaChevronLeft />
              </button>

              <div className="thumbnail-list">

                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`thumbnail ${activeImage === index ? "active" : ""
                      }`}
                  >
                    <img src={image} alt="" />
                  </button>
                ))}

              </div>

              <button
                className="gallery-control"
                onClick={nextImage}
              >
                <FaChevronRight />
              </button>

            </div>

          </div>

          <div className="product-details">

            <div className="rating-row">

              <span className="rating-stars">
                ★★★★★
              </span>

              <strong>
                {product?.rating || "4.7"}
              </strong>

              <span>
                Star Rating
              </span>

              <span className="rating-reviews">
                ({product?.reviews || "21,671"} User feedback)
              </span>

            </div>

            <h1 className="product-title">
              {product?.name ||
                "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray"}
            </h1>

            <div className="product-meta-grid">

              <div>
                <span>SKU:</span>
                <strong>
                  {product?.sku || "A234671"}
                </strong>
              </div>

              <div>
                <span>Availability:</span>
                <strong className="stock">
                  In Stock
                </strong>
              </div>

              <div>
                <span>Brand:</span>
                <strong>
                  {product?.brand || "Apple"}
                </strong>
              </div>

              <div>
                <span>Category:</span>
                <strong>
                  Electronics Devices
                </strong>
              </div>

            </div>

            <div className="price-area">

              <strong className="product-price">
                Rs {product?.price || "125000"}
              </strong>

              {product?.oldPrice && (
                <span className="product-old-price">
                  Rs {product.oldPrice}
                </span>
              )}

              <span className="discount-badge">
                21% OFF
              </span>

            </div>

            <div className="price-or">
              or
            </div>

            <div className="deal-price">
              Get it for{" "}
              <strong>
                Rs {product?.dealPrice || "90,000"}
              </strong>
            </div>

            <div className="product-options">

              <div className="option-column">
                <label>Color</label>

                <div className="color-options">

                  <button
                    className={`color-option gold ${selectedColor === 0
                      ? "selected"
                      : ""
                      }`}
                    onClick={() => setSelectedColor(0)}
                  />

                  <button
                    className={`color-option navy ${selectedColor === 1
                      ? "selected"
                      : ""
                      }`}
                    onClick={() => setSelectedColor(1)}
                  />

                </div>
              </div>

              <div className="option-column">
                <label>Size</label>

                <select defaultValue="14">
                  <option value="14">
                    14-inch Liquid Retina XDR display
                  </option>

                  <option value="13">
                    13-inch display
                  </option>
                </select>
              </div>

              <div className="option-column">
                <label>Memory</label>

                <select defaultValue="16">
                  <option value="16">
                    16GB unified memory
                  </option>

                  <option value="8">
                    8GB unified memory
                  </option>

                  <option value="32">
                    32GB unified memory
                  </option>
                </select>
              </div>

              <div className="option-column">
                <label>Storage</label>

                <select defaultValue="1tb">
                  <option value="1tb">
                    1TB SSD Storage
                  </option>

                  <option value="512gb">
                    512GB SSD Storage
                  </option>

                  <option value="256gb">
                    256GB SSD Storage
                  </option>
                </select>
              </div>

            </div>

            <div className="purchase-row">

              <div className="quantity-control">

                <button
                  onClick={() =>
                    setQuantity((value) =>
                      Math.max(1, value - 1)
                    )
                  }
                >
                  −
                </button>

                <span>
                  {String(quantity).padStart(2, "0")}
                </span>

                <button
                  onClick={() =>
                    setQuantity((value) => value + 1)
                  }
                >
                  +
                </button>

              </div>

              <button
                className="get-deal-button"
                onClick={() => addToCart(product, quantity)}
              >
                <FaTag /> GET DEAL (₹90K)
              </button>

              <button
                className="add-cart-button"
                onClick={() => addToCart(product, quantity)}
              >
                <FaShoppingCart /> ADD
              </button>

            </div>

            <div className="product-small-actions">

              <button>
                <FaHeart /> Add to Wishlist
              </button>

              <button>
                <FaExchangeAlt /> Add to Compare
              </button>

              <div>
                Share product:
                <span> ●</span>
                <span> ●</span>
                <span> ●</span>
                <span> ●</span>
              </div>

            </div>

            <div className="safe-checkout">

              <div className="safe-title">
                100% Guarantee Safe Checkout
              </div>

              <div className="payment-list">
                <span>VISA</span>
                <span>MC</span>
                <span>PayPal</span>
                <span>AMEX</span>
                <span>GPay</span>
                <span>UPI</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="description-section">
        <div className="page-container description-box">

          <div className="description-tabs">

            <button
              className={
                activeTab === "description"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("description")
              }
            >
              DESCRIPTION
            </button>

            <button
              className={
                activeTab === "additional"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("additional")
              }
            >
              ADDITIONAL INFORMATION
            </button>

            <button
              className={
                activeTab === "specification"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("specification")
              }
            >
              SPECIFICATION
            </button>

            <button
              className={
                activeTab === "review"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("review")
              }
            >
              REVIEW
            </button>

          </div>

          <div className="description-body">

            {activeTab === "description" && (
              <div className="description-grid">

                <div className="description-main">

                  <h3>
                    Description
                  </h3>

                  <p>
                    {product?.description ||
                      "THE MOST POWERFUL MACBOOK PRO EVER IS HERE. WITH THE BLAZING-FAST PERFORMANCE, MASSIVE MEMORY AND ADVANCED DISPLAY TECHNOLOGY, THIS LAPTOP DELIVERS OUTSTANDING PERFORMANCE FOR PROFESSIONAL USERS."}
                  </p>

                  <p>
                    {product?.longDescription ||
                      "MACBOOK PRO IS A BEAST. IT PROVIDES A PREMIUM EXPERIENCE WITH POWERFUL HARDWARE, EXCELLENT ARCHITECTURE AND EVERYTHING NEEDED FOR PROFESSIONAL USERS."}
                  </p>

                </div>

                <div className="description-features">

                  <h3>
                    Feature
                  </h3>

                  <div className="feature-item">
                    <FaCheck />
                    Free 1 Year Warranty
                  </div>

                  <div className="feature-item">
                    <FaCheck />
                    Free Shipping & Fastest Delivery
                  </div>

                  <div className="feature-item">
                    <FaCheck />
                    100% Money-back guarantee
                  </div>

                  <div className="feature-item">
                    <FaCheck />
                    24/7 Customer support
                  </div>

                  <div className="feature-item">
                    <FaCheck />
                    Secure payment method
                  </div>

                </div>

                <div className="shipping-information">

                  <h3>
                    Shipping Information
                  </h3>

                  <p>
                    Courier: 2-4 days, free shipping
                  </p>

                  <p>
                    Local Shipping: free shipping
                  </p>

                  <p>
                    UPS Ground Shipping: 4-6 days
                  </p>

                  <p>
                    Worldwide Global Export: 3-4 days
                  </p>

                </div>

              </div>
            )}

            {activeTab === "additional" && (
              <div className="simple-tab-content">
                <h3>
                  Additional Information
                </h3>

                <p>
                  Product information is loaded from
                  your database.
                </p>
              </div>
            )}

            {activeTab === "specification" && (
              <div className="simple-tab-content">
                <h3>
                  Specification
                </h3>

                <p>
                  Product specifications are loaded
                  dynamically from your API.
                </p>
              </div>
            )}

            {activeTab === "review" && (
              <div className="simple-tab-content">
                <h3>
                  Customer Reviews
                </h3>

                <p>
                  {product?.reviews || "21,671"} customer
                  reviews.
                </p>
              </div>
            )}

          </div>
        </div>
      </section>

      <section className="frequently-section">
        <div className="page-container">

          <div className="section-title-row">

            <h2>
              FREQUENTLY BOUGHT TOGETHER
            </h2>

            <button>
              VIEW ALL
            </button>

          </div>

          <div className="products-grid">

            {filteredProducts.slice(0, 12).map((item, index) => {

              const image =
                item?.image ||
                item?.images?.[0];

              return (
                <article
                  className="deal-product-card"
                  key={item?.id || index}
                >

                  <div className="deal-image">

                    {image ? (
                      <img
                        src={image}
                        alt={item?.name || "Product"}
                      />
                    ) : (
                      <div className="no-card-image">
                        No image
                      </div>
                    )}

                  </div>

                  <h3>
                    {item?.name}
                  </h3>

                  <div className="deal-rating">

                    <span>
                      ★★★★★
                    </span>

                    <strong>
                      {item?.rating || "4.7"}
                    </strong>

                    <small>
                      ({item?.reviews || "21,671"} Ratings)
                    </small>

                  </div>

                  <button
                    className="buy-now-button"
                    onClick={() => addToCart(item, 1)}
                  >
                    BUY NOW -
                    <span>
                      ₹{item?.price || "125"}
                    </span>
                  </button>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      <section className="offers-section">
        <div className="page-container">

          <div className="section-title-row">

            <h2>
              TOP OFFERS IN ELECTRONICS
            </h2>

            <button>
              VIEW ALL
            </button>

          </div>

          <div className="offers-grid">

            {products
              .filter((item) => item?.offer)
              .slice(0, 3)
              .map((item, index) => (

                <article
                  className={`offer-card offer-${index + 1}`}
                  key={item?.id || index}
                >

                  <div className="offer-content">

                    <span className="offer-brand">
                      {item?.brand || "BRAND"}
                    </span>

                    <h3>
                      {item?.offerTitle ||
                        "UP to 80% OFF"}
                    </h3>

                  </div>

                  {(item?.offerImage ||
                    item?.image ||
                    item?.images?.[0]) && (
                      <img
                        src={
                          item?.offerImage ||
                          item?.image ||
                          item?.images?.[0]
                        }
                        alt={item?.name || "Offer"}
                      />
                    )}

                </article>

              ))}

          </div>
        </div>
      </section>
      <section className="page-container section-top-offers">

      <div className="banners-grid">
        
        <div className="promo-banner banner-dark">
          <div className="discount-pill">12% OFF</div>
          <div className="banner-content">
            <FaApple className="brand-icon-large" />
            <h3>UP to 80% OFF</h3>
          </div>
          <img 
            src={apple11} 
            alt="Apple Deals" 
            className="banner-img" 
          />
        </div>

        {}
        <div className="promo-banner banner-yellow">
          <div className="discount-pill">25% OFF</div>
          <div className="banner-content">
            <div className="brand-text">realme</div>
            <h3>UP to 80% OFF</h3>
          </div>
          <img 
            src={realmi} 
            className="banner-img" 
          />
        </div>

        <div className="promo-banner banner-orange">
          <div className="discount-pill">15% OFF</div>
          <div className="banner-content">
            <div className="brand-box-mi">MI</div>
            <h3>UP to 80% OFF</h3>
          </div>
          <img 
            src={xiomi11} 
            alt="Xiaomi Deals" 
            className="banner-img" 
          />
        </div>
      </div>
    </section>
       <br />
      <footer className="site-footer">

        <div className="page-container footer-grid">

          <div className="footer-company">

            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">
                ●
              </span>
              UNITED DEAL
            </Link>

            <div className="footer-text">
              Customer Support:
              <br />
              (629) 555-0129
            </div>

            <div className="footer-text">
              4517 Washington Ave.
              <br />
              Manchester, Kentucky 39495
            </div>

            <div className="footer-text">
              info@xyz.com
            </div>

          </div>

          <div className="footer-column">

            <h4>
              TOP CATEGORY
            </h4>

            <a href="#">Computer & Laptop</a>
            <a href="#">Smart Phone</a>
            <a href="#">Headphones</a>
            <a href="#">Accessories</a>
            <a href="#">Camera & Photo</a>
            <a href="#">TV & Home</a>

            <a
              href="#"
              className="footer-yellow"
            >
              Browse All Product →
            </a>

          </div>

          <div className="footer-column">

            <h4>
              QUICK LINKS
            </h4>

            <a href="#">Shop Product</a>
            <a href="#">Shopping Cart</a>
            <a href="#">Wishlist</a>
            <a href="#">Compare</a>
            <a href="#">Track Order</a>
            <a href="#">Customer Help</a>
            <a href="#">About Us</a>

          </div>

          <div className="footer-column">

            <h4>
              DOWNLOAD APP
            </h4>

            <div className="download-button">
              <FaDownload />
              <div>
                <small>Get it now</small>
                <strong>Google Play</strong>
              </div>
            </div>

            <div className="download-button">
              <FaApple />
              <div>
                <small>Get it now</small>
                <strong>App Store</strong>
              </div>
            </div>

          </div>

          <div className="footer-column">

            <h4>
              POPULAR TAG
            </h4>

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
                "Microphone",
                "Streaming",
              ].map((tag) => (
                <span key={tag}>
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