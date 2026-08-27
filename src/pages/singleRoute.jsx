import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LandingPage from '../route/Products/Products';
import { getProductById, ALL_PRODUCTS } from '../data/data';

const mapProduct = (p) => p ? ({
  id: p.id,
  name: p.title,
  image: p.image,
  images: p.images && p.images.length ? p.images : (p.image ? [p.image] : []),
  price: p.price,
  oldPrice: p.oldPrice,
  rating: p.rating,
  reviews: p.reviewCount || p.reviews,
  description: p.desc,
  longDescription: p.longDesc,
  sku: p.sku,
  brand: p.brand,
  dealPrice: p.dealPrice,
  offer: p.offer,
  offerImage: p.offerImage
}) : null;

const relate = (p) => ({
  id: p.id,
  name: p.title,
  image: p.image,
  images: p.images,
  price: p.price,
  rating: p.rating,
  reviews: p.reviewCount || p.reviews,
  offer: p.offer,
  offerImage: p.offerImage,
  brand: p.brand
});

export const SingleRoute = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const mapped = mapProduct(product);
  const related = ALL_PRODUCTS.map(relate);

  useEffect(() => {
    const focusPhoto = () => {
      const photo = document.querySelector('.main-product-photo');
      if (photo) {
        photo.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    const timeoutId = setTimeout(focusPhoto, 100);
    return () => clearTimeout(timeoutId);
  }, [id]);

  if (!mapped) {
    return <div className="product-not-found">Товар не найден</div>;
  }

  return <LandingPage product={mapped} products={related} />;
};
