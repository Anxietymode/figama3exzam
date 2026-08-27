import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaHome,
  FaChevronLeft,
  FaChevronDown,
  FaThLarge,
  FaListUl,
  FaDownload,
  FaPlus,
  FaMinus,
  FaApple,
  FaStar,
  FaCoins,
} from "react-icons/fa";
import { StoreNavbar } from "../../components/StoreNavbar/StoreNavbar";
import { useCart } from "../../context/cartContext";
import { ZARA_PRODUCTS } from "../../data/data";
import "./ZaraProducts.css";

const BRANDS = [
  "Nike",
  "Reebok",
  "Zara",
  "Gearo",
  "Indi",
  "Aei",
  "Lulu",
  "Beast",
];

export default function AllProducts() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState("grid");
  const [itemsToShow, setItemsToShow] = useState(9);
  const [sortBy, setSortBy] = useState("Position");
  const [selectedBrands, setSelectedBrands] = useState(["Zara"]);

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="products-page-wrapper">
      <StoreNavbar />

      <div className="breadcrumb-bar">
        <div className="page-container breadcrumb-inner">
          <span>
            <FaHome className="home-icon" /> Home
          </span>
          <span className="bc-sep">&gt;</span>
          <span>Shop</span>
          <span className="bc-sep">&gt;</span>
          <span>Shop Grid</span>
          <span className="bc-sep">&gt;</span>
          <span>Electronics Devices</span>
          <span className="bc-sep">&gt;</span>
          <span className="active-bc">Macbook Pro</span>
        </div>
      </div>

      <main className="page-container main-products-content">
        
        <div className="toolbar-row">
          <div className="toolbar-left">
            <button
              className="back-circle-btn"
              onClick={() => window.history.back()}
            >
              <FaChevronLeft />
            </button>
            <h1 className="page-title">ZARA</h1>
          </div>

          <div className="toolbar-right">
            <div className="view-switchers">
              <button
                className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
              >
                <FaThLarge />
              </button>
              <button
                className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
              >
                <FaListUl />
              </button>
            </div>

            <div className="showing-info">Showing 1 - 40 of 145 items</div>

            <div className="select-control">
              <label>To Show:</label>
              <select
                value={itemsToShow}
                onChange={(e) => setItemsToShow(Number(e.target.value))}
              >
                <option value={9}>9</option>
                <option value={18}>18</option>
                <option value={36}>36</option>
              </select>
            </div>

            <div className="select-control sort-control">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="Position">Position</option>
                <option value="Name">Name</option>
                <option value="Popularity">Popularity</option>
              </select>
              <FaChevronDown className="select-chevron" />
            </div>
          </div>
        </div>

        <div className="content-layout">
          
          <aside className="sidebar-filters">
            <div className="filter-group">
              <div className="filter-header">
                <span>Size</span>
                <FaPlus />
              </div>
            </div>

            <div className="filter-group">
              <div className="filter-header open">
                <span>Brand</span>
                <FaMinus />
              </div>
              <div className="filter-body">
                {BRANDS.map((brand) => (
                  <label key={brand} className="custom-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                    />
                    <span className="checkmark"></span>
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <div className="filter-header">
                <span>Brand</span>
                <FaPlus />
              </div>
            </div>
            <div className="filter-group">
              <div className="filter-header">
                <span>Price Range</span>
                <FaPlus />
              </div>
            </div>
            <div className="filter-group">
              <div className="filter-header">
                <span>Discount</span>
                <FaPlus />
              </div>
            </div>
            <div className="filter-group">
              <div className="filter-header">
                <span>Availability</span>
                <FaPlus />
              </div>
            </div>
          </aside>

          <div className={`products-grid ${viewMode}`}>
            {ZARA_PRODUCTS.map((prod) => (
              <div
                className="product-card"
                key={prod.id}
                onClick={() => navigate(`/product/${prod.id}`)}
              >
                <div className="prod-img-wrapper">
                  <img src={prod.image} alt={prod.title} />
                </div>

                {prod.hasFlashDeal && (
                  <div className="flash-deal-container">
                    <span className="flash-deal-text">{prod.flashText}</span>
                    <div className="progress-bar-bg">
                      <div
                        className="progress-bar-fill"
                        style={{ "--progress": `${prod.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <h3 className="prod-title">{prod.title}</h3>

                <div className="prod-rating">
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="rating-score">{prod.rating}</span>
                  <span className="rating-count">({prod.reviews} Ratings)</span>
                </div>

                <div className="prod-actions">
                  {prod.hasGetDeal && (
                    <button
                      className="btn-get-deal"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(prod);
                      }}
                    >
                      <FaCoins className="coin-icon" /> GET DEAL - ₹{prod.price}
                    </button>
                  )}
                  <button
                    className="btn-buy-now"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(prod);
                    }}
                  >
                    BUY NOW - ₹{prod.price}
                  </button>
                </div>
              </div>
            ))}
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
            <a href="#link">Shopping Cart</a>
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