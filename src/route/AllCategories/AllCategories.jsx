import React, { useState } from "react";
import {
  FaHome,
  FaChevronLeft,
  FaChevronDown,
  FaThLarge,
  FaListUl,
  FaDownload,
  FaApple,
} from "react-icons/fa";
import { StoreNavbar } from "../../components/StoreNavbar/StoreNavbar";
import { Link } from "react-router-dom";
import "./AllCategories.css";

import phone from "../../assets/d14ed859a913d4fe13f5ef0e3ab8e8e7f005f082.png"

import cosmetic from "../../assets/05aa078ec62ab7d7fd3664e89f562f5b60e56f6c.png"

import electric from "../../assets/1599c35cd55360a62dc187c50accc371a02f27a5.png"

import furni from "../../assets/62a1853b22a421c6ed341e18ea1af07dc60a89f6.png"

import watch from "../../assets/f0c09379745c2cc486f326929cc1b8f54c4ef1b6.png"

import decor from "../../assets/f7bc1259bbbdeb4996f3deba3c6b1e684e055691.png"

const BASE_CATEGORIES = [
  {
    id: 1,
    title: "Mobile",
    image: phone,
  },
  {
    id: 2,
    title: "Cosmetics",
    image: cosmetic,
  },
  {
    id: 3,
    title: "Electronics",
    image: electric,
  },
  {
    id: 4,
    title: "Furniture",
    image: furni,
  },
  {
    id: 5,
    title: "Watches",
    image: watch,
  },
  {
    id: 6,
    title: "Decor",
    image: decor,
  },
];

const GRID_ITEMS = Array.from({ length: 42 }, (_, index) => {
  const base = BASE_CATEGORIES[index % BASE_CATEGORIES.length];
  return {
    ...base,
    uniqueId: `${base.id}-${index}`,
    selected: index === 0,
  };
});

export default function AllCategories() {
  const [viewMode, setViewMode] = useState("grid");
  const [itemsToShow, setItemsToShow] = useState(9);
  const [sortBy, setSortBy] = useState("Position");

  return (
    <div className="cat-page-wrapper">
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

      <main className="page-container main-cat-content">
        
        <div className="toolbar-row">
          <div className="toolbar-left">
            <button className="back-circle-btn" onClick={() => window.history.back()}>
              <FaChevronLeft />
            </button>
            <h1 className="page-title">All Categories</h1>
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
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="Position">Position</option>
                <option value="Name">Name</option>
                <option value="Popularity">Popularity</option>
              </select>
              <FaChevronDown className="select-chevron" />
            </div>
          </div>
        </div>

        <div className={`categories-grid ${viewMode}`}>
          {GRID_ITEMS.map((item) => (
            <div
              key={item.uniqueId}
              className={`category-card ${item.selected ? "selected" : ""}`}
            >
              <div className="card-image-circle">
                <img src={item.image} alt={item.title} />
              </div>
              <span className="card-title">{item.title}</span>
            </div>
          ))}
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