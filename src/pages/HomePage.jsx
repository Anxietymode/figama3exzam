import React from 'react';
import { useCart } from '../context/cartContext';
import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { BestDeals } from '../components/BestDeals/BestDeals';
import { CategoryGrid } from '../components/CategoryGrid/CategoryGrid';
import { FeaturedProducts } from '../components/FeaturedProducts/FeaturedProducts';
import { ComputerAccessories } from '../components/ComputerAccessories/ComputerAccessories';
import { PromoBanners } from '../components/PromoBanners/PromoBanners';
import { MacbookBanner } from '../components/MacbookBanner/MacbookBanner';
import { WidgetColumns } from '../components/WidgetColumns/WidgetColumns';
import { LatestNews } from '../components/LatestNews/LatestNews';
import { Footer } from '../components/Footer/Footer';
import { HERO_MAIN } from '../data/data';

export const HomePage = () => {
  const { addToCart } = useCart();
  const handleAddToCart = () => addToCart(HERO_MAIN, 1);
  return (
    <div className="clicon-app">
      <Header />
      <HeroSection onAddToCart={handleAddToCart} />
      <BestDeals />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoBanners />
      <ComputerAccessories />
      <MacbookBanner />
      <WidgetColumns />
      <LatestNews />
      <Footer />
    </div>
  );
};