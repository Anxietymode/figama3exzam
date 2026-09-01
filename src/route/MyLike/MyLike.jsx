import {
  FaHome,
  FaChevronLeft,
  FaTrash,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { COMPUTER_ACCESSORIES_GRID } from "../../data/data";
import { StoreNavbar } from "../../components/StoreNavbar/StoreNavbar";
import { useLike } from "../../context/likeContext";
import { useCart } from "../../context/cartContext";
import "./MyLike.css";

const SUGGESTED_PRODUCTS = COMPUTER_ACCESSORIES_GRID.slice(0, 4).map((prod) => ({
  id: prod.id,
  name: prod.title,
  price: prod.price,
  oldPrice: prod.oldPrice || 0,
  discount: prod.badge,
  btnPrice: `₹${prod.price}`,
  image: prod.image,
}));

export default function MyLike() {
  const { likeItems, addToLike, removeItem } = useLike();
  const { addToCart } = useCart();

  return (
    <div className="like-page-wrapper">
      <StoreNavbar />

      <div className="breadcrumb-bar">
        <div className="page-container breadcrumb-inner">
          <span>
            <FaHome className="home-icon" /> Home
          </span>
          <span className="bc-sep">&gt;</span>
          <span className="active-bc">Wishlist</span>
        </div>
      </div>

      <main className="page-container like-main-content">
        <div className="like-actions-header">
          <button className="back-btn" onClick={() => window.history.back()}>
            <span className="back-icon-circle">
              <FaChevronLeft />
            </span>
            <strong>Back</strong>
          </button>
          <button className="like-header-icon">
            <FaHeart />
          </button>
        </div>

        <h1 className="like-title">My Wishlist</h1>
        <p className="like-subtitle">Products you loved</p>

        <div className="items-count-head">
          Number of Items {likeItems.length}
        </div>

        {likeItems.length === 0 ? (
          <div className="like-empty">
            <h3>Your wishlist is empty</h3>
            <p>Tap the heart icon on a product to add it here.</p>
            <Link to="/" className="back-to-shop">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="like-grid">
            {likeItems.map((item) => (
              <div className="like-card" key={item.id}>
                <div className="like-img-container">
                  <img src={item.image} alt={item.name} />
                  <button
                    className="like-remove-btn"
                    onClick={() => removeItem(item.id)}
                    title="Remove"
                  >
                    <FaTrash />
                  </button>
                </div>
                <div className="like-card-body">
                  <h4 className="like-card-name">{item.name}</h4>
                  <div className="like-card-price-row">
                    <span className="curr-price">₹{item.price.toFixed(2)}</span>
                    {item.oldPrice > 0 && (
                      <span className="old-price">
                        ₹{item.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button
                    className="like-add-btn"
                    onClick={() =>
                      addToCart({ ...item, title: item.name })
                    }
                  >
                    <FaShoppingBag /> Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="suggested-section">
          <div className="suggested-header">
            <h3>YOU MIGHT ALSO LIKE</h3>
          </div>

          <div className="suggested-grid">
            {SUGGESTED_PRODUCTS.map((prod) => (
              <div className="suggested-card" key={prod.id}>
                <div className="sugg-img-container">
                  <img src={prod.image} alt={prod.name} />
                  <button
                    className={`sugg-like-btn ${prod.id ? "" : ""}`}
                    onClick={() => addToLike(prod)}
                    title="Add to wishlist"
                  >
                    <FaHeart />
                  </button>
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
      </main>
    </div>
  );
}
