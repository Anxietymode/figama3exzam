import {
  FaBars,
  FaSearch,
  FaTags,
  FaUser,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import logo from "../../assets/b59e61a50da50cb344a597babea6a380840deb3f.png";
import "./StoreNavbar.css";

const CATEGORIES = [
  "Groceries",
  "Premium Fruits",
  "Home & Kitchen",
  "Fashion",
  "Electronics",
  "Beauty",
  "Home Improvement",
  "Sports, Toys & Luggage",
];

export const StoreNavbar = ({ search, onSearchChange }) => {
  const { cartCount, goToCart } = useCart();

  return (
    <div className="store-navbar">
      <div className="topbar">
        <div className="page-container topbar-inner">
          <div className="welcome-text">Welcome to worldwide Megamart!</div>
          <div className="topbar-links">
            <span>Deliver to 423651</span>
            <span className="top-divider"></span>
            <span>Track your order</span>
            <span className="top-divider"></span>
            <span>All Offers</span>
          </div>
        </div>
      </div>

      <header className="main-header">
        <div className="page-container header-inner">
          <button className="menu-button">
            <FaBars />
          </button>

          <Link to="/" className="brand-logo">
            UNITED DEALS
            <img src={logo} alt="UNITED DEALS" className="brand-logo-img" />
          </Link>

          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search essentials, groceries and more..."
              value={onSearchChange ? search : undefined}
              defaultValue={onSearchChange ? undefined : ""}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            />
          </div>

          <div className="header-right">
            <button className="my-deals">
              <FaTags /> My Deals
            </button>
            <button className="account-button">
              <FaUser /> Sign Up/Sign In
            </button>
            <button className="cart-button" onClick={goToCart}>
              <FaShoppingCart /> Cart
              {cartCount > 0 && <span className="header-cart-count">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      <div className="category-navigation">
        <div className="page-container category-inner">
          {CATEGORIES.map((category) =>
            category === "Fashion" ? (
              <Link
                key={category}
                to="/zara-products"
                className="category-item"
              >
                {category} <FaChevronDown />
              </Link>
            ) : (
              <button
                key={category}
                className={`category-item${category === CATEGORIES[0] ? " active" : ""}`}
              >
                {category} <FaChevronDown />
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};